window.addEventListener("load",eventWindowLoaded,false);
var canvas=document.getElementById('mycanvas');
var context=canvas.getContext('2d');
function eventWindowLoaded(){
	canvasApp();
}
function canvasApp(){
	var x=0;
	var y=200;
	var _waves=new Array();
	// _waves[0]=new Waves(x,y);
	// _waves[1]=new Waves(x+200,y);
	for(var i=0;i<400;){
		_waves.push(new Waves(i,y,i,y));
		i+=5;
	}
	// context.moveTo(0,200);
	function loopWave(){
		context.clearRect(0,0,400,400);
		context.fillStyle="#333333";
		context.fillRect(0,0,400,400);
		context.strokeStyle="#999999";
		// console.log("success");
		context.lineWidth=1;
		context.beginPath();
		for(var i=0,j=0;j<400;i++){
			// console.log(_waves[i].fx);
			_waves[i].y=40*Math.sin((_waves[i].x-_waves[i].speed)*Math.PI/180)+200;
			_waves[i].fy=30*Math.sin((_waves[i].fx-_waves[i].fspeed)*Math.PI/180)+200;
			// _waves[i].one_drawWave(_waves[i-1]);
			_waves[i].two_drawWave();
			context.stroke();
			_waves[i].speed+=5;
			_waves[i].fspeed+=5;
			j+=5;
		}
		window.setTimeout(loopWave,1);
	}
	loopWave();
}
function Waves(x,y,fx,fy){
	this.x=x;
	this.y=y;
	this.fx=fx;
	this.fy=fy;
	this.speed=100;
	this.fspeed=200;
}
Waves.prototype={
	one_drawWave:function(before){
		if(this.x%400==0){
				context.moveTo(0,this.y);
			}else{
				context.moveTo(before.x,before.y);
				context.lineTo(this.x,this.y);
			}
			if(this.fx%400==0){
				context.moveTo(0,this.fy);
			}else{
				context.moveTo(before.fx,before.fy);
				context.lineTo(this.fx,this.fy);
			}
	},
	maxY:function(){
		if(this.y>this.fy){
			return true;
		}
		return false;
	},
	two_drawWave:function(){
		if(this.maxY()){
			context.moveTo(this.x,this.y);
			context.lineTo(this.x,400);
		}else{
			context.moveTo(this.fx,this.fy);
			context.lineTo(this.fx,400);
		}
	}
}