
let loader;
let exportRoot = null;
let stage = null;
let canvas;
let ctx;
let currentPage = 1;

// resize 이벤트 리스너 관리용
const resizeListeners = {};
const dynamicScripts = [];

// AdobeAn.makeResponsive 단일 바인딩 패치
//Animate 스크립트(AdobeAn)가 로드된 뒤 전역 AdobeAn.makeResponsive를 “한 번만 리사이즈 리스너를 붙이는 버전”으로 교체
//이후후 프로젝트 어디에서든 AdobeAn.makeResponsive(...)를 호출하면, 원래 기능은 유지하면서 resize 이벤트 등록은 단 한 번만 일어남
//IIFE (즉시 실행함수)
(function(){
  function patchMakeResponsive() {

   // 한번만 바인딩 여부 체크
    let hasBind = false;
    let resizeCanvas;

  // 새 함수로 대체
  AdobeAn.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
    // 첫 호출 시에만 리사이즈 핸들러를 정의·등록
   if (!hasBind) {
        // 저장된 파라미터 기반으로 resizeCanvas 정의
        resizeCanvas = function() {
          // 콘텐츠 원본 크기
          const w = lib.properties.width;
          const h = lib.properties.height;
          // 뷰포트 크기
          const iw = window.innerWidth;
          const ih = window.innerHeight;
          const pRatio = window.devicePixelRatio || 1;
          const xRatio = iw / w;
          const yRatio = ih / h;
          let sRatio = 1;

          if (isResp) {
            if ((respDim === 'width'  && resizeCanvas.lastW === iw) ||
                (respDim === 'height' && resizeCanvas.lastH === ih)) {
              sRatio = resizeCanvas.lastS;
            }
            else if (!isScale) {
              if (iw < w || ih < h) {
                sRatio = xRatio;
              }
            }
            else if (scaleType === 1) {
              sRatio = Math.min(xRatio, yRatio);
            }
            else if (scaleType === 2) {
              sRatio = Math.max(xRatio, yRatio);
            }
          }

          // 캔버스 픽셀 크기 조정
          domContainers[0].width  = w * pRatio * sRatio;
          domContainers[0].height = h * pRatio * sRatio;

          // DOM 컨테이너 스타일 크기 조정
          domContainers.forEach(container => {
            container.style.width  = w * sRatio + 'px';
            container.style.height = h * sRatio + 'px';
          });

          // 스테이지 스케일 적용
          stage.scaleX = pRatio * sRatio;
          stage.scaleY = pRatio * sRatio;

          // 이전 크기 저장
          resizeCanvas.lastW = iw;
          resizeCanvas.lastH = ih;
          resizeCanvas.lastS = sRatio;

          // 강제 갱신
          stage.tickOnUpdate = false;
          stage.update();
          stage.tickOnUpdate = true;
        };

        // 이벤트에 바인딩
        window.addEventListener('resize', resizeCanvas);
        hasBind = true;
      }

      // 매 호출마다 즉시 한 번 실행
      resizeCanvas();
  };
}

function tryPatch() {
  if (typeof AdobeAn !== 'undefined' && typeof AdobeAn.makeResponsive === 'function') {
    patchMakeResponsive();
  } else {
    // 100ms 후 재시도 (Animate 스크립트 로딩이 완료될 때까지)
    setTimeout(tryPatch, 100);
  }
}

tryPatch();

})();

/**
 * AdobeAn.makeResponsive 패치하여, 리사이즈 리스너가 중복 등록되지 않도록 함
 * Compose 단위로 한 번만 바인딩하기 때문에, 여러 페이지 전환 시 무분별한 resize 누적을 막는다.
 * @param {string} compId - AdobeAn composition ID
 */
function patchMakeResponsive(compId) {
  const comp = AdobeAn.getComposition(compId);
  if (!comp || comp._makeRespPatched) return;
  comp._makeRespPatched = true;

  const origMake = comp.makeResponsive;
  comp.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
    // 기존 리사이즈 로직 실행
    origMake.call(comp, isResp, respDim, isScale, scaleType, domContainers);
    // listener는 한 번만 등록
    if (!resizeListeners[compId]) {
      const listener = () => origMake.call(comp, isResp, respDim, isScale, scaleType, domContainers);
      window.addEventListener('resize', listener);
      resizeListeners[compId] = listener;
    }
  };
}

