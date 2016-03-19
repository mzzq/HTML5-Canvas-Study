window.addEventListener("load",eventWindowLoaded,false);
var canvas=document.getElementById('mycanvas');
var context=canvas.getContext('2d');
function eventWindowLoaded(){
	canvasApp();
}
function canvasApp(){
	//x的取值范围
	var _min_x=50;
	var _max_x=350;
	var _max_y=300;
	var _min_y=100;
	var _waves=new Array();
	// _waves[0]=new Waves(x,y);
	// _waves[1]=new Waves(x+200,y);
	for(var i=_min_x;i<_max_x;){
		_waves.push(new Waves(i,_min_y,i,_min_y));
		i+=2;
	}		
	context.strokeStyle="#D500F9";
	context.lineWidth=1;

	//裁剪自己的形状
	context.arc(200,200,150,(Math.PI/180)*0,(Math.PI/180)*360,false);
	context.clip();

	function loopWave(){
		context.clearRect(0,0,400,400);
		context.fillStyle="#333333";
		context.fillRect(0,0,400,400);
		// context.beginPath();
		for(var i=0,j=0;i<_waves.length;i++){
			_waves[i].y=40*Math.sin((_waves[i].x-_waves[i].speed)*Math.PI/180)+_max_y;
			_waves[i].fy=30*Math.sin((_waves[i].fx-_waves[i].fspeed)*Math.PI/180)+_max_y;

			// _waves[i].one_drawWave(_waves[i-1]);
			// _waves[i].two_drawWave();
			_waves[i].three_drawWave("#EA80FC","1");
			// context.stroke();
			// context.closePath();
			_waves[i].speed+=8;
			_waves[i].fspeed+=8;
			j+=2;
		}
		if(_min_y<=_max_y){
			_max_y-=1;
		}else{
			_max_y=300;
		}
		window.setTimeout(loopWave,30);
	}
	loopWave();
}
function Waves(x,y,fx,fy){
	this.x=x;
	this.y=y;
	this.fx=fx;
	this.fy=fy;
	this.speed=100;
	this.fspeed=160;
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
		context.moveTo(this.x,this.y);
		context.lineTo(this.x,400);
	},
	three_drawWave:function(color,alpha){
		if(!this.maxY()){
			context.beginPath();
			context.moveTo(this.x,this.y);
			context.lineTo(this.x,400);
			context.globalAlpha=1;
			context.strokeStyle="#D500F9";
			context.stroke();
			context.closePath();
		}else{
			context.save();
			context.beginPath();
			context.moveTo(this.fx,this.fy);
			context.lineTo(this.x,this.y);
			context.globalAlpha=alpha;
			context.strokeStyle="#EA80FC";
			context.stroke();
			context.closePath();
			context.restore();
			context.beginPath();
			context.moveTo(this.x,this.y);
			context.lineTo(this.x,400);
			context.globalAlpha=1;
			context.strokeStyle="#D500F9";
			context.stroke();
			context.closePath();
		}
	},
	four_drawWave:function(max_y){

	}
}