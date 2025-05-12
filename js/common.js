//개발자 모드 F12 방지
// document.onkeydown = keydowncheck;
// status1="F12버튼을 사용할 수 없습니다.";
// function keydowncheck(event)
// {
// 	   var result = true;
// 	   var keycode = event.keyCode;
// 	   if(123 == keycode) 
//        {
//          //alert(status1);
// 	     event.preventDefault();
// 	     result = false;
// 	   }
// 	return result;
// }

/*
// 우측 클릭 방지
document.onmousedown=disableclick;
status2="마우스 우클릭 금지되어 있습니다.";
    
function disableclick(event){
    if (event.button==2) {
        //alert(status2);
        return;
    }
}
*/

//goback
function goBack() {
    window.history.back();
}

//move pre 2step
function goHome() {
    window.history.histroy.go(-2);
}


//window popup script
function winPop(url) {
    window.open(url, "popup", "width=300,height=300,left=10,top=10,resizable=no,scrollbars=no");
}
/**
 * document.location.href split
 * return array Param
 */
function getQueryString(sKey)
{
    var sQueryString = document.location.search.substring(1);
    var aParam       = {};

    if (sQueryString) {
        var aFields = sQueryString.split("&");
        var aField  = [];
        for (var i=0; i<aFields.length; i++) {
            aField = aFields[i].split('=');
            aParam[aField[0]] = aField[1];
        }
    }

    aParam.page = aParam.page ? aParam.page : 1;
    return sKey ? aParam[sKey] : aParam;
};


//paging HTML strong tag로 변형
function convertPaging(){

    $('.paging ol a').each(function() {
        var sPage = $(this).text() ? $(this).text() : 1;

        if (sPage == '['+getQueryString('page')+']') {
            $(this).parent().html('<strong title="현재페이지">'+sPage+'</strong>');
        } else {
            var sHref = $(this).attr('href');
            $(this).parent().html('<a href="'+sHref+'" title="'+sPage+'페이지로 이동">'+sPage+'</a>');
        }
    });
}

//로딩 스피너
function showLoading(isLoading) {
    return;
    
    if (isLoading) {
      if (!$('#loading').length) {
        $('body').append(`
          <div id="loading" style="
            position:fixed;
            top:0; left:0;
            width:100%; height:100%;
            background:rgba(255,255,255,0.7);
            z-index:9999;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
          ">
            <div class="spinner"></div> <!-- 여기 추가 -->
            <p style="margin-top:10px; font-size:1.2em; color:#333;">Loading...</p>
          </div>
        `);
      }
    } else {
      $('#loading').remove();
    }
  }
  