/** 리소스 정리 함수 */
function cleanUpAll() {
  //Ticker 해제
  createjs.Ticker.removeAllEventListeners('tick');

  //Stage, ExportRoot 해제
  if (exportRoot) {
    exportRoot.stop();
    exportRoot.removeAllEventListeners();
    exportRoot = null;
  }

  if (stage) {
    stage.removeAllChildren(); // 모든 디스플레이 오브젝트 제거
    stage.removeAllEventListeners();
    stage.update();
    stage = null;
  }

  //LoadQueue 캐시 완전 해제
  if (loader) {
    loader.removeAllEventListeners();

    // Queue 내부 manifest, 이미지를 비웁니다.
    if (loader.getItems) {
      loader.getItems().forEach(item => loader.remove(item));
    }

    loader.close();
    loader = null;
  }

  //윈도우 리사이즈 리스너 해제
  for (const id in resizeListeners) {
    window.removeEventListener('resize', resizeListeners[id]);
    delete resizeListeners[id];
  }

  //Bootstrap 캐시 배열 초기화
  if (window.AdobeAn) {
    if (Array.isArray(AdobeAn.bootstrapListeners)) AdobeAn.bootstrapListeners.length = 0;
  if (Array.isArray(AdobeAn.bootcompsLoaded))  AdobeAn.bootcompsLoaded.length  = 0;
  AdobeAn.compositions = {};
  }

  //DOM overlay 완전 초기화
  const overlay = document.getElementById("dom_overlay_container");
  if (overlay) overlay.innerHTML = "";

  //동적 스크립트 일괄 제거
  dynamicScripts.forEach(s => {
    s.cancel?.();
    s.remove();
  });
  dynamicScripts.length = 0;  

  //캔버스 리셋
  canvas.width = canvas.width; //픽셀버퍼 초기화
  ctx = canvas.getContext('2d', { willReadFrequently: true });

  // compositions 초기화
  if (window.AdobeAn){
   AdobeAn.compositions = {};
  }
}

