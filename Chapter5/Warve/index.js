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
	_waves[0]=new Waves(x,y);
	// _waves[1]=new Waves(x+200,y);
	// for(var i=0;i<400;){
	// 	_waves.push(new Waves(i,y));
	// 	i+=5;
	// }
	context.fillStyle="#333333";
	context.fillRect(0,0,400,400);
	context.strokeStyle="#FFFFFF";
	context.lineWidth=1;
	// context.beginPath();
	// window.setTimeout(,100);
	// context.closePath();
	function loopWave(){
		_waves[0].drawWave();
		// for(var i=0,j=0;j<400;i++){
		// 	_waves[i].drawWave();
		// 	j+=5;
		// }
		// _waves[1].drawWave();
		window.setTimeout(loopWave,1);
	}
	loopWave();
}
function Waves(x,y){
	this.x=x;
	this.y=y;
	context.moveTo(x,y);
}
Waves.prototype={
	drawWave:function(){
		// console.log(this);
		if(this.x>400){
			this.x=0;
			context.clearRect(0,0,400,400);
			context.fillStyle="#333333";
			context.fillRect(0,0,400,400);
			context.moveTo(this.x,200);
			context.strokeStyle="#FFFFFF";
			console.log("success");
			context.lineWidth=1;
			context.beginPath();
		}else{
			this.y=20*Math.sin((this.x-100)*Math.PI/180)+200;
			context.lineTo(this.x,this.y);
			context.stroke();
			this.x+=1;
			// console.log(this.x+"  "+this.y);
		}
	}
}