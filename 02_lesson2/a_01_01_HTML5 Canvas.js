//var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"a_01_01_HTML5 Canvas_atlas_1", frames: [[0,0,1962,1590]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.tractor_leftside = function() {
	this.initialize(ss["a_01_01_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TITLE_TEXT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB9DZIAAmxIA6AAIAAGxgAhCDQIAAiIIgWAAIgUAAIhKAAIAAgxIBJAAIA0gBIA5gCIA4gEIA2gGIAAAwIg5AHIg9AEIAACLgAhUgLQgUgIgPgNQgOgNgIgSQgHgRAAgVQAAgUAHgSQAIgSAOgNQAPgNAUgIQAVgHAYAAQAZAAATAHQAVAIAOANQAPANAHASQAIASAAAUQAAAVgIARQgHASgPANQgOANgVAIQgTAIgZAAQgYAAgVgIgAhPiJQgOAOAAAWQAAAXAOANQAOANAbAAQAZAAAOgNQAOgNAAgXQAAgWgOgOQgOgNgZAAQgbAAgOANg");
	this.shape.setTransform(147.125,26.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhrDWIAAifIEUAAIAACfgAgxClICfAAIAAg+IifAAgABuAlIAAhrIhKAAIAABPIjMAAIAAjSIA6AAIAABAIBbAAIAAhAIA3AAIAABSIBKAAIAAheIA7AAIAAD6gAhugkIBbAAIAAg2IhbAAg");
	this.shape_1.setTransform(105.7,26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhuDFQglgXAAglQgBgmAmgXQAngWBHAAQBJAAAmAWQAmAXAAAmQAAAlgmAXQgmAXhJAAQhJAAglgXgAgoBnQgRADgKAFQgLAFgEAHQgFAHABAHQgBAHAFAHQAEAHALAFQAKAFARAEQAQADAYAAQAZAAARgDQAQgEAKgFQALgFAFgHQADgHAAgHQAAgHgDgHQgFgHgLgFQgKgFgQgDQgRgDgZAAQgYAAgQADgAjMAlIAAgvIBjAAIAAg9QgpgXAAgmQAAgSAKgQQAKgQASgMQAUgLAbgHQAbgHAiAAQAkAAAaAHQAbAGATAMQATAMAKAQQAJAQABASQAAAUgLAPQgLAQgUAKIAAA9IBkAAIAAAvgAgwgKIBfAAIAAgrQgLACgMAAIgYABIgYgBQgMAAgMgCgAgnipQgQADgKAGQgKAGgFAIQgEAHAAAIQAAAIAEAHQAFAGAKAFQAKAFAQAEQARACAWAAQAXAAAQgCQAQgEALgFQAKgFAFgGQAEgHABgIQgBgIgEgHQgFgIgKgGQgLgGgQgDQgQgEgXAAQgWAAgRAEg");
	this.shape_2.setTransform(64.7,26.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB7DaIAAhtIjiAAIAAgvIEcAAIAACcgAi0AEQAkgQAcgTQAcgUAUgUQATgVAMgUQALgUADgSIgnABIgnAAIgxAAIAAgxIBFAAIA/AAIA+gBQgEAmgLAeQgLAfgRAbQAUAWAZATQAZASAYAMIgiAoQgxgagpgvQgXAZgcASQgdAUgiARgAB7ArIAAhpIhDAAIAAgwIBDAAIAAhrIA6AAIAAEEg");
	this.shape_3.setTransform(20.875,26.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.4,57.9);


(lib.CAPTION_RECT2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2cGfIAAs9MAs5AAAIAAM9g");
	this.shape.setTransform(147,72.15,1.0228,0.0995,0,0,0,0,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AW+GDMgt7AAAIAAsFMAt7AAAg");
	this.shape_1.setTransform(147,18.8785,1,1.4914);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("A29GDIAAsFMAt7AAAIAAMFg");
	this.shape_2.setTransform(147,18.8785,1,1.4914);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-40.3,297,118.39999999999999);


(lib.CAPTION_RECT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2cGfIAAs9MAs5AAAIAAM9g");
	this.shape.setTransform(147,72.85,1.0228,0.0995,0,0,0,0,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AWdmeIAAM9Mgs5AAAIAAs9g");
	this.shape_1.setTransform(147.0199,38.6945,1.0228,0.9319);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("A2cGfIAAs9MAs5AAAIAAM9g");
	this.shape_2.setTransform(147.0199,38.6945,1.0228,0.9319);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,297,80.4);


(lib.CAPTION_TEXT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheChQgfgUAAggQgBghAhgUQAggTA9gBQA+ABAgATQAhAUAAAhQAAAgghAUQggAVg+AAQg9AAghgVgAgiBOQgOADgKAFQgIAEgEAGQgEAHAAAGQAAAGAEAHQAEAFAIAFQAKAFAOADQAOACAUAAQAWAAAOgCQAOgDAIgFQAJgFAFgFQADgHAAgGQAAgGgDgHQgFgGgJgEQgIgFgOgDQgOgDgWABQgUgBgOADgAiuAOIAAgoIFcAAIAAAogAh3g0IAAiBIDtAAIAAAqIi8AAIAAAuIC9AAIAAApg");
	this.shape.setTransform(214.05,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABuC4IAAlwIAxAAIAAFwgAieBOQAZgSAUgWQAVgYAOgcQAOgcAGglQAHgkgDguIAzAAQABAagDAYQgCAYgEAVQAOArAZAgQAaAgAlAZIghAiQg6gogfg+QgQAhgXAbQgWAbgeAXg");
	this.shape_1.setTransform(176.225,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiqCSIAAgpIBeAAIAAhHIg4AAIAAgnIAwAAIgDhXIAxAAIACBXIBLAAIABhXIAxAAIgDBXIAwAAIAAAnIg1AAIAABHIBaAAIAAApgAgcBpIA9AAIAAhHIg9AAgAh+hoIAAgpID+AAIAAApg");
	this.shape_2.setTransform(142.975,22.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6C0QgWgFgQgJQgQgKgHgNQgIgNAAgPQAAgPAIgNQAHgMAQgKQAQgKAWgFQAXgGAfAAQAdAAAXAGQAXAFAQAKQAPAKAIAMQAIANAAAPQAAAPgIANQgIANgPAKQgQAJgXAFQgXAGgdAAQgfAAgXgGgAgmBWQgOADgJAEQgJAEgEAHQgDAFAAAGQAAAGADAGQAEAGAJAFQAJAEAOADQAOADAUAAQASAAAOgDQAOgDAJgEQAJgFAEgGQAEgGAAgGQAAgGgEgFQgEgHgJgEQgJgEgOgDQgOgDgSAAQgUAAgOADgAA+AqIAAjjIAxAAIAAArIA2AAIAAApIg2AAIAAAnIA2AAIAAAqIg2AAIAAA+gAijAVIAAh0IB0AAIAAgmIh1AAIAAgnIClAAIAABzIhzAAIAAAnIAcAAQApAAAggEQAggFAhgHIAAAnQhAAQhWAAg");
	this.shape_3.setTransform(99.425,23.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABHC4IAAlwIAyAAIAACKIA5AAIAAAqIg5AAIAAC8gAixBVQAbgPAYgRQAXgSATgUQASgTAMgUQAMgUAEgUIglACIgkAAIgtAAIAAgqIBOAAIAxAAIAvAAQgDAcgJAaQgIAagNAXQAPAXATARQASARAYARIgiAjQgVgRgRgRQgRgRgQgUQgWAZgaAVQgaATgcAQgAh+iBIAAgqIB5AAIAAAqg");
	this.shape_4.setTransform(62.975,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABHC5IAAhRIjFAAIAAgqID3AAIAAB7gAiuAiIAAgpICXAAIAAgsIAwAAIAAAsICWAAIAAApgAiag/QAfgHAYgLQAZgLARgQQASgQAKgUQAJgSAAgWIAyAAQABAYgKAYQAKANAOALQAPAMAQAIQASAJATAGQASAGAUADIgbAnQgogIgggSQghgRgWgZQgMAOgPALQgOALgQAKQgRAJgRAGQgRAHgRADg");
	this.shape_5.setTransform(27.45,23.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABqC4IAAjEIg/AAIAAgpIA/AAIAAiDIAyAAIAAFwgAibBPQAfgSAYgYQAZgYASgZQARgaAKgaQALgZABgXIgmACIgjAAIgoAAIAAgqIA+AAIAzAAIA2gBQAAAjgJAhQgJAhgRAfQASAZAUAWQAUAWAbASIgkAiQgXgTgSgUQgQgSgQgXQgUAagXAXQgZAWgcAUg");
	this.shape_6.setTransform(-10,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AheCiQgfgUAAghQgBghAhgUQAggUA9AAQA+AAAgAUQAhAUAAAhQAAAhghAUQggATg+AAQg9AAghgTgAgiBOQgOADgKAFQgIAEgEAHQgEAFAAAHQAAAGAEAHQAEAGAIAEQAKAFAOADQAOADAUAAQAWAAAOgDQAOgDAIgFQAJgEAFgGQADgHAAgGQAAgHgDgFQgFgHgJgEQgIgFgOgDQgOgDgWAAQgUAAgOADgAiuAPIAAgpIFcAAIAAApgAh3g0IAAiAIDtAAIAAApIi8AAIAAAvIC9AAIAAAog");
	this.shape_7.setTransform(174,72.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiqCNIAAgpIDZAAIAIguQAEgXADgXQgWADgXABIgvABIhgAAIAAgoIBnAAIAugBIAsgDIADgiIABghIjAAAIAAgqIDxAAQAAAegDAfQgCAfgDAfIgHA8IgJA5IBLAAIAAApg");
	this.shape_8.setTransform(138.425,70.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABiC5IAAlwIAxAAIAAFwgAhZBfQgSgIgNgSQgMgRgHgZQgIgYAAggQAAggAIgZQAHgZAMgRQANgSASgIQARgJAXAAQAWAAARAJQARAIANASQAMARAIAZQAHAZAAAgQAAAggHAYQgIAZgMARQgNASgRAIQgRAJgWAAQgXAAgRgJgAhUhhQgMAZAAArQAAAqAMAYQAMAYAXAAQAWAAAMgYQAMgYAAgqQAAgrgMgZQgMgXgWAAQgXAAgMAXg");
	this.shape_9.setTransform(101.8,71.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABmC5IAAlwIAuAAIAAFwgAAfCwIAAjDIgmAAIAAgqIAmAAIAAh3IAtAAIAAFkgAiSBjIAAiWIBMAAIAAg+IhNAAIAAgpIB7AAIAACQIhJAAIAABFIAIAAIAbgBIAZgDIAYgEQANgCANgEIAAApQgaAHgdADQgcADgjAAg");
	this.shape_10.setTransform(67.35,71.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiqCTIAAgpIFVAAIAAApgAh1AxIAAjDIAxAAIAAA9ICJAAIAAg9IAxAAIAADDgAhEAIICJAAIAAg1IiJAAg");
	this.shape_11.setTransform(31.825,70.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghAlQANgEAHgHQAHgHADgIQABgIgGgBQgIgBgHgFQgHgHgBgOQAAgFACgFQACgFAFgEQAEgEAGgDQAFgCAIAAQAOAAAJAKQAKAKAAAQQAAAXgOASQgOATgdALg");
	this.shape_12.setTransform(195.75,37.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AheChQgfgUAAggQgBghAhgUQAhgTA8gBQA+ABAgATQAhAUAAAhQAAAgghAUQggAVg+AAQg9AAghgVgAgiBOQgOADgKAFQgIAEgEAGQgEAHAAAGQAAAGAEAHQAEAFAIAFQAKAFAOADQAOACAUAAQAWAAAOgCQAOgDAIgFQAJgFAFgFQADgHAAgGQAAgGgDgHQgFgGgJgEQgIgFgOgDQgOgDgWABQgUgBgOADgAiuAOIAAgoIFcAAIAAAogAh3g0IAAiBIDtAAIAAAqIi7AAIAAAuIC8AAIAAApg");
	this.shape_13.setTransform(172.55,24.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABpC4IAAlwIAxAAIAAFwgAiZBRQAjgVAagYQAagaASgYQASgaAKgaQAJgZACgUIgmABIgnAAIgqAAIAAgqIA/AAIA0AAIA7gBQgBAigJAhQgKAigSAeQATAaAWAVQAWAXAbASIgiAkQgZgSgTgVQgUgVgRgYQgVAdgaAXQgaAZgeARg");
	this.shape_14.setTransform(99.725,23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxC1QgYgFgPgJQgQgJgHgNQgJgMABgPQgBgOAJgNQAHgMAQgJQAPgKAYgFQAWgFAeAAQAdAAAYAFQAWAFAQAKQAQAJAIAMQAIANAAAOQAAAPgIAMQgIANgQAJQgQAJgWAFQgYAGgdAAQgeAAgWgGgAgeBaQgOADgJAEQgJAFgEAFQgDAGAAAFQAAAGADAFQAEAGAJAEQAJAFAOADQANACAUAAQATAAAOgCQAOgDAJgFQAJgEADgGQAEgFABgGQgBgFgEgGQgDgFgJgFQgJgEgOgDQgOgCgTAAQgUAAgNACgABFAuIAAjmIAyAAIAABBIA2AAIAAAoIg2AAIAAAiIA2AAIAAAoIg2AAIAAAzgAhgAgQgRgFgLgJQgLgIgGgKQgFgLgBgMQABgMAFgLQAGgLALgIQALgJARgFQAQgFAWAAQAVAAARAFQAQAFAKAJQAMAIAGALQAFALABAMQgBAMgFALQgGAKgMAIQgKAJgQAFQgRAFgVAAQgWAAgQgFgAhagqQgKAHAAAMQAAALAKAIQAJAGAXAAQAWAAAJgHQAKgIAAgKQAAgMgJgHQgKgIgWAAQgXAAgJAIgAishgIAAgjIDfAAIAAAjgAh8iVIAAglICCAAIAAAlg");
	this.shape_15.setTransform(66.05,23.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag7C0QgWgGgPgKQgRgKgHgNQgIgOAAgPQAAgOAIgNQAHgNARgLQAPgKAWgFQAXgGAfABQAdgBAXAGQAXAFAQAKQAPALAIANQAJANAAAOQAAAPgJAOQgIANgPAKQgQAKgXAGQgXAGgdAAQgfAAgXgGgAgnBRQgNAEgJAEQgIAFgEAGQgFAGAAAGQAAAGAFAGQAEAHAIAEQAJAGANACQAOAEAUAAQASAAAPgEQANgCAJgGQAJgEAEgHQADgGAAgGQAAgGgDgGQgEgGgJgFQgJgEgNgEQgPgDgSABQgUgBgOADgAA9AnIAAjgIAxAAIAABRIA3AAIAAApIg3AAIAABmgAilAKIAAi4IAxAAIAAA8IBMAAIAAg8IAvAAIAAC4gAh0gbIBMAAIAAgvIhMAAg");
	this.shape_16.setTransform(31.35,23.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbC0QgXgGgPgKQgQgKgIgNQgIgOAAgQQAAgRAIgNQAIgOAQgKQAPgLAXgFQAYgHAeAAQAfAAAXAHQAYAFAPALQAQAKAIAOQAIANAAARQAAAQgIAOQgIANgQAKQgPAKgYAGQgXAGgfAAQgeAAgYgGgAgHBOQgOACgJAGQgJAFgEAGQgEAGAAAIQAAAGAEAHQAEAGAJAGQAJAFAOADQANADAVAAQAUAAAOgDQAPgDAJgFQAJgGAEgGQAEgHAAgGQAAgIgEgGQgEgGgJgFQgJgGgPgCQgOgDgUAAQgVAAgNADgABjAkIAAgvIg9AAIAAgpIA+AAIAAgoIg0AAIAAgnIAzAAIAAg2IAyAAIAADdgAiXgHQBAgUAigfQAiggAHgoIgjABIguAAIgjAAIAAgpIA5AAIA2AAIA8gBQgCAjgMAfQgMAfgUAaQgWAageATQgeATgnAMg");
	this.shape_17.setTransform(137.275,23.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABKC4IAAlwIAxAAIAACEIA6AAIAAAqIg6AAIAADCgAi0BOQAZgSAUgWQAVgYAOgcQAOgcAGglQAGgkgCguIAzAAQAAAagCAYQgCAYgEAVQAPArAYAgQAZAgAmAZIghAiQg5goghg+QgPAhgXAbQgXAbgdAXg");
	this.shape_18.setTransform(102.625,23.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUC3IAAhVIiWAAIAAgoIFVAAIAAAoIiPAAIAABVgAgvAjQgUgEgOgIQgOgIgGgKQgHgKAAgMQAAgMAHgLQAGgKAOgIQANgIAVgFQAVgEAaAAQAbAAAVAEQAUAFAOAIQAOAIAHAKQAHALAAAMQAAAMgHAKQgHAKgOAIQgOAIgUAEQgVAFgbAAQgaAAgVgFgAgbgkQgMACgGADQgHADgDAEQgDAEAAAEQAAADADAEQADADAHADQAGADAMABQALADAQAAQARAAAMgDQALgBAHgDQAGgDADgDQADgEAAgDQAAgEgDgEQgDgEgGgDQgHgDgLgCQgMgDgRAAQgQAAgLADgAiJhXIAAgnIETAAIAAAngAhLiNIAAgpICXAAIAAApg");
	this.shape_19.setTransform(67.375,23.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhdChQgggUgBggQAAghAhgUQAggTA9gBQA+ABAhATQAgAUAAAhQAAAgggAUQghAVg+AAQg+AAgfgVgAgjBOQgNADgJAFQgJAEgEAGQgEAHAAAGQAAAGAEAHQAEAFAJAFQAJAFANADQAPACAUAAQAVAAAOgCQAPgDAJgFQAJgFADgFQAEgHAAgGQAAgGgEgHQgDgGgJgEQgJgFgPgDQgOgDgVABQgUgBgPADgAiuAOIAAgoIFdAAIAAAogAh3g0IAAiBIDtAAIAAAqIi7AAIAAAuIC9AAIAAApg");
	this.shape_20.setTransform(174.05,24.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgxC1QgYgFgPgJQgPgJgJgNQgIgMAAgPQAAgOAIgNQAJgMAPgJQAPgKAYgFQAXgFAdAAQAdAAAYAFQAWAFAQAKQAQAJAIAMQAIANAAAOQAAAPgIAMQgIANgQAJQgQAJgWAFQgYAGgdAAQgdAAgXgGgAgfBaQgNADgJAEQgJAFgEAFQgDAGAAAFQAAAGADAFQAEAGAJAEQAJAFANADQAOACAUAAQATAAAOgCQAOgDAJgFQAIgEAEgGQAEgFABgGQgBgFgEgGQgEgFgIgFQgJgEgOgDQgOgCgTAAQgUAAgOACgABFAuIAAjmIAyAAIAABBIA2AAIAAAoIg2AAIAAAiIA2AAIAAAoIg2AAIAAAzgAhgAgQgRgFgLgJQgLgIgGgKQgFgLgBgMQABgMAFgLQAGgLALgIQALgJARgFQAQgFAWAAQAVAAARAFQAQAFAKAJQAMAIAFALQAHALAAAMQAAAMgHALQgFAKgMAIQgKAJgQAFQgRAFgVAAQgWAAgQgFgAhagqQgKAHAAAMQAAALAKAIQAKAGAWAAQAWAAAJgHQAKgIAAgKQAAgMgJgHQgKgIgWAAQgXAAgJAIgAishgIAAgjIDfAAIAAAjgAh8iVIAAglICCAAIAAAlg");
	this.shape_21.setTransform(67.5,23.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag6C0QgXgGgPgKQgRgKgHgNQgIgOAAgPQAAgOAIgNQAHgNARgLQAPgKAXgFQAXgGAeABQAdgBAXAGQAXAFAQAKQAPALAJANQAHANABAOQgBAPgHAOQgJANgPAKQgQAKgXAGQgXAGgdAAQgeAAgXgGgAgnBRQgNAEgJAEQgIAFgFAGQgDAGAAAGQAAAGADAGQAFAHAIAEQAJAGANACQAOAEAUAAQATAAAOgEQAOgCAIgGQAJgEADgHQAFgGAAgGQAAgGgFgGQgDgGgJgFQgIgEgOgEQgOgDgTABQgUgBgOADgAA9AnIAAjgIAxAAIAABRIA4AAIAAApIg4AAIAABmgAilAKIAAi4IAxAAIAAA8IBMAAIAAg8IAvAAIAAC4gAh0gbIBMAAIAAgvIhMAAg");
	this.shape_22.setTransform(32.85,23.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiqCPIAAgpICTAAIAAhKIAxAAIAABKICRAAIAAApgAiXALQAkgLAfgOQAfgPAagPQAZgPAPgPQARgPAGgLIggABIgqAAIhNAAIAAgqIBtAAIA1AAIA+gBQgIAdgRAYQgRAZgYAVQAZAOAaAMQAbAMAiALIgfAlQgggLgdgPQgdgPgagSQgcATghAQQghAQgjAMg");
	this.shape_23.setTransform(102.9,22.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhQC1IAAhtIAyAAIAABDIC7AAIAAAqgABlBZIAAiDIg7AAIAAgqIA7AAIAAhgIAxAAIAAENgAicARQAfgOAXgQQAYgRAQgRQASgRAJgTQAKgSACgQIghABIghAAIgqAAIAAgqIA7AAIA1AAIA1gBQgEAggIAbQgKAagOAXQARAUAVAQQAWAPAUAKIgdAjQgrgXghgnQgUAUgZARQgXASgeANg");
	this.shape_24.setTransform(66.05,23.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVCwIAAiYIiVAAIAAgpIDnAAQAFggADgfQADgfAAgVIjAAAIAAgqIDzAAQAAAogEAqQgEApgFAiIA9AAIAAApIiPAAIAACYg");
	this.shape_25.setTransform(174.025,24.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhZC2IAAiXIAxAAIAAAiICIAAIAAgpIAyAAIAACegAgoCNICIAAIAAgkIiIAAgABgAJIAAi+IAyAAIAAC+gAhXAAQgRgGgOgMQgMgMgHgQQgIgRAAgUQAAgUAIgQQAHgRAMgMQAOgMARgGQASgHAVAAQAVAAARAHQARAGANAMQANAMAIARQAHAQAAAUQAAAUgHARQgIAQgNAMQgNAMgRAGQgRAGgVAAQgVAAgSgGgAhTh3QgMANAAAYQAAAXAMANQANANAWAAQAWAAANgNQANgNgBgXQABgYgNgNQgNgOgWAAQgWAAgNAOg");
	this.shape_26.setTransform(137.6,23.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWCxIAAh+IiUAAIAAgqIFVAAIAAAqIiPAAIAAB+gAiZgvQAngJAggLQAhgMAYgMQAYgMAPgLQAQgMAHgKIgqACIgqAAIhEAAIAAgpIB0AAIAvAAIAygBQANAAgFAOQgSAsgpAgQAYAKAaAKQAbAIAgAHIgYAoQgkgJgfgLQgfgMgdgQQgbAPghAMQgiAMgoALg");
	this.shape_27.setTransform(102.925,24.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiqCTIAAgqIBmAAIAAg0IgwAAIAAh2IC5AAIAAgnIi5AAIAAgqIDqAAIAAB5Ii5AAIAAAmIDEAAIAAAoIgxAAIAAA0IBbAAIAAAqgAgUBpIAzAAIAAg0IgzAAg");
	this.shape_28.setTransform(67.375,22.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhZC1IAAhyIAxAAIAABIIC/AAIAAAqgABeBSIAAhPIhUAAQgLAKgQAGQgRAFgSAAQgWAAgSgHQgSgIgMgMQgOgMgGgSQgIgRAAgTQAAgWAIgRQAGgRAOgOQAMgNASgHQASgHAWAAQAVAAASAHQARAHAMAMIBOAAIAAgoIAyAAIAAEGgAhWhuQgNAPAAAaQAAAYANANQAMAPAXAAQAVAAANgPQANgNAAgYQAAgagNgPQgNgOgVAAQgXAAgMAOgAAthGQAAATgHARIA5AAIAAhEIg4AAQAFAPABARg");
	this.shape_29.setTransform(31.15,23.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABHC0IAAhPIjFAAIAAgpID3AAIAAB4gAiuAlIAAgoICVAAIAAghIhrAAIAAgoIAyAAIgCgyIAxAAIACAyIBEAAIABgxIAxAAIgBAxIAyAAIAAAoIhuAAIAAAhICXAAIAAAogAh/iKIAAgpID/AAIAAApg");
	this.shape_30.setTransform(102.95,24.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:62.975}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:176.225}},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:99.725}},{t:this.shape_1,p:{x:134.725}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_14,p:{x:101.175}},{t:this.shape_1,p:{x:136.225}},{t:this.shape_20,p:{x:174.05}}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_20,p:{x:138.5}}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_4,p:{x:67.375}},{t:this.shape_30},{t:this.shape_20,p:{x:138.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,0,262.9,99.1);


(lib.CAPTION_LINE12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjlIVID6lMIDRCeIj6FMg");
	var mask_graphics_1 = new cjs.Graphics().p("AkUCVIFYnHIDRCeIlYHHg");
	var mask_graphics_2 = new cjs.Graphics().p("AlCDSIG0pBIDRCeIm0JBg");
	var mask_graphics_3 = new cjs.Graphics().p("AlxEQIISq9IDRCeIoSK9g");
	var mask_graphics_4 = new cjs.Graphics().p("AmgFNIJvs3IDSCeIpwM3g");
	var mask_graphics_5 = new cjs.Graphics().p("AnOGLILMuzIDRCeIrMOzg");
	var mask_graphics_6 = new cjs.Graphics().p("An9HJIMpwvIDRCeIspQvg");
	var mask_graphics_7 = new cjs.Graphics().p("AorIGIOGypIDRCeIuGSpg");
	var mask_graphics_8 = new cjs.Graphics().p("ApaJEIPk0lIDRCeIvkUlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-5.7293,y:69.0833}).wait(1).to({graphics:mask_graphics_1,x:-1.075,y:107.475}).wait(1).to({graphics:mask_graphics_2,x:3.6,y:101.325}).wait(1).to({graphics:mask_graphics_3,x:8.25,y:95.125}).wait(1).to({graphics:mask_graphics_4,x:12.95,y:88.975}).wait(1).to({graphics:mask_graphics_5,x:17.6,y:82.8}).wait(1).to({graphics:mask_graphics_6,x:22.25,y:76.625}).wait(1).to({graphics:mask_graphics_7,x:26.925,y:70.45}).wait(1).to({graphics:mask_graphics_8,x:31.579,y:64.2885}).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmOIHIMdwN");
	this.shape.setTransform(39.925,51.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(18));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ar+AAIX9AA");
	this.shape_1.setTransform(80.95,0,0.0122,1,0,0,0,-0.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhDAAICHAA");
	this.shape_2.setTransform(86.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ah9AAID6AA");
	this.shape_3.setTransform(92.65,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ai3AAIFvAA");
	this.shape_4.setTransform(98.475,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1,1).p("AjxAAIHjAA");
	this.shape_5.setTransform(104.325,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1,1).p("AkrAAIJXAA");
	this.shape_6.setTransform(110.175,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1,1).p("AllAAILLAA");
	this.shape_7.setTransform(116.025,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmfAAIM/AA");
	this.shape_8.setTransform(121.85,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(3,1,1).p("AnZAAIOzAA");
	this.shape_9.setTransform(127.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{regX:-0.2,scaleX:0.0122,x:80.95}}]},8).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_1,p:{regX:0,scaleX:0.6942,x:133.5397}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,189.8,106.8);


(lib.CAPTION_LINE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjlIVID6lMIDRCeIj6FMg");
	var mask_graphics_1 = new cjs.Graphics().p("AkUCVIFYnHIDRCeIlYHHg");
	var mask_graphics_2 = new cjs.Graphics().p("AlCDSIG0pBIDRCeIm0JBg");
	var mask_graphics_3 = new cjs.Graphics().p("AlxEQIISq9IDRCeIoSK9g");
	var mask_graphics_4 = new cjs.Graphics().p("AmgFNIJvs3IDSCeIpwM3g");
	var mask_graphics_5 = new cjs.Graphics().p("AnOGLILMuzIDRCeIrMOzg");
	var mask_graphics_6 = new cjs.Graphics().p("An9HJIMpwvIDRCeIspQvg");
	var mask_graphics_7 = new cjs.Graphics().p("AorIGIOGypIDRCeIuGSpg");
	var mask_graphics_8 = new cjs.Graphics().p("ApaJEIPk0lIDRCeIvkUlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-5.7293,y:69.0833}).wait(1).to({graphics:mask_graphics_1,x:-1.075,y:107.475}).wait(1).to({graphics:mask_graphics_2,x:3.6,y:101.325}).wait(1).to({graphics:mask_graphics_3,x:8.25,y:95.125}).wait(1).to({graphics:mask_graphics_4,x:12.95,y:88.975}).wait(1).to({graphics:mask_graphics_5,x:17.6,y:82.8}).wait(1).to({graphics:mask_graphics_6,x:22.25,y:76.625}).wait(1).to({graphics:mask_graphics_7,x:26.925,y:70.45}).wait(1).to({graphics:mask_graphics_8,x:31.579,y:64.2885}).wait(10));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmOIHIMdwN");
	this.shape.setTransform(39.925,51.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(18));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ar+AAIX9AA");
	this.shape_1.setTransform(80.95,0,0.0122,1,0,0,0,-0.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhcAAIC6AA");
	this.shape_2.setTransform(89.35,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("AixAAIFjAA");
	this.shape_3.setTransform(97.725,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("AkFAAIILAA");
	this.shape_4.setTransform(106.125,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(3,1,1).p("AlZAAIKzAA");
	this.shape_5.setTransform(114.525,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3,1,1).p("AmtAAINbAA");
	this.shape_6.setTransform(122.925,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1,1).p("AoBAAIQDAA");
	this.shape_7.setTransform(131.325,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3,1,1).p("ApVAAISrAA");
	this.shape_8.setTransform(139.725,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(3,1,1).p("AqqAAIVVAA");
	this.shape_9.setTransform(148.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{regX:-0.2,scaleX:0.0122,x:80.95}}]},8).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_1,p:{regX:0,scaleX:1,x:156.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,236.2,106.8);


(lib.CONT_TEXT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1CxQgYgGgQgKQgQgJgIgNQgIgNAAgQQAAgfAhgTQAggTA9AAQA9AAAhATQAhATgBAfQAAAQgHANQgIANgRAJQgQAKgYAGQgXAEgfAAQgeAAgYgEgAgiBSQgOACgJAFQgIAEgFAGQgEAFAAAGQAAAGAEAHQAFAFAIAFQAJAEAOADQAOACAVAAQAVAAAOgCQAPgDAJgEQAJgFADgFQAEgHAAgGQAAgGgEgFQgDgGgJgEQgJgFgPgCQgOgCgVAAQgVAAgOACgAiuAYIAAgoICbAAIAAgnIAvAAIAAAnICTAAIAAAogAiThLQAmgGAegJQAfgHAXgKQAXgIAPgKQAQgJAHgJIAAAAIgpABIgqABIhHAAIAAgnIB5AAIAvAAIAwgBQAOAAgGAPQgFARgPAPQgOAQgVAOQAXAKAaAGQAaAHAcAHIgSAiQghgIgggKQgfgLgcgNQgdAOgkALQgjAKgoAIg");
	this.shape.setTransform(295.9,77.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABoC5IAAlxIAyAAIAAFxgAiYBLQAlgSAbgWQAbgWASgXQASgYAJgaQALgaACgaIhYABIgqAAIAAgqIA/AAIA6AAIA+gBQgCArgLAmQgKAmgVAhQgTAggfAcQggAcgsAYg");
	this.shape_1.setTransform(258.6,76.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah3C2IAAhyIAwAAIAABHIDHAAIAAArgAiuAnIAAgpIFdAAIAAApgAh2gpIAAiLIAxAAIAABhIDCAAIAAAqg");
	this.shape_2.setTransform(215.725,76.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABhCeQgRgQgNgSQgLASgPAPQgPAPgSAMQgigbgVgkQgNAUgSAQQgSAQgXALIgeghQATgKAQgLQAOgLAKgOQAJgOAFgRQAFgRgBgVIAxAAIgBARIgCASQAJAYAKANQAHANAKAJIANgQQAHgIAFgMQAEgLADgPQACgPgBgTIAxAAQAAAVgEATQAJAZATARQASARAfAPIgcAkQgWgLgSgPgABNAWIAAjNIAyAAIAADNgAhqACQgSgGgNgMQgNgMgHgSQgGgRgBgUQABgUAGgRQAHgRANgNQANgMASgHQASgHAUAAQAVAAASAHQARAHANAMQANANAHARQAHARABAUQgBAUgHARQgHASgNAMQgNAMgRAGQgSAHgVAAQgUAAgSgHgAhmh6QgMAOAAAZQAAAZAMAOQANAOAVAAQAVAAAOgOQAMgOAAgZQAAgZgMgOQgOgOgVAAQgVAAgNAOg");
	this.shape_3.setTransform(181.1,76.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVC1IAAiCIiVAAIAAgpIFVAAIAAApIiOAAIAACCgAiZg0QAggIAagOQAZgMARgQQASgQAJgUQAJgUgBgWIAzAAQABAOgDAOQgCANgGAMQAKAOAPALQAPALARAKQARAIATAHQATAGAVAEIgZAoQgpgJgigTQghgSgZgZQgWAZghATQghATglAKg");
	this.shape_4.setTransform(135.575,77.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhzC4IAAhfIC4AAIAAgSIi4AAIAAgmIDpAAIAABcIi4AAIAAAUIDAAAIAAAngAhhAPQgRgFgLgIQgLgHgGgKQgGgKAAgLQAAgKAGgKQAGgKALgIQALgIARgFQAQgEAWAAQAWAAAQAEQARAFAKAIQALAIAGAKQAGAKAAAKQAAALgGAKQgGAKgLAHQgKAIgRAFQgQAEgWAAQgWAAgQgEgAhbg0QgKAIAAAJQAAAIAKAIQAJAGAXABQAWgBAJgGQAKgIAAgIQAAgJgJgIQgJgGgXAAQgXAAgJAGgABFARIAAjGIAxAAIAABaIA4AAIAAAqIg4AAIAABCgAithjIAAgiIDgAAIAAAigAh9iUIAAgjICDAAIAAAjg");
	this.shape_5.setTransform(91.225,76.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhZC2IAAicIAwAAIAAAnICKAAIAAgoIAwAAIAACdgAgpCNICKAAIAAgkIiKAAgABgAJIAAhKIgzAAQgDAQgHANQgJANgMALQgMAJgPAEQgQAFgTAAQgWAAgSgGQgRgGgNgMQgNgMgGgQQgIgRABgUQgBgUAIgQQAGgRANgMQANgMARgGQASgHAWAAQAkAAAYASQAZASAHAeIA0AAIAAhKIAxAAIAAC+gAhTh3QgNANAAAYQAAAYANAMQAMANAXAAQAVAAANgNQANgMAAgYQAAgYgNgNQgNgOgVAAQgXAAgMAOg");
	this.shape_6.setTransform(54.5,76.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABHC6IAAhhIi8AAIAAgpIDtAAIAACKgABHAhIAAjaIAxAAIAABWIA4AAIAAAqIg4AAIAABagAivgCQAegNAYgQQAZgQARgQQARgRAJgRQAKgQADgOIghAAIghAAIgsAAIAAgqIA8AAIA2AAIA1AAQgDAegJAYQgIAZgOAVQARATAVAPQAWARAWAJIgdAiQgWgLgTgPQgUgQgSgUQgUAWgaAPQgaARgeAPg");
	this.shape_7.setTransform(19.725,77);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABjC5IAAiMIhDAAQgMAcgUAPQgWAQgcAAQgWAAgSgJQgSgJgNgRQgMgRgHgZQgHgZAAggQAAgfAHgZQAHgaAMgRQANgRASgJQASgIAWgBQAaAAAVAOQATANAMAYIBHAAIAAhHIAxAAIAAFxgAhVhgQgMAYAAAqQAAArAMAYQAMAYAXAAQAWAAAMgYQAMgYAAgrQAAgqgMgYQgMgZgWAAQgXAAgMAZgAAtgeQAAAUgDAOIA5AAIAAhMIg6AAQAEATAAAXg");
	this.shape_8.setTransform(1250.675,23.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABEC4IAAlvIAxAAIAACVIA5AAIAAAoIg5AAIAACygAhiBpQgRgHgLgLQgMgMgGgOQgGgPAAgQQAAgQAGgOQAGgPAMgLQALgLARgHQASgHAWAAQAVAAASAHQARAHAKAMQAMALAGAOQAGAPAAAPQAAAQgGAPQgGAPgMALQgLALgRAHQgRAHgVAAQgWAAgSgHgAhNgIQgIAEgGAFQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAGAFAIAEQAIADALAAQAKAAAIgDQAIgEAGgFQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgGgFgIgEQgIgDgKAAQgLAAgIADgAithBIAAgqIDkAAIAAAqgAh9iBIAAgqICDAAIAAAqg");
	this.shape_9.setTransform(1216.525,22.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1C1QgYgFgQgLQgQgJgJgOQgIgOAAgQQAAghAhgVQAhgUA8AAQA+AAAgAUQAhAVAAAhQAAAQgIAOQgJAOgQAJQgQALgXAFQgYAFgfAAQgeAAgXgFgAgiBQQgPADgIAFQgJAFgEAGQgEAGAAAHQAAAGAEAHQAEAGAJAFQAIAEAPADQAOADAUAAQAVAAAPgDQAOgDAJgEQAJgFADgGQAEgHAAgGQAAgHgEgGQgDgGgJgFQgJgFgOgDQgPgDgVAAQgUAAgOADgAiuARIAAgoIFdAAIAAAogAiZhNQAfgFAYgLQAZgKASgOQASgOAJgRQAJgRAAgUIAyAAQABAWgKAWQAKALAOAKQAPAKARAIQAQAHATAFQATAGAUACIgaAnQgngHghgQQghgQgXgXQgMAMgPALQgOAKgRAJQgQAIgSAGQgRAGgRADg");
	this.shape_10.setTransform(1180.575,23.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah5C2IAAiUIAyAAIAAAeICEAAIAAgfIAxAAIAACVgAhICNICFAAIAAgmIiFAAgAA9ARIAAjGIAxAAIAABOIA4AAIAAAoIg4AAIAABQgAilAJIAAiwICrAAIAAAnIh5AAIAAAeIBzAAIAAAkIhzAAIAAAhIAoAAQAdAAAfgCQAdgDAlgIIAAAnQghAGgiADQgjADgkAAg");
	this.shape_11.setTransform(1145.975,22.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABEC5IAAlxIAxAAIAACKIA7AAIAAAqIg7AAIAAC9gAivBLQAlgSAcgWQAagWATgXQARgYAKgaQAKgaADgaIhZABIgpAAIAAgqIA/AAIA5AAIA+gBQgCArgKAmQgLAmgTAhQgVAggeAcQggAcgsAYg");
	this.shape_12.setTransform(1100.75,23.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABHC5IAAlxIAyAAIAACJIA6AAIAAArIg6AAIAAC9gAiyBPQAfgSAYgYQAYgYASgZQASgaAKgZQAKgaACgWIgmABIgjABIgoAAIAAgrIA+AAIA0AAIA1gCQAAAjgJAhQgIAhgRAfQARAaAUAVQAVAWAaATIgjAiQgYgUgRgTQgSgTgQgWQgTAagYAWQgYAYgcATg");
	this.shape_13.setTransform(1064.775,23.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhQC1IAAhtIAyAAIAABDIC7AAIAAAqgABlBZIAAiDIg7AAIAAgqIA7AAIAAhgIAxAAIAAENgAicARQAegOAYgQQAYgQAQgSQARgSAKgSQAKgSACgQIghAAIghAAIgqAAIAAgpIA7AAIA1AAIA1gBQgDAggKAbQgJAagNAXQAQAUAVAQQAWAPAUAKIgdAjQgqgXgignQgUAUgYARQgZARgcAPg");
	this.shape_14.setTransform(1027.825,22.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah3C3IAAhxIAwAAIAABHIDKAAIAAAqgAgRBsIAAhJIidAAIAAgoIFdAAIAAAoIiOAAIAABJgAg0gdQgXgGgPgKQgQgLgIgOQgIgPAAgRQAAgRAIgPQAIgPAQgKQAPgLAXgGQAXgGAdAAQAeAAAXAGQAXAGAPALQAQAKAIAPQAIAPAAARQAAARgIAPQgIAOgQALQgPAKgXAGQgXAGgeAAQgdAAgXgGgAggiLQgNAEgJAFQgJAGgDAHQgEAHAAAJQAAAIAEAHQADAGAJAGQAIAFAOADQANACATAAQAnAAAQgKQAQgLAAgQQAAgJgEgHQgEgHgIgGQgJgFgNgEQgOgDgTAAQgSAAgOADg");
	this.shape_15.setTransform(993.575,22.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiqCUIAAgpICSAAIAAgyIhcAAIAAh4IC5AAIAAgqIi5AAIAAgqIDqAAIAAB8Ii5AAIAAAmIDEAAIAAAqIhoAAIAAAyICSAAIAAApg");
	this.shape_16.setTransform(949,21.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABfC5IAAjLIg7AAIAAgqIA7AAIAAh8IAxAAIAAFxgAiPBfIAAj6ICfAAIAAApIhuAAIAAA/IBmAAIAAApIhmAAIAABAIAnAAQAdAAAegEQAegEAkgHIAAAnQggAJgjAEQghAEglAAg");
	this.shape_17.setTransform(912.625,23.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABjC5IAAhWIjIAAIAAgpID5AAIAAB/gABmArIAAhkIgfAAIAABkIguAAIAAjfIAuAAIAABUIAfAAIAAhYIAuAAIAADjgAiSAbIAAhzIBYAAIAAgoIhZAAIAAgnICHAAIAAB0IhUAAIAAAnIAMAAQAaAAAZgDQAYgCAagHIAAAmQgaAIggADQggACglAAg");
	this.shape_18.setTransform(877.5,23.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiqCRIAAgoIFVAAIAAAogAh0A3IAAjIIDqAAIAAAqIi5AAIAAAlICzAAIAAAnIizAAIAAAqIC+AAIAAAog");
	this.shape_19.setTransform(842.125,21.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhdCoQgggUAAggQAAggAggTQAggTA9AAQA+AAAgATQAhATAAAgQAAAgghAUQggATg+AAQg9AAgggTgAgiBYQgPACgIAFQgJAEgEAGQgDAGAAAFQAAAHADAFQAEAHAJAEQAIAEAPADQAOADAUAAQAVAAAPgDQAOgDAJgEQAIgEAEgHQAEgFAAgHQAAgFgEgGQgEgGgIgEQgJgFgOgCQgPgDgVAAQgUAAgOADgAiuAgIAAgpIBVAAIAAgzQgigTAAghQAAgQAIgOQAIgMAQgKQAQgLAXgFQAXgGAdAAQAeAAAXAGQAXAFAQALQAQAKAIAMQAJAOAAAQQAAAQgJAOQgJANgRAJIAAAzIBVAAIAAApgAgogIIBQAAIAAglIgTACIgVAAIgUAAIgUgCgAghiQQgOAEgIAEQgJAFgEAGQgEAHAAAHQAAAHAEAFQAEAGAJAEQAIAFAOACQAOADATgBQAUABANgDQAOgCAJgFQAJgEAEgGQAEgFAAgHQAAgGgEgHQgEgHgJgFQgJgEgOgEQgNgDgUABQgTgBgOADg");
	this.shape_20.setTransform(797.575,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhZC2IAAicIAwAAIAAAnICKAAIAAgpIAwAAIAACegAgpCNICKAAIAAgkIiKAAgABgAJIAAhKIgzAAQgCAQgJANQgIANgMALQgMAJgPAEQgQAFgTAAQgWAAgSgGQgSgGgMgMQgMgMgHgRQgIgQAAgUQAAgUAIgQQAGgRANgMQAMgMASgGQASgHAWAAQAkAAAYASQAZASAHAeIA0AAIAAhKIAxAAIAAC+gAhTh3QgNANAAAXQAAAZANAMQAMAOAXAAQAVAAANgOQANgMAAgZQAAgXgNgNQgNgOgVAAQgXAAgMAOg");
	this.shape_21.setTransform(761.1,22.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag1C0QgYgFgQgKQgQgKgJgOQgIgNAAgRQAAghAhgVQAhgUA8AAQA+AAAgAUQAhAVAAAhQAAARgIANQgJAOgQAKQgQAKgXAFQgYAGgfAAQgeAAgXgGgAgiBPQgPADgIAFQgJAFgEAGQgEAGAAAHQAAAHAEAGQAEAGAJAFQAIAFAPADQAOADAUAAQAVAAAPgDQAOgDAJgFQAJgFADgGQAEgGAAgHQAAgHgEgGQgDgGgJgFQgJgFgOgDQgPgDgVAAQgUAAgOADgAiuATIAAgnICVAAIAAgoIhdAAIAAh9IAxAAIAABUIDCAAIAAApIhlAAIAAAoICXAAIAAAng");
	this.shape_22.setTransform(726.375,23.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ah3C2IAAhyIAwAAIAABHIDHAAIAAArgAiuAnIAAgpIFdAAIAAApgAh2gpIAAiLIAxAAIAABhIDCAAIAAAqg");
	this.shape_23.setTransform(681.825,22.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABEC4IAAlvIAxAAIAACVIA5AAIAAAoIg5AAIAACygAhiBpQgRgHgLgLQgMgMgGgOQgGgPAAgQQAAgQAGgOQAGgPAMgLQALgLARgHQASgHAWAAQAVAAASAHQARAHAKAMQAMALAGAOQAGAPAAAPQAAAQgGAPQgGAPgMALQgLALgRAHQgRAHgVAAQgWAAgSgHgAhNgIQgIAEgGAFQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAGAFAIAEQAIADALAAQAKAAAIgDQAIgEAGgFQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgGgFgIgEQgIgDgKAAQgLAAgIADgAithBIAAgqIDkAAIAAAqgAh9iBIAAgqICDAAIAAAqg");
	this.shape_24.setTransform(646.525,22.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhZC2IAAicIAwAAIAAAnICKAAIAAgpIAwAAIAACegAgpCNICKAAIAAgkIiKAAgABgAJIAAhKIgzAAQgDAQgHANQgJANgMALQgMAJgPAEQgQAFgTAAQgWAAgSgGQgRgGgNgMQgNgMgGgRQgIgQABgUQgBgUAIgQQAGgRANgMQANgMARgGQASgHAWAAQAkAAAYASQAZASAHAeIA0AAIAAhKIAxAAIAAC+gAhTh3QgNANAAAXQAAAZANAMQANAOAVAAQAXAAAMgOQANgMAAgZQAAgXgNgNQgMgOgXAAQgVAAgNAOg");
	this.shape_25.setTransform(609.7,22.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABHC6IAAhhIi8AAIAAgpIDtAAIAACKgABHAhIAAjZIAxAAIAABVIA4AAIAAAqIg4AAIAABagAivgCQAegNAYgQQAZgQARgRQARgQAJgRQAKgQADgOIghAAIghAAIgsAAIAAgqIA8AAIA2AAIA1AAQgDAegJAYQgIAZgOAVQARATAVAPQAWAQAWAKIgdAiQgWgLgTgPQgUgQgSgUQgUAWgaAPQgaARgeAPg");
	this.shape_26.setTransform(574.925,23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABjC5IAAiMIhDAAQgMAcgUAPQgWAQgcAAQgWAAgSgJQgSgJgNgRQgMgRgHgZQgHgZAAggQAAgfAHgZQAHgaAMgRQANgRASgJQASgIAWgBQAaAAAVAOQATANAMAYIBHAAIAAhHIAxAAIAAFxgAhVhgQgMAYAAAqQAAArAMAYQAMAYAXAAQAWAAAMgYQAMgYAAgrQAAgqgMgYQgMgZgWAAQgXAAgMAZgAAtgeQAAAUgDAOIA5AAIAAhMIg6AAQAEATAAAXg");
	this.shape_27.setTransform(529.275,23.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ABEC4IAAlvIAxAAIAACVIA5AAIAAAoIg5AAIAACygAhiBpQgRgHgLgLQgMgMgGgOQgGgPAAgQQAAgQAGgOQAGgPAMgLQALgLARgHQASgHAWAAQAVAAASAHQARAHAKAMQAMALAGAOQAGAPAAAPQAAAQgGAPQgGAPgMALQgLALgRAHQgRAHgVAAQgWAAgSgHgAhNgIQgIAEgGAFQgFAGgDAHQgDAIAAAIQAAAJADAHQADAIAFAGQAGAFAIAEQAIADALAAQAKAAAIgDQAIgEAGgFQAFgGADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgGgFgIgEQgIgDgKAAQgLAAgIADgAithBIAAgqIDkAAIAAAqgAh9iBIAAgqICDAAIAAAqg");
	this.shape_28.setTransform(495.125,22.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhfCjQgggTAAggQAAggAhgTQAhgSA9AAQA+AAAhASQAhATAAAgQAAAgghATQghATg+AAQg+AAghgTgAgjBTQgOADgJAEQgJAEgEAGQgEAGAAAGQAAAGAEAGQAEAGAJAEQAJAEAOADQAPADAUAAQAVAAAOgDQAPgDAJgEQAJgEAEgGQAEgGAAgGQAAgGgEgGQgEgGgJgEQgJgEgPgDQgOgDgVAAQgUAAgPADgAiuAcIAAgnICYAAIAAglIhhAAIAAiFIDtAAIAAApIi7AAIAAA0IC9AAIAAAoIhdAAIAAAlICUAAIAAAng");
	this.shape_29.setTransform(459.225,23.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVCwIAAiYIiVAAIAAgpIDnAAQAFggADgfQADgfAAgWIjAAAIAAgqIDzAAQAAApgEAqQgEAqgFAhIA9AAIAAApIiPAAIAACYg");
	this.shape_30.setTransform(423.525,23.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ah3C2IAAhyIAwAAIAABHIDHAAIAAArgAiuAnIAAgpIFdAAIAAApgAh2gpIAAiLIAxAAIAABhIDCAAIAAAqg");
	this.shape_31.setTransform(379.025,22.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AiqCPIAAgqICVAAIAAhAIAxAAIAABAICPAAIAAAqgAiBAfIAAisIB5AAIAAApIhIAAIAABbQAPAAASgCIAsgFIAAAmIgZAFIgZACIgcABIgjABgAAFAdIAAiqICAAAIAAApIhOAAIAABZIBSAAIAAAog");
	this.shape_32.setTransform(343.375,21.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhZC1IAAhyIAxAAIAABIIC/AAIAAAqgABfBSIAAkGIAxAAIAAEGgAhcARQgSgIgNgLQgNgNgHgSQgHgRAAgUQAAgVAHgRQAHgSANgNQANgNASgHQASgHAWAAQAVAAATAHQARAHANANQANANAIASQAHARAAAVQAAAUgHARQgIASgNANQgNALgRAIQgTAHgVAAQgWAAgSgHgAhWhuQgNAOAAAaQAAAZANAOQAMAOAWAAQAWAAANgOQANgOAAgZQAAgagNgOQgNgPgWAAQgVAAgNAPg");
	this.shape_33.setTransform(298.075,22.675);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhWC1IAAhvIAxAAIAABFIC/AAIAAAqgABiBbIAAhMIhAAAIAAgoIBAAAIAAgqIgzAAIAAgpIAzAAIAAhIIAyAAIAAEPgAiaAVQBCgVAjgjQAjgkAGgwIglABIguAAIgiAAIAAgpIA4AAIA4AAIA9gBQgDAmgLAhQgMAigUAbQgVAcgfAVQgeAWgoAOg");
	this.shape_34.setTransform(262.15,22.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AghAlQAMgEAIgHQAGgHADgIQADgIgIgBQgHgBgIgFQgHgHAAgOQAAgFACgFQACgFAFgEQADgEAHgDQAFgCAHAAQAPAAAJAKQAKAKAAAQQAAAXgPATQgOASgdALg");
	this.shape_35.setTransform(230.1,37.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ABDC6IAAhUIi8AAIAAgpIDtAAIAAB9gAirAMQAfgLAYgMQAYgNAPgOQAQgOAKgNQAJgNADgKIggABIggABIgxAAIAAgmIBGAAIAzgBIAygBQgBAYgKAXQgKAWgSAVQAhAZAsAQIgZAiQgtgTgjgdQgVAQgYAPQgZAOgbAKgABDAtIAAjkIAxAAIAABnIA4AAIAAApIg4AAIAABUgAh4iTIAAgmIByAAIAAAmg");
	this.shape_36.setTransform(207.125,22.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgwC0QgXgFgQgKQgPgKgIgOQgIgNAAgQQAAgPAIgOQAIgNAPgKQAQgKAXgGQAXgGAdAAQAeAAAXAGQAYAGAPAKQAQAKAIANQAIAOAAAPQAAAQgIANQgIAOgQAKQgPAKgYAFQgXAGgeAAQgdAAgXgGgAgdBRQgOADgJAEQgIAFgEAHQgEAGAAAGQAAAHAEAGQAEAHAIAEQAJAFAOADQAOADATAAQAUAAAOgDQAOgDAJgFQAIgEAEgHQAEgGAAgHQAAgGgEgGQgEgHgIgFQgJgEgOgDQgOgDgUAAQgTAAgOADgABHAnIAAjgIAxAAIAABUIA4AAIAAAqIg4AAIAABigAivgDQAegOAYgQQAZgPARgRQARgRAJgQQAKgQADgOIghAAIghAAIgsAAIAAgpIA8AAIA2AAIA1gBQgDAdgIAZQgIAYgOAVQAQATAWAPQAVAQAWAJIgdAiQgWgKgTgPQgUgQgRgUQgUAWgbARQgaAQgeAPg");
	this.shape_37.setTransform(171.125,23.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ah6C1IAAhZIDDAAIAAgUIjDAAIAAgkID0AAIAABZIjCAAIAAAUIDMAAIAAAkgAiuAOIAAgjIFdAAIAAAjgAh4goIAAhVIC+AAIAAgSIi+AAIAAglIDuAAIAABXIi9AAIAAASIDGAAIAAAjg");
	this.shape_38.setTransform(126.625,23.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("ABoC5IAAlxIAxAAIAAFxgAiZBLQAmgSAbgWQAbgWASgXQASgYAJgaQALgaADgaIhZABIgrAAIAAgqIBAAAIA6AAIA+gBQgCArgLAmQgKAmgVAhQgTAgggAcQgfAcgrAYg");
	this.shape_39.setTransform(89.35,23.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhZC2IAAicIAwAAIAAAnICKAAIAAgpIAwAAIAACegAgpCNICKAAIAAgkIiKAAgABgAJIAAhKIgzAAQgDAQgHANQgJANgMALQgMAJgPAEQgQAFgTAAQgWAAgSgGQgRgGgNgMQgNgMgGgRQgIgQABgUQgBgUAIgQQAGgRANgMQANgMARgGQASgHAWAAQAkAAAYASQAZASAHAeIA0AAIAAhKIAxAAIAAC+gAhTh3QgNANAAAXQAAAZANAMQAMAOAXAAQAVAAANgOQANgMAAgZQAAgXgNgNQgNgOgVAAQgXAAgMAOg");
	this.shape_40.setTransform(54.5,22.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ABHC6IAAhhIi8AAIAAgpIDtAAIAACKgABHAhIAAjZIAxAAIAABVIA4AAIAAAqIg4AAIAABagAivgCQAegNAYgQQAZgQARgRQARgQAJgRQAKgQADgOIghAAIghAAIgsAAIAAgqIA8AAIA2AAIA1AAQgDAegJAYQgIAZgOAVQARATAVAPQAWAQAWAKIgdAiQgWgLgTgPQgUgQgSgUQgUAWgaAPQgaARgeAPg");
	this.shape_41.setTransform(19.725,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},77).to({state:[]},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.1,-9.7,1564.6999999999998,121.5);


(lib.tractor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.tractor_leftside();
	this.instance.setTransform(0,0,0.4489,0.4489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,880.7,713.7);


(lib.타이틀 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 타이틀 애니 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhJDgC+IAAqQMCSHAAAIAAKQg");
	var mask_graphics_43 = new cjs.Graphics().p("EhJDgC+IAAqQMCSHAAAIAAKQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:67.0583,y:-84.7}).wait(43).to({graphics:mask_graphics_43,x:67.0583,y:-84.7}).wait(1).to({graphics:null,x:0,y:0}).wait(6));

	// 텍스트
	this.instance = new lib.TITLE_TEXT("single",0);
	this.instance.setTransform(-460.1,-127.1,1,1,0,0,0,85.7,28.9);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-321.25,alpha:0.3789},7).to({x:-276.2,alpha:1},12).wait(24).to({startPosition:0},0).to({_off:true},1).wait(6));

	// 타이틀 라인
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyHAoIAAhPMAkPAAAIAABPg");
	this.shape.setTransform(-413.8503,-96.2687,0.0351,0.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiOAZIAAgxIEdAAIAAAxg");
	this.shape_1.setTransform(-403.675,-96.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj0AZIAAgxIHoAAIAAAxg");
	this.shape_2.setTransform(-393.5,-96.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlZAZIAAgxIKzAAIAAAxg");
	this.shape_3.setTransform(-383.325,-96.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Am/AZIAAgxIN/AAIAAAxg");
	this.shape_4.setTransform(-373.15,-96.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AolAZIAAgxIRLAAIAAAxg");
	this.shape_5.setTransform(-362.975,-96.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AqLAZIAAgxIUXAAIAAAxg");
	this.shape_6.setTransform(-352.8,-96.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ArwAZIAAgxIXhAAIAAAxg");
	this.shape_7.setTransform(-342.625,-96.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AtWAZIAAgxIatAAIAAAxg");
	this.shape_8.setTransform(-332.45,-96.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Au8AZIAAgxId5AAIAAAxg");
	this.shape_9.setTransform(-322.275,-96.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AwiAZIAAgxMAhEAAAIAAAxg");
	this.shape_10.setTransform(-312.1,-96.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:0.0351,x:-413.8503}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape,p:{scaleX:1,x:-301.925}}]},1).to({state:[{t:this.shape,p:{scaleX:1,x:-301.925}}]},32).to({state:[]},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-417.9,-156,231.99999999999997,62.3);


(lib.CAPTION_TEXTANI7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1OELIAAoUMAqdAAAIAAIUg");
	mask.setTransform(100.4,24);

	// Layer 1
	this.instance = new lib.CAPTION_TEXT("single",6);
	this.instance.setTransform(-37.1,25.4,1,1,0,0,0,103,25.4);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:35.5,alpha:0.7695},6).to({x:103,alpha:1},12).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,0,194.4,50.7);


(lib.CAPTION_TEXTANI6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1OELIAAoUMAqdAAAIAAIUg");
	mask.setTransform(100.4,24);

	// Layer 1
	this.instance = new lib.CAPTION_TEXT("single",5);
	this.instance.setTransform(267.7,25.4,1,1,0,0,0,103,25.4);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:195.55,alpha:0.7695},6).to({x:103,alpha:1},12).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.6,0,224.70000000000002,50.7);


(lib.CAPTION_TEXTANI5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1OELIAAoUMAqdAAAIAAIUg");
	mask.setTransform(100.4,24);

	// Layer 1
	this.instance = new lib.CAPTION_TEXT("single",4);
	this.instance.setTransform(267.7,25.4,1,1,0,0,0,103,25.4);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:195.55,alpha:0.7695},6).to({x:103,alpha:1},12).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.1,0,189.20000000000002,50.7);


(lib.CAPTION_TEXTANI4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1OELIAAoUMAqdAAAIAAIUg");
	mask.setTransform(100.4,24);

	// Layer 1
	this.instance = new lib.CAPTION_TEXT("single",3);
	this.instance.setTransform(234.95,25.4,1,1,0,0,0,103,25.4);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:188.1,alpha:0.7695},6).to({x:103,alpha:1},12).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.6,0,224.70000000000002,50.7);


(lib.CAPTION_TEXTANI3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1OELIAAoUMAqdAAAIAAIUg");
	mask.setTransform(100.4,24);

	// Layer 1
	this.instance = new lib.CAPTION_TEXT("single",2);
	this.instance.setTransform(267.7,25.4,1,1,0,0,0,103,25.4);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:195.55,alpha:0.7695},6).to({x:103,alpha:1},12).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.1,0,189.20000000000002,50.7);


(lib.CAPTION_TEXTANI2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1OHqIAAvTMAqdAAAIAAPTg");
	mask.setTransform(100.4,46.3277);

	// Layer 1
	this.instance = new lib.CAPTION_TEXT("single",1);
	this.instance.setTransform(-39.2,25.4,1,1,0,0,0,103,25.4);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.2,alpha:0.7695},6).to({x:103,alpha:1},12).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,0,240.3,95.4);


(lib.CAPTION_TEXTANI1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1OELIAAoUMAqdAAAIAAIUg");
	mask.setTransform(100.4,24);

	// Layer 1
	this.instance = new lib.CAPTION_TEXT("single",0);
	this.instance.setTransform(-39.2,25.4,1,1,0,0,0,103,25.4);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.2,alpha:0.7695},6).to({x:103,alpha:1},12).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,0,270,50.7);


(lib.CONT_TEXTANI = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_77 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(77).call(this.frame_77).wait(1));

	// text ani
	this.instance = new lib.CONT_TEXT("synched",77,false);
	this.instance.setTransform(471.7,47.1,1,1,0,0,0,484.5,51.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-4.8,1271.8999999999999,103.8);


(lib.CAPTION_TOTALANI7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

	// Layer 5
	this.instance = new lib.CAPTION_TEXTANI7("synched",0,false);
	this.instance.setTransform(391.25,37.25,1,1,0,0,0,103,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(55));

	// Layer 1
	this.instance_1 = new lib.CAPTION_RECT("synched",0);
	this.instance_1.setTransform(244.3,38.6,0.0085,1,0,0,0,0,38.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({scaleX:0.6949},6).to({regX:0.1,scaleX:1},12).wait(37));

	// Layer 2
	this.instance_2 = new lib.CAPTION_LINE("synched",0,false);
	this.instance_2.setTransform(126,90.2,1,1,0,0,0,116.5,51.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(72));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape.setTransform(8.7885,141.2606,0.6173,0.6173);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.835)").ss(1.8,1,1).p("AhvAAQAAguAhghQAhggAtAAQAvAAAgAgQAhAhAAAuQAAAughAhQggAhgvAAQgtAAghghQghghAAgug");
	this.shape_1.setTransform(8.775,141.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.667)").ss(1.5,1,1).p("AipAAQAAhGAygyQAygxBFAAQBGAAAyAxQAyAyAABGQAABHgyAwQgyAyhGAAQhFAAgygyQgygwAAhHg");
	this.shape_2.setTransform(8.8,141.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.502)").ss(1.3,1,1).p("AjiAAQAAhdBChEQBDhBBdAAQBeAABCBBQBDBEAABdQAABehDBBQhCBEheAAQhdAAhDhEQhChBAAheg");
	this.shape_3.setTransform(8.775,141.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("ADJjJQBUBUAAB1QAAB2hUBSQhTBVh2AAQh1AAhUhVQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTg");
	this.shape_4.setTransform(8.775,141.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.29)").ss(1,1,1).p("AkqAAQAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBWQhXBZh8AAQh7AAhYhZQhXhWAAh8g");
	this.shape_5.setTransform(8.775,141.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.251)").ss(0.9,1,1).p("Ak5AAQAAiBBbhdQBdhbCBAAQCCAABbBbQBdBdAACBQAACChdBbQhbBdiCAAQiBAAhdhdQhbhbAAiCg");
	this.shape_6.setTransform(8.8,141.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.208)").ss(0.8,1,1).p("AlHAAQAAiHBfhgQBhhgCHAAQCIAABfBgQBhBgAACHQAACJhhBeQhfBhiIAAQiHAAhhhhQhfheAAiJg");
	this.shape_7.setTransform(8.8,141.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.169)").ss(0.8,1,1).p("AlWAAQAAiNBkhlQBlhjCNAAQCOAABkBjQBlBlAACNQAACOhlBjQhkBliOAAQiNAAhlhlQhkhjAAiOg");
	this.shape_8.setTransform(8.8,141.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.125)").ss(0.7,1,1).p("AlkAAQAAiTBohpQBphoCTAAQCUAABoBoQBpBpAACTQAACUhpBnQhoBqiUAAQiTAAhphqQhohnAAiUg");
	this.shape_9.setTransform(8.775,141.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.082)").ss(0.7,1,1).p("AlyAAQAAiZBrhuQBuhrCZAAQCaAABsBrQBtBuAACZQAACahtBrQhsBuiaAAQiZAAhuhuQhrhrAAiag");
	this.shape_10.setTransform(8.8,141.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.043)").ss(0.6,1,1).p("AmBAAQAAifBwhxQByhwCfAAQCgAABwBwQByBxAACfQAACghyBwQhwByigAAQifAAhyhyQhwhwAAigg");
	this.shape_11.setTransform(8.8,141.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape_12.setTransform(8.8006,141.1946,4.545,4.545);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(44));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+A+QgZgaAAgkQAAgkAZgaQAbgZAjAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_13.setTransform(8.7915,141.2723,0.5739,0.5739);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpArQgSgSAAgZQAAgXASgSQARgSAYAAQAZAAARASQASASAAAXQAAAZgSASQgRARgZAAQgYAAgRgRg");
	this.shape_14.setTransform(8.8,141.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_15.setTransform(8.825,141.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag3A3QgWgXAAggQAAggAWgWQAXgYAgAAQAhAAAWAYQAXAWAAAgQAAAggXAXQgWAYghAAQggAAgXgYg");
	this.shape_16.setTransform(8.8,141.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{scaleX:0.5739,scaleY:0.5739,x:8.7915,y:141.2723}}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_13,p:{scaleX:1,scaleY:1,x:8.8,y:141.25}}]},1).wait(72));

	// 위치파악용
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,21,229,0)").s().p("Egk1AJ8IAAz3MBJrAAAIAAT3g");
	this.shape_17.setTransform(273.7296,74.1874,1.1269,1.1765);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-1.5,571.9000000000001,183.7);


(lib.CAPTION_TOTALANI5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

	// Layer 5
	this.instance = new lib.CAPTION_TEXTANI6("synched",0,false);
	this.instance.setTransform(85.75,11.7,1,1,0,0,0,103,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(55));

	// Layer 1
	this.instance_1 = new lib.CAPTION_RECT("synched",0);
	this.instance_1.setTransform(233.7,13.05,0.0085,1,0,0,180,0,38.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({scaleX:0.6949},6).to({regX:0.1,scaleX:1},12).wait(37));

	// Layer 2
	this.instance_2 = new lib.CAPTION_LINE("synched",0,false);
	this.instance_2.setTransform(397.5,-49.6,1.3844,1.2078,180,0,0,116.5,51.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(72));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape.setTransform(561.5115,-117.9106,0.6173,0.6173,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.835)").ss(1.8,1,1).p("AhvAAQAAgtAhghQAgghAuAAQAuAAAhAhQAhAhAAAtQAAAvghAhQghAgguAAQguAAggggQghghAAgvg");
	this.shape_1.setTransform(561.525,-117.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.667)").ss(1.5,1,1).p("AioABQAAhGAygxQAxgyBFAAQBGAAAyAyQAyAxAABGQAABGgyAyQgyAxhGAAQhFAAgxgxQgygyAAhGg");
	this.shape_2.setTransform(561.55,-117.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.502)").ss(1.3,1,1).p("AjiAAQAAhdBDhCQBChDBdAAQBeAABDBDQBCBCAABdQAABehCBDQhDBCheAAQhdAAhChCQhDhDAAheg");
	this.shape_3.setTransform(561.525,-117.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("AAAkcQB2AABUBVQBTBSAAB1QAAB2hTBUQhUBTh2AAQh1AAhThTQhUhUAAh2QAAh1BUhSQBThVB1AAg");
	this.shape_4.setTransform(561.525,-117.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.29)").ss(1,1,1).p("AkqAAQAAh7BYhWQBXhZB7AAQB8AABYBZQBXBWAAB7QAAB8hXBZQhYBWh8AAQh7AAhXhWQhYhZAAh8g");
	this.shape_5.setTransform(561.525,-117.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.251)").ss(0.9,1,1).p("Ak5AAQAAiCBdhaQBbhcCBAAQCCAABcBcQBcBaAACCQAACChcBdQhcBaiCAAQiBAAhbhaQhdhdAAiCg");
	this.shape_6.setTransform(561.525,-117.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.208)").ss(0.8,1,1).p("AlHAAQAAiIBhheQBfhhCHAAQCIAABhBhQBfBeAACIQAACIhfBhQhhBfiIAAQiHAAhfhfQhhhhAAiIg");
	this.shape_7.setTransform(561.5,-117.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.169)").ss(0.8,1,1).p("AlVAAQAAiNBlhjQBjhmCNAAQCOAABlBmQBjBjAACNQAACOhjBlQhlBkiOAAQiNAAhjhkQhlhlAAiOg");
	this.shape_8.setTransform(561.525,-117.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.125)").ss(0.7,1,1).p("AlkAAQAAiTBphnQBohqCTAAQCUAABpBqQBoBnAACTQAACUhoBqQhpBniUAAQiTAAhohnQhphqAAiUg");
	this.shape_9.setTransform(561.525,-117.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.082)").ss(0.7,1,1).p("AlyAAQAAiZBthrQBshuCZAAQCaAABtBuQBsBrAACZQAACahsBtQhtBsiaAAQiZAAhshsQhthtAAiag");
	this.shape_10.setTransform(561.525,-117.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.043)").ss(0.6,1,1).p("AmAAAQAAifBxhwQBwhyCfAAQCgAAByByQBvBwAACfQAACghvByQhyBwigAAQifAAhwhwQhxhyAAigg");
	this.shape_11.setTransform(561.5,-117.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape_12.setTransform(561.4994,-117.8446,4.545,4.545,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(44));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+A+QgZgaAAgkQAAgkAZgaQAbgZAjAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_13.setTransform(561.5085,-117.9223,0.5739,0.5739,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_14.setTransform(561.5,-117.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgwAxQgUgVAAgcQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAcgUAVQgUAUgdAAQgcAAgUgUg");
	this.shape_15.setTransform(561.525,-117.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag3A4QgWgYAAggQAAgfAWgYQAXgWAgAAQAgAAAYAWQAXAYgBAfQABAggXAYQgYAXgggBQggABgXgXg");
	this.shape_16.setTransform(561.5,-117.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{scaleX:0.5739,scaleY:0.5739,x:561.5085,y:-117.9223}}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_13,p:{scaleX:1,scaleY:1,x:561.5,y:-117.9}}]},1).wait(72));

	// 위치파악용
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,21,229,0)").s().p("Egk1AJ8IAAz3MBJrAAAIAAT3g");
	this.shape_17.setTransform(278.9204,-3.0874,1.1269,1.1765,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-158.8,664.2,230.60000000000002);


(lib.CAPTION_TOTALANI41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

	// Layer 5
	this.instance = new lib.CAPTION_TEXTANI5("synched",0,false);
	this.instance.setTransform(105.45,137.95,1,1,0,0,0,103,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(55));

	// Layer 1
	this.instance_1 = new lib.CAPTION_RECT("synched",0);
	this.instance_1.setTransform(251.7,139.3,0.0085,1,0,0,180,0,38.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({scaleX:0.6949},6).to({regX:0.1,scaleX:1},12).wait(37));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ar+AAIX9AA");
	this.shape.setTransform(328.15,141.6,0.0375,1.2078,0,0,180,-0.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("AgwAAIBhAA");
	this.shape_1.setTransform(326.05,141.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AhFAAICLAA");
	this.shape_2.setTransform(323.9,141.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("AhaAAIC1AA");
	this.shape_3.setTransform(321.8,141.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4,1,1).p("AhuAAIDdAA");
	this.shape_4.setTransform(319.675,141.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4,1,1).p("AiDAAIEHAA");
	this.shape_5.setTransform(317.55,141.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("AiYAAIExAA");
	this.shape_6.setTransform(315.4,141.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(4,1,1).p("AisAAIFZAA");
	this.shape_7.setTransform(313.275,141.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(4,1,1).p("AjBAAIGDAA");
	this.shape_8.setTransform(311.15,141.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(4,1,1).p("AjVAAIGrAA");
	this.shape_9.setTransform(309.025,141.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(4,1,1).p("AjqAAIHVAA");
	this.shape_10.setTransform(306.9,141.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(4,1,1).p("Aj/AAIH/AA");
	this.shape_11.setTransform(304.775,141.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(4,1,1).p("AkTAAIInAA");
	this.shape_12.setTransform(302.625,141.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(4,1,1).p("AkoAAIJRAA");
	this.shape_13.setTransform(300.5,141.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ak9AAIJ7AA");
	this.shape_14.setTransform(298.375,141.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlRAAIKjAA");
	this.shape_15.setTransform(296.275,141.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlmAAILNAA");
	this.shape_16.setTransform(294.125,141.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{regX:-0.6,scaleX:0.0375,x:328.15}}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape,p:{regX:-0.5,scaleX:0.4949,x:292.2}}]},1).wait(55));

	// Layer 4
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape_17.setTransform(334.9615,141.2606,0.6173,0.6173,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0.835)").ss(1.8,1,1).p("AhvAAQAAguAhghQAgggAuAAQAuAAAhAgQAhAhAAAuQAAAughAhQghAhguAAQguAAggghQghghAAgug");
	this.shape_18.setTransform(334.975,141.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,255,255,0.667)").ss(1.5,1,1).p("AioAAQAAhGAygyQAwgxBGAAQBGAAAyAxQAxAyAABGQAABHgxAwQgyAyhGAAQhGAAgwgyQgygwAAhHg");
	this.shape_19.setTransform(335,141.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0.502)").ss(1.3,1,1).p("AjiAAQAAhdBDhEQBChBBdAAQBeAABDBBQBCBEAABdQAABehCBBQhDBEheAAQhdAAhChEQhDhBAAheg");
	this.shape_20.setTransform(334.975,141.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("ADKjJQhUhTh2AAQh1AAhTBTQhUBUAAB1QAAB2BUBSQBTBVB1AAQB2AABUhVQBThSAAh2QAAh1hThUg");
	this.shape_21.setTransform(334.975,141.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0.29)").ss(1,1,1).p("AkqAAQAAh7BYhYQBXhXB7AAQB8AABYBXQBXBYAAB7QAAB8hXBWQhYBZh8AAQh7AAhXhZQhYhWAAh8g");
	this.shape_22.setTransform(334.975,141.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,255,255,0.251)").ss(0.9,1,1).p("Ak5AAQAAiBBdhdQBbhbCBAAQCCAABcBbQBcBdAACBQAACChcBbQhcBdiCAAQiBAAhbhdQhdhbAAiCg");
	this.shape_23.setTransform(334.975,141.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0.208)").ss(0.8,1,1).p("AlHAAQAAiHBhhgQBfhgCHAAQCIAABhBgQBfBgAACHQAACJhfBeQhhBhiIAAQiHAAhfhhQhhheAAiJg");
	this.shape_24.setTransform(334.95,141.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,255,255,0.169)").ss(0.8,1,1).p("AlVAAQAAiNBlhlQBjhjCNAAQCOAABlBjQBjBlAACNQAACOhjBjQhlBliOAAQiNAAhjhlQhlhjAAiOg");
	this.shape_25.setTransform(334.975,141.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.125)").ss(0.7,1,1).p("AlkAAQAAiTBphpQBohoCTAAQCUAABpBoQBoBpAACTQAACUhoBnQhpBqiUAAQiTAAhohqQhphnAAiUg");
	this.shape_26.setTransform(334.975,141.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(255,255,255,0.082)").ss(0.7,1,1).p("AlyAAQAAiZBthuQBshrCZAAQCaAABtBrQBsBuAACZQAACahsBrQhtBuiaAAQiZAAhshuQhthrAAiag");
	this.shape_27.setTransform(334.975,141.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.043)").ss(0.6,1,1).p("AmBAAQAAifByhxQBwhwCfAAQCgAAByBwQBwBxAACfQAACghwBwQhyByigAAQifAAhwhyQhyhwAAigg");
	this.shape_28.setTransform(334.95,141.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(255,255,255,0)").ss(0.5,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape_29.setTransform(334.9494,141.1946,4.545,4.545,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).to({state:[{t:this.shape_17}]},5).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).wait(44));

	// Layer 3
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag+A+QgZgaAAgkQAAgkAZgaQAbgZAjAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_30.setTransform(334.9585,141.2723,0.5739,0.5739,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgpArQgSgSAAgZQAAgXASgSQARgSAYAAQAZAAASASQARASAAAXQAAAZgRASQgSARgZAAQgYAAgRgRg");
	this.shape_31.setTransform(334.95,141.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_32.setTransform(334.975,141.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag3A3QgXgXAAggQAAggAXgWQAXgYAgAAQAgAAAYAYQAXAWAAAgQAAAggXAXQgYAYggAAQggAAgXgYg");
	this.shape_33.setTransform(334.95,141.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30,p:{scaleX:0.5739,scaleY:0.5739,x:334.9585,y:141.2723}}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_30,p:{scaleX:1,scaleY:1,x:334.95,y:141.25}}]},1).wait(72));

	// 위치파악용
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,21,229,0)").s().p("Egk1AJ8IAAz3MBJrAAAIAAT3g");
	this.shape_34.setTransform(253.6204,109.7292,1.1269,0.6174,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,70.5,563,111.69999999999999);


(lib.CAPTION_TOTALANI4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

	// Layer 5
	this.instance = new lib.CAPTION_TEXTANI4("synched",0,false);
	this.instance.setTransform(105.45,137.95,1,1,0,0,0,103,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(55));

	// Layer 1
	this.instance_1 = new lib.CAPTION_RECT("synched",0);
	this.instance_1.setTransform(251.7,139.3,0.0085,1,0,0,180,0,38.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({scaleX:0.6949},6).to({regX:0.1,scaleX:1},12).wait(37));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ar+AAIX9AA");
	this.shape.setTransform(632.1,140.2,0.0228,1.2078,0,0,180,-0.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ah9AAID7AA");
	this.shape_1.setTransform(620.875,140.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,1,1).p("AjqAAIHVAA");
	this.shape_2.setTransform(609.55,140.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(4,1,1).p("AlXAAIKvAA");
	this.shape_3.setTransform(598.275,140.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(4,1,1).p("AnEAAIOJAA");
	this.shape_4.setTransform(586.95,140.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(4,1,1).p("AowAAIRhAA");
	this.shape_5.setTransform(575.675,140.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(4,1,1).p("AqdAAIU7AA");
	this.shape_6.setTransform(564.4,140.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(4,1,1).p("AsKAAIYVAA");
	this.shape_7.setTransform(553.075,140.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(4,1,1).p("At2AAIbuAA");
	this.shape_8.setTransform(541.8,140.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(4,1,1).p("AvjAAIfHAA");
	this.shape_9.setTransform(530.475,140.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(4,1,1).p("AxQAAMAihAAA");
	this.shape_10.setTransform(519.2,140.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ay9AAMAl7AAA");
	this.shape_11.setTransform(507.875,140.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(4,1,1).p("A0qAAMApVAAA");
	this.shape_12.setTransform(496.6,140.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(4,1,1).p("A2WAAMAstAAA");
	this.shape_13.setTransform(485.325,140.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(4,1,1).p("A4DAAMAwHAAA");
	this.shape_14.setTransform(474,140.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(4,1,1).p("A5wAAMAzhAAA");
	this.shape_15.setTransform(462.725,140.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(4,1,1).p("A7dAAMA27AAA");
	this.shape_16.setTransform(451.4,140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{scaleX:0.0228,x:632.1}}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape,p:{scaleX:2.4346,x:441.3}}]},1).wait(55));

	// Layer 4
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape_17.setTransform(636.2615,141.2606,0.6173,0.6173,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0.835)").ss(1.8,1,1).p("AhvAAQAAguAhghQAgggAuAAQAuAAAhAgQAhAhAAAuQAAAughAhQghAhguAAQguAAggghQghghAAgug");
	this.shape_18.setTransform(636.275,141.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,255,255,0.667)").ss(1.5,1,1).p("AioAAQAAhGAygyQAxgxBFAAQBGAAAyAxQAyAyAABGQAABHgyAwQgyAyhGAAQhFAAgxgyQgygwAAhHg");
	this.shape_19.setTransform(636.3,141.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0.502)").ss(1.3,1,1).p("AjiAAQAAhdBDhEQBChBBdAAQBeAABDBBQBCBEAABdQAABehCBBQhDBEheAAQhdAAhChEQhDhBAAheg");
	this.shape_20.setTransform(636.275,141.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("ADKjJQhUhTh2AAQh1AAhTBTQhUBUAAB1QAAB2BUBSQBTBVB1AAQB2AABUhVQBThSAAh2QAAh1hThUg");
	this.shape_21.setTransform(636.275,141.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0.29)").ss(1,1,1).p("AkqAAQAAh7BYhYQBXhXB7AAQB8AABYBXQBXBYAAB7QAAB8hXBWQhYBZh8AAQh7AAhXhZQhYhWAAh8g");
	this.shape_22.setTransform(636.275,141.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,255,255,0.251)").ss(0.9,1,1).p("Ak5AAQAAiBBdhdQBbhbCBAAQCCAABcBbQBcBdAACBQAACChcBbQhcBdiCAAQiBAAhbhdQhdhbAAiCg");
	this.shape_23.setTransform(636.275,141.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0.208)").ss(0.8,1,1).p("AlHAAQAAiHBhhgQBfhgCHAAQCIAABhBgQBfBgAACHQAACJhfBeQhhBhiIAAQiHAAhfhhQhhheAAiJg");
	this.shape_24.setTransform(636.25,141.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,255,255,0.169)").ss(0.8,1,1).p("AlVAAQAAiNBlhlQBjhjCNAAQCOAABlBjQBjBlAACNQAACOhjBjQhlBliOAAQiNAAhjhlQhlhjAAiOg");
	this.shape_25.setTransform(636.275,141.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.125)").ss(0.7,1,1).p("AlkAAQAAiTBphpQBohoCTAAQCUAABpBoQBoBpAACTQAACUhoBnQhpBqiUAAQiTAAhohqQhphnAAiUg");
	this.shape_26.setTransform(636.275,141.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(255,255,255,0.082)").ss(0.7,1,1).p("AlyAAQAAiZBthuQBshrCZAAQCaAABtBrQBsBuAACZQAACahsBrQhtBuiaAAQiZAAhshuQhthrAAiag");
	this.shape_27.setTransform(636.275,141.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.043)").ss(0.6,1,1).p("AmAAAQAAifBxhxQBwhwCfAAQCgAAByBwQBvBxAACfQAACghvBwQhyByigAAQifAAhwhyQhxhwAAigg");
	this.shape_28.setTransform(636.25,141.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(255,255,255,0)").ss(0.5,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape_29.setTransform(636.2494,141.1946,4.545,4.545,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).to({state:[{t:this.shape_17}]},5).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).wait(44));

	// Layer 3
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag+A+QgZgaAAgkQAAgkAZgaQAbgZAjAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_30.setTransform(636.2585,141.2723,0.5739,0.5739,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgpArQgSgSAAgZQAAgXASgSQARgSAYAAQAZAAASASQARASAAAXQAAAZgRASQgSARgZAAQgYAAgRgRg");
	this.shape_31.setTransform(636.25,141.25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_32.setTransform(636.275,141.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag2A3QgYgXAAggQAAggAYgWQAWgYAgAAQAhAAAXAYQAWAWABAgQgBAggWAXQgXAYghAAQggAAgWgYg");
	this.shape_33.setTransform(636.25,141.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30,p:{scaleX:0.5739,scaleY:0.5739,x:636.2585,y:141.2723}}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_30,p:{scaleX:1,scaleY:1,x:636.25,y:141.25}}]},1).wait(72));

	// 위치파악용
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,21,229,0)").s().p("Egk1AJ8IAAz3MBJrAAAIAAT3g");
	this.shape_34.setTransform(253.6204,109.7292,1.1269,0.6174,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,70.5,721,111.69999999999999);


(lib.CAPTION_TOTALANI3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

	// Layer 5
	this.instance = new lib.CAPTION_TEXTANI3("synched",0,false);
	this.instance.setTransform(86.65,12.25,1,1,0,0,0,103,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(55));

	// Layer 1
	this.instance_1 = new lib.CAPTION_RECT("synched",0);
	this.instance_1.setTransform(234.6,13.6,0.0085,1,0,0,180,0,38.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({scaleX:0.6949},6).to({regX:0.1,scaleX:1},12).wait(37));

	// Layer 2
	this.instance_2 = new lib.CAPTION_LINE("synched",0,false);
	this.instance_2.setTransform(377.15,76.55,1.2078,1.2078,0,0,180,116.5,51.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(72));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape.setTransform(518.5615,138.3606,0.6173,0.6173,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.835)").ss(1.8,1,1).p("AhvAAQAAguAhghQAgggAuAAQAuAAAhAgQAhAhAAAuQAAAughAhQghAhguAAQguAAggghQghghAAgug");
	this.shape_1.setTransform(518.575,138.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.667)").ss(1.5,1,1).p("AioAAQAAhGAygyQAxgxBFAAQBGAAAyAxQAyAyAABGQAABGgyAxQgyAyhGAAQhFAAgxgyQgygxAAhGg");
	this.shape_2.setTransform(518.6,138.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.502)").ss(1.3,1,1).p("AjiAAQAAheBDhDQBChBBdAAQBeAABDBBQBCBDAABeQAABehCBBQhDBEheAAQhdAAhChEQhDhBAAheg");
	this.shape_3.setTransform(518.575,138.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("AAAkcQB2AABUBVQBTBSAAB1QAAB2hTBUQhUBTh2AAQh1AAhThTQhUhUAAh2QAAh1BUhSQBThVB1AAg");
	this.shape_4.setTransform(518.575,138.325,1,1,0,180,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.29)").ss(1,1,1).p("AkqAAQAAh7BYhYQBXhXB7AAQB8AABYBXQBXBYAAB7QAAB8hXBWQhYBZh8AAQh7AAhXhZQhYhWAAh8g");
	this.shape_5.setTransform(518.575,138.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.251)").ss(0.9,1,1).p("Ak5AAQAAiBBdhdQBbhbCBAAQCCAABcBbQBcBdAACBQAACChcBbQhcBdiCAAQiBAAhbhdQhdhbAAiCg");
	this.shape_6.setTransform(518.575,138.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.208)").ss(0.8,1,1).p("AlHAAQAAiHBhhhQBfhfCHAAQCIAABhBfQBfBhAACHQAACIhfBfQhhBhiIAAQiHAAhfhhQhhhfAAiIg");
	this.shape_7.setTransform(518.55,138.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.169)").ss(0.8,1,1).p("AlVAAQAAiNBlhlQBjhjCNAAQCOAABlBjQBjBlAACNQAACOhjBjQhlBliOAAQiNAAhjhlQhlhjAAiOg");
	this.shape_8.setTransform(518.575,138.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.125)").ss(0.7,1,1).p("AlkAAQAAiTBphpQBohoCTAAQCUAABpBoQBoBpAACTQAACUhoBnQhpBqiUAAQiTAAhohqQhphnAAiUg");
	this.shape_9.setTransform(518.575,138.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.082)").ss(0.7,1,1).p("AlyAAQAAiZBthuQBshrCZAAQCaAABtBrQBsBuAACZQAACahsBrQhtBuiaAAQiZAAhshuQhthrAAiag");
	this.shape_10.setTransform(518.575,138.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.043)").ss(0.6,1,1).p("AmAAAQAAifBxhyQBwhwCfAAQCgAAByBwQBwByAACfQAACghwBvQhyByigAAQifAAhwhyQhxhvAAigg");
	this.shape_11.setTransform(518.55,138.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape_12.setTransform(518.5494,138.2946,4.545,4.545,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(44));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+A+QgZgaAAgkQAAgkAZgaQAbgZAjAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_13.setTransform(518.5585,138.3723,0.5739,0.5739,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgYAAgRgSg");
	this.shape_14.setTransform(518.55,138.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_15.setTransform(518.575,138.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2A4QgYgXAAghQAAggAYgWQAWgXAgAAQAgAAAYAXQAXAWAAAgQAAAhgXAXQgYAXgggBQggABgWgXg");
	this.shape_16.setTransform(518.55,138.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{scaleX:0.5739,scaleY:0.5739,x:518.5585,y:138.3723}}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_13,p:{scaleX:1,scaleY:1,x:518.55,y:138.35}}]},1).wait(72));

	// 위치파악용
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,21,229,0)").s().p("Egk1AJ8IAAz3MBJrAAAIAAT3g");
	this.shape_17.setTransform(261.0704,73.3626,1.1269,1.1765,180);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,-26.5,620.4,205.8);


(lib.CAPTION_TOTALANI2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

	// Layer 5
	this.instance = new lib.CAPTION_TEXTANI2("synched",0,false);
	this.instance.setTransform(439.7,-38.55,1,1,0,0,0,103,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(55));

	// Layer 1
	this.instance_1 = new lib.CAPTION_RECT2("synched",0);
	this.instance_1.setTransform(292.75,4.4,0.0085,1,0,0,0,0,38.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({scaleX:0.6949},6).to({regX:0.1,scaleX:1},12).wait(37));

	// Layer 2
	this.instance_2 = new lib.CAPTION_LINE12("synched",0,false);
	this.instance_2.setTransform(206.65,-59.3,1.2078,1.2078,0,180,0,116.5,51.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(72));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape.setTransform(65.2385,-121.1106,0.6173,0.6173,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.835)").ss(1.8,1,1).p("AhvAAQAAgtAhghQAhghAtAAQAvAAAgAhQAhAhAAAtQAAAvghAhQggAggvAAQgtAAghggQghghAAgvg");
	this.shape_1.setTransform(65.225,-121.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.667)").ss(1.5,1,1).p("AipABQAAhGAygxQAygzBFAAQBGAAAyAzQAyAxAABGQAABGgyAyQgyAxhGAAQhFAAgygxQgygyAAhGg");
	this.shape_2.setTransform(65.25,-121.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.502)").ss(1.3,1,1).p("AjiAAQAAhdBChCQBDhDBdAAQBeAABCBDQBDBCAABdQAABehDBDQhCBCheAAQhdAAhDhCQhChDAAheg");
	this.shape_3.setTransform(65.225,-121.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("AEdAAQAAh1hUhSQhThVh2AAQh1AAhUBVQhTBSAAB1QAAB2BTBUQBUBTB1AAQB2AABThTQBUhUAAh2g");
	this.shape_4.setTransform(65.225,-121.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.29)").ss(1,1,1).p("AkqAAQAAh7BXhWQBYhZB7AAQB8AABXBZQBYBWAAB7QAAB8hYBZQhXBWh8AAQh7AAhYhWQhXhZAAh8g");
	this.shape_5.setTransform(65.225,-121.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.251)").ss(0.9,1,1).p("Ak5AAQAAiBBbhaQBdhdCBAAQCCAABbBdQBcBaAACBQAACChcBdQhbBbiCAAQiBAAhdhbQhbhdAAiCg");
	this.shape_6.setTransform(65.25,-121.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.208)").ss(0.8,1,1).p("AlHAAQAAiHBfhfQBhhhCHAAQCIAABfBhQBhBfAACHQAACIhhBhQhfBfiIAAQiHAAhhhfQhfhhAAiIg");
	this.shape_7.setTransform(65.25,-121.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.169)").ss(0.8,1,1).p("AlWAAQAAiNBkhjQBlhmCNAAQCOAABkBmQBlBjAACNQAACOhlBlQhkBkiOAAQiNAAhlhkQhkhlAAiOg");
	this.shape_8.setTransform(65.25,-121.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.125)").ss(0.7,1,1).p("AlkAAQAAiTBohnQBphqCTAAQCUAABoBqQBpBnAACTQAACUhpBqQhoBniUAAQiTAAhphnQhohqAAiUg");
	this.shape_9.setTransform(65.225,-121.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.082)").ss(0.7,1,1).p("AlyAAQAAiZBrhrQBuhuCZAAQCaAABsBuQBtBrAACZQAACahtBuQhsBriaAAQiZAAhuhrQhrhuAAiag");
	this.shape_10.setTransform(65.25,-121.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.043)").ss(0.6,1,1).p("AmBAAQAAifBwhvQByhzCfAAQCgAABwBzQByBvAACfQAACghyByQhwBwigAAQifAAhyhwQhwhyAAigg");
	this.shape_11.setTransform(65.25,-121.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape_12.setTransform(65.2506,-121.0446,4.545,4.545,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(44));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+A+QgZgaAAgkQAAgkAZgaQAbgZAjAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_13.setTransform(65.2415,-121.1223,0.5739,0.5739,0,180,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpArQgSgTAAgYQAAgYASgSQARgRAYAAQAZAAARARQASASAAAYQAAAYgSATQgRARgZAAQgYAAgRgRg");
	this.shape_14.setTransform(65.25,-121.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgwAxQgUgVAAgcQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAcgUAVQgUAUgdAAQgcAAgUgUg");
	this.shape_15.setTransform(65.275,-121.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag3A4QgXgXABghQgBggAXgWQAYgYAfAAQAgAAAYAYQAWAWAAAgQAAAhgWAXQgYAWggABQgfgBgYgWg");
	this.shape_16.setTransform(65.25,-121.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{scaleX:0.5739,scaleY:0.5739,x:65.2415,y:-121.1223}}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_13,p:{scaleX:1,scaleY:1,x:65.25,y:-121.1}}]},1).wait(72));

	// 위치파악용
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,21,229,0)").s().p("Egk1AJ8IAAz3MBJrAAAIAAT3g");
	this.shape_17.setTransform(273.7296,74.1874,1.1269,1.1765);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.1,-162,580.1,311);


(lib.CAPTION_TOTALANI1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_75 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(75).call(this.frame_75).wait(1));

	// Layer 5
	this.instance = new lib.CAPTION_TEXTANI1("synched",0,false);
	this.instance.setTransform(391.25,37.25,1,1,0,0,0,103,25.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(55));

	// Layer 1
	this.instance_1 = new lib.CAPTION_RECT("synched",0);
	this.instance_1.setTransform(244.3,38.6,0.0085,1,0,0,0,0,38.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({scaleX:0.6949},6).to({regX:0.1,scaleX:1},12).wait(37));

	// Layer 2
	this.instance_2 = new lib.CAPTION_LINE("synched",0,false);
	this.instance_2.setTransform(126,90.2,1,1,0,0,0,116.5,51.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(72));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape.setTransform(8.7885,141.2606,0.6173,0.6173);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.835)").ss(1.8,1,1).p("AhvAAQAAguAhghQAhggAtAAQAvAAAgAgQAhAhAAAuQAAAughAhQggAhgvAAQgtAAghghQghghAAgug");
	this.shape_1.setTransform(8.775,141.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.667)").ss(1.5,1,1).p("AipAAQAAhGAygyQAygxBFAAQBGAAAyAxQAyAyAABGQAABHgyAwQgyAyhGAAQhFAAgygyQgygwAAhHg");
	this.shape_2.setTransform(8.8,141.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.502)").ss(1.3,1,1).p("AjiAAQAAhdBChEQBDhBBdAAQBeAABCBBQBDBEAABdQAABehDBBQhCBEheAAQhdAAhDhEQhChBAAheg");
	this.shape_3.setTransform(8.775,141.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("ADJjJQBUBUAAB1QAAB2hUBSQhTBVh2AAQh1AAhUhVQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTg");
	this.shape_4.setTransform(8.775,141.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.29)").ss(1,1,1).p("AkqAAQAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBWQhXBZh8AAQh7AAhYhZQhXhWAAh8g");
	this.shape_5.setTransform(8.775,141.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.251)").ss(0.9,1,1).p("Ak5AAQAAiBBbhdQBdhbCBAAQCCAABbBbQBdBdAACBQAACChdBbQhbBdiCAAQiBAAhdhdQhbhbAAiCg");
	this.shape_6.setTransform(8.8,141.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.208)").ss(0.8,1,1).p("AlHAAQAAiHBfhgQBhhgCHAAQCIAABfBgQBhBgAACHQAACJhhBeQhfBhiIAAQiHAAhhhhQhfheAAiJg");
	this.shape_7.setTransform(8.8,141.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.169)").ss(0.8,1,1).p("AlWAAQAAiNBkhlQBlhjCNAAQCOAABkBjQBlBlAACNQAACOhlBjQhkBliOAAQiNAAhlhlQhkhjAAiOg");
	this.shape_8.setTransform(8.8,141.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.125)").ss(0.7,1,1).p("AlkAAQAAiTBohpQBphoCTAAQCUAABoBoQBpBpAACTQAACUhpBnQhoBqiUAAQiTAAhphqQhohnAAiUg");
	this.shape_9.setTransform(8.775,141.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.082)").ss(0.7,1,1).p("AlyAAQAAiZBrhuQBuhrCZAAQCaAABsBrQBtBuAACZQAACahtBrQhsBuiaAAQiZAAhuhuQhrhrAAiag");
	this.shape_10.setTransform(8.8,141.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.043)").ss(0.6,1,1).p("AmBAAQAAifBwhxQByhwCfAAQCgAABwBwQByBxAACfQAACghyBwQhwByigAAQifAAhyhyQhwhwAAigg");
	this.shape_11.setTransform(8.8,141.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0)").ss(0.5,1,1).p("AA+A+QgaAagkAAQgkAAgagaQgZgZAAglQAAgjAZgbQAagZAkAAQAkAAAaAZQAaAbAAAjQAAAlgaAZg");
	this.shape_12.setTransform(8.8006,141.1946,4.545,4.545);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(44));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+A+QgZgaAAgkQAAgkAZgaQAbgZAjAAQAkAAAaAZQAaAaAAAkQAAAkgaAaQgaAagkAAQgjAAgbgag");
	this.shape_13.setTransform(8.7915,141.2723,0.5739,0.5739);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpArQgSgSAAgZQAAgXASgSQARgSAYAAQAZAAARASQASASAAAXQAAAZgSASQgRARgZAAQgYAAgRgRg");
	this.shape_14.setTransform(8.8,141.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_15.setTransform(8.825,141.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag3A3QgWgXAAggQAAggAWgWQAXgYAgAAQAhAAAWAYQAXAWAAAgQAAAggXAXQgWAYghAAQggAAgXgYg");
	this.shape_16.setTransform(8.8,141.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{scaleX:0.5739,scaleY:0.5739,x:8.7915,y:141.2723}}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_13,p:{scaleX:1,scaleY:1,x:8.8,y:141.25}}]},1).wait(72));

	// 위치파악용
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,21,229,0)").s().p("Egk1AJ8IAAz3MBJrAAAIAAT3g");
	this.shape_17.setTransform(273.7296,74.1874,1.1269,1.1765);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-1.5,571.9000000000001,183.7);


(lib.clip_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// 구조
	this.instance = new lib.CAPTION_TOTALANI1();
	this.instance.setTransform(1024.45,-31.4,1,1,0,0,0,266.6,74.2);

	this.instance_1 = new lib.CAPTION_TOTALANI41();
	this.instance_1.setTransform(-32.35,325.65,1,1,0,0,0,266.6,74.2);

	this.instance_2 = new lib.CAPTION_TOTALANI4();
	this.instance_2.setTransform(-32.35,218.15,1,1,0,0,0,266.6,74.2);

	this.instance_3 = new lib.CAPTION_TOTALANI5();
	this.instance_3.setTransform(27.55,674.7,1,1,0,0,0,266.6,74.2);

	this.instance_4 = new lib.CAPTION_TOTALANI3();
	this.instance_4.setTransform(68.6,97.55,1,1,0,0,0,266.6,74.2);

	this.instance_5 = new lib.CAPTION_TOTALANI7();
	this.instance_5.setTransform(1049.15,161.6,1,1,0,0,0,266.6,74.2);

	this.instance_6 = new lib.CAPTION_TOTALANI2();
	this.instance_6.setTransform(1039.55,527.5,1,1,0,0,0,266.6,74.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(36));

	// 삽화
	this.instance_7 = new lib.tractor();
	this.instance_7.setTransform(440.4,356.9,1,1,0,0,0,440.4,356.9);
	this.instance_7.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36));

	// 트랙터 그림자
	this.instance_8 = new lib.tractor();
	this.instance_8.setTransform(443.3,747,1.0593,0.1239,0,180,0,440.2,356.8);
	this.instance_8.alpha = 0.3086;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311,-106.2,1633,897.4000000000001);


(lib.chapter_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 삽화
	this.clip_mc = new lib.clip_01();
	this.clip_mc.name = "clip_mc";
	this.clip_mc.setTransform(885.25,745.7,0.8497,0.8497,0,0,0,1009.6,790);

	this.timeline.addTween(cjs.Tween.get(this.clip_mc).wait(1));

	// 내용 텍스트
	this.instance = new lib.CONT_TEXTANI("single",77);
	this.instance.setTransform(220.95,-32.7,1,1,0,0,0,484.5,51.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chapter_01, new cjs.Rectangle(-276.3,-89.4,1449.3,836.1), null);


(lib.lesson = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(1));

	// 타이틀
	this.instance = new lib.타이틀("synched",0);
	this.instance.setTransform(410.45,22.45,1,1,0,0,0,412.2,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44));

	// 컨텐츠
	this.instance_1 = new lib.chapter_01();
	this.instance_1.setTransform(224.3,119.45,1,1,0,0,0,313.5,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-419.7,-156.7,1481.2,926.4000000000001);


// stage content:
(lib.a_01_01_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	//=================================================
	// add mask of lesson mc 2021.3.9
	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eh5GBMUMAAAiTPMD1sAAAMAAACTPg");
	mask.setTransform(797.4, 488.4152);
	//=================================================

	// CONTENTS
	this.instance = new lib.lesson();
	this.instance.setTransform(830.4,490.0,1,1,0,0,0,387.9,271.4);
	//this.instance.setTransform(836.4,500.0,1,1,0,0,0,387.9,271.4);

	//=================================================
	// add mask of lesson mc
	var maskedShapeInstanceList = [this.instance];
	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}
	//=================================================

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(861,608.4,649,399.80000000000007);
// library properties:
lib.properties = {
	id: '15542E2C05257E4F9DED9C8404BD2967',
	width: 1920,
	height: 1080,
	fps: 29,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/a_01_01_HTML5 Canvas_atlas_1.png?1614757297290", id:"a_01_01_HTML5 Canvas_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['15542E2C05257E4F9DED9C8404BD2967'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
// 	var lastW, lastH, lastS=1;		
// 	window.addEventListener('resize', resizeCanvas);		
// 	resizeCanvas();		
// 	function resizeCanvas() {			
// 		var w = lib.properties.width, h = lib.properties.height;			
// 		var iw = window.innerWidth, ih=window.innerHeight;			
// 		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
// 		if(isResp) {                
// 			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
// 				sRatio = lastS;                
// 			}				
// 			else if(!isScale) {		
// 				//w,h : contents origin size 1920*1080
// 				//iw,ih : browser size
// 				if(iw<w || ih<h)				
// 				{					
// 					//무조건 가로기준 비율만 적용
// 					sRatio = xRatio;
// 					//sRatio = Math.min(xRatio, yRatio);
// 				}							
// 			}				
// 			else if(scaleType==1) {					
// 				sRatio = Math.min(xRatio, yRatio);				
// 			}				
// 			else if(scaleType==2) {					
// 				sRatio = Math.max(xRatio, yRatio);				
// 			}			
// 		}
// 		domContainers[0].width = w * pRatio * sRatio;			
// 		domContainers[0].height = h * pRatio * sRatio;
// 		domContainers.forEach(function(container) {				
// 			container.style.width = w * sRatio + 'px';				
// 			container.style.height = h * sRatio + 'px';			
// 		});
// 		stage.scaleX = pRatio*sRatio;			
// 		stage.scaleY = pRatio*sRatio;
// 		lastW = iw; lastH = ih; lastS = sRatio;            
// 		stage.tickOnUpdate = false;            
// 		stage.update();            
// 		stage.tickOnUpdate = true;		
// 	}
// }

an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;