$(document).ready(function () {
  //===================================================
  // 메인화면
  //===================================================
  //메뉴 버튼 클릭
  $('.main_menu').click(function () {  
    $('.main_page').hide();
    $('.content_page').show();
  })


  // canvas 요소와 컨텍스트 초기화
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d", { willReadFrequently: true });

  //===================================================
  // 퀵 메뉴
  //===================================================
  $('.quick_menu .quick_btn').click(function () {
    $('.quick_menu').toggleClass('close');

    const $btnSpan = $(this).find('> span');
    const isClosing = $btnSpan.text() === '퀵메뉴 닫기';
    $btnSpan.text(isClosing ? '퀵메뉴 열기' : '퀵메뉴 닫기');
  })

  //===================================================
  // 타이틀
  //===================================================
  $('#home_btn').click(function () {
    $('.main_page').show();
  })

  //===================================================
  // 왼쪽메뉴 생성 및 콘텐츠 로딩
  //===================================================  

  const menusArray = menus.menu1; // 예: menu1 사용중
  const totalPage = menusArray.length;

  // 처음 로딩
  createLeftMenu('menu1');
  // loadContent(currentPage);
  updatePageCount();

  /** 좌측 메뉴 생성 */
  function createLeftMenu(menu) {
    // 기존 메뉴 항목을 제거
    $('#leftmenu').empty();

    // 새 메뉴 항목을 생성하여 추가
    const menuItems = menus[menu];
    const $ul = $('<ul></ul>');

    // li>a>span>span
    menuItems.forEach((item, index) => {
      const $li = $('<li></li>');
      const $a = $('<a></a>').attr('href', item.path);
      const $wrap = $('<span class="link-wrap"></span>');
      const $indexSpan = $('<span class="menu-index"></span>').text(`${index + 1})\u00A0`); //\u00A0:nbsp

      const $fileName = item.path + '/content.html';

      $wrap.append($indexSpan).append(document.createTextNode(item.text)); // 텍스트도 같이 감싸기
      $a.append($wrap);
      $li.append($a);
      $ul.append($li);

      //왼쪽 메뉴 클릭 시 컨텐츠 업로드하고 왼쪽 메뉴 닫기
      $li.click(function (e) {
        e.preventDefault();

        //메뉴 닫기
        showHideLeftMenu();

        //메뉴별 스크립트 로드
        currentPage = index + 1;
        loadContent(currentPage);
        updatePageCount();        
      })
    });
    $('#leftmenu').append($ul);
  }

  //왼쪽 메뉴 보이기(토글)
  function showHideLeftMenu(){   
    const $btnSpan = $('.quick_menu .quick_btn > span');
    const isClosing = $btnSpan.text() === '퀵메뉴 닫기';
    $btnSpan.text(isClosing ? '퀵메뉴 열기' : '퀵메뉴 닫기');
    $('.quick_menu').toggleClass('close');
  }

  /** 콘텐츠 및 스크립트 로딩 */
  function loadContent(pageNum) {
    const menuItem = menusArray[pageNum - 1];
    const compId   = menuItem.compId;   //composition ID AdobeAn.getComposition("15542E2C05257E4F9DED9C8404BD2967");
    const symbolName = menuItem.dir;    //exportRoot 클래스명 앞부분 exportRoot = new lib.a_01_01_HTML5Canvas();
    const basePath = menuItem.path.endsWith('/') ? menuItem.path : menuItem.path + '/'; //02_lesson2/   
    const canvasScript = basePath + menuItem.dir + '_HTML5 Canvas.js'; //02_lesson2/a_01_01_HTML5 Canvas.js
   
    // 기존 콘텐츠 정리
    cleanUpAll();

    //스크립트 로드(a_01_04_HTML5 Canvas.js)
    loadScript(canvasScript, () => {
      // content.js 로딩
      loadScript(`js/content.js`, () => {
        // 3) 로드가 끝나면 init 호출
        loadAdobeAnimation(compId, symbolName);
      });
    });

    //왼쪽 메뉴 on 표시 처리
    $('#leftmenu ul li').removeClass('on'); // 기존 on 제거
    $('#leftmenu ul li').eq(pageNum - 1).addClass('on'); // 현재 페이지 on 추가
  }

  /** 동적 스크립트 로드 함수 */
  function loadScript(url, callback) {
    const script = document.createElement("script");
    dynamicScripts.push(script);
    script.src = url;
    script.dataset.dynamic = 'true';

    //로드 취소용 토큰
    //로드 도중 CleanUpAll()이 호출되어도 스크립트가 실행되는 걸 방지할 수 있음.
    let canceled = false;
    script.cancel = () => { canceled = true; script.remove(); };

    // 로딩 시작 시 인디케이터 표시
    showLoading(true);

    script.onload = function () {
      console.log("Script loaded successfully:", url);
      showLoading(false);
      if (!canceled) callback?.();
    };

    console.log(url);
    script.onerror = function () {
      showLoading(false);
      if (!canceled) console.error("Error loading script:", url);
    };

    document.body.appendChild(script);
    return script;
  }

  // 전역으로 내보내기
  window.loadScript = loadScript;

  //===================================================
  // 콘트롤바
  //===================================================
  //목차 버튼 클릭
  $('#index_btn').click(function () {  
    showHideLeftMenu();
  })

  // 풀스크린
  const fullBtn = document.getElementById("fullscr_btn");
  const icon = fullBtn.querySelector("i");
  const label = fullBtn.querySelector("span");

  fullBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      const el = document.documentElement;

      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.mozRequestFullScreen) { // Firefox
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) { // Chrome, Safari and Opera
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) { // IE/Edge
        el.msRequestFullscreen();
      }

    } else {
      document.exitFullscreen().catch(err => {
        console.error("전체화면 종료 실패:", err);
      });
    }
  });

  // 전체화면 상태 변경 시 아이콘/텍스트 자동 변경(ESC포함)
  document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
      icon.className = "fas fa-compress";
      label.textContent = "Restore";
    } else {
      icon.className = "fas fa-expand";
      label.textContent = "Fullscreen";
    }
  });

  // 이전 버튼
  document.getElementById('page_up').addEventListener('click', function () {
    if (currentPage > 1) {
      currentPage--;
      loadContent(currentPage);
      updatePageCount();
    }
  });

  // 다음 버튼
  document.getElementById('page_dn').addEventListener('click', function () {
    if (currentPage < totalPage) {
      currentPage++;
      loadContent(currentPage);
      updatePageCount();
    }
  });

  // 페이지 표시 업데이트
  function updatePageCount() {
    document.querySelector('.page_count').textContent = `${currentPage} / ${totalPage}`;
    document.getElementById('page_up').disabled = currentPage === 1;
    document.getElementById('page_dn').disabled = currentPage === totalPage;
  }

  //=================================================================
  // 목록 연동 콘텐츠에서 페이지 이동 basePath="02_lesson2/a_01_04"
  //=================================================================
  window.MoveContentPage = function(basePath) {
    if (!basePath) return;

    // 기존 리소스 정리
    cleanUpAll();
    
    // Canvas 스크립트와 대응되는 content.js 경로 계산
    var canvasJS = basePath + '_HTML5 Canvas.js' ;   //02_lesson2/a_01_04_HTML5 Canvas.js    
    var contentJS = basePath + '_content.js';        //02_lesson2/a_01_04_content.js

    // Canvas 스크립트 로드
    loadScript(canvasJS, () => {
      // content.js 로딩
      loadScript(contentJS);
    });
  }

}) //end of ready