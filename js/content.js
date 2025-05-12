(function(global){
	var canvas, stage, exportRoot, anim_container, dom_overlay_container, loader;
	function init(compId, symbolPrefix) {
	// 1) DOM 요소 찾기
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");

	// 2) Adobe Animate 컴포지션 가져오기
	var comp=AdobeAn.getComposition(compId); //modify
	if (!comp) {
		console.warn(`composition ${compId} 가 아직 로드되지 않음, 50ms 후 재시도`);
		return setTimeout(() => init(compId, symbolPrefix), 50);
	}

	var lib=comp.getLibrary();

	// 3) 로더 설정 modify-2
	loader = new createjs.LoadQueue(false);
	loader.on("fileload", evt => handleFileLoad(evt, comp));
	loader.on("complete",  evt => handleComplete(evt, comp, symbolPrefix));
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}

function handleComplete(evt,comp, symbolPrefix) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	
	lib.ssMetadata.forEach(meta => {
		ss[meta.name] = new createjs.SpriteSheet({
		  images: [ queue.getResult(meta.name) ],
		  frames: meta.frames
		});
	  });

	// 4) exportRoot, stage 생성
	exportRoot = new lib[symbolPrefix + "_HTML5Canvas"](); //a_01_01_HTML5Canvas modify
	stage = new lib.Stage(canvas);	
	stage.addChild(exportRoot);
	stage.enableMouseOver(20);	


	// 5) Ticker 설정
	//브라우저가 백그라운드 탭일 때 자동으로 애니메이션이 멈춰 CPU 부하를 더 줄일 수 있음
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.framerate  = lib.properties.fps;
    createjs.Ticker.on("tick", stage);
	    
	// 6) 반응형 캔버스
	AdobeAn.makeResponsive(true,'both',true,1,[canvas,anim_container,dom_overlay_container]); //modify-3 true
	AdobeAn.compositionLoaded(lib.properties.id);
}

// 전역에 init 함수 노출
global.loadAdobeAnimation = init;

})(window);