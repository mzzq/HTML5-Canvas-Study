window.addEventListener("load",eventWindowLoaded,false);
var canvas=document.getElementById('mycanvas');
var context=canvas.getContext('2d');
function eventWindowLoaded(){
	canvasApp();
}
function canvasApp(){
	var angle=0;
	var r_angle=0;
	var R=5;
	var r_R=5;
	var x=200,y=200;
	var Ball1=new Ball(2,'#00ff00',x,y);
	var color_index=0;
	var alpha=0.005;
	var colors=["#F44336","#FF9800","#FFEB3B","#4CAF50","#2196F3","#3F51B5","#9C27B0"]
	context.fillStyle="#000000";
	context.fillRect(0,0,canvas.width,canvas.height);
	function loopBall(){
		var ballx=x+R*Math.cos(angle);
		var bally=y+R*Math.sin(angle);
		Ball1.setProperty(2,colors[color_index],ballx,bally,alpha);
		if(R>=180){
			R=180;
			if(r_R>=180){
				r_R=180;
			}else{
				var rectx=x+r_R*Math.cos(r_angle);
				var recty=y+r_R*Math.sin(r_angle);
				context.fillStyle="#000000";
				context.fillRect(rectx-3,recty-3,6,6);
				r_R+=1;
			}
			r_angle+=Math.PI/60;
		}else{
			R+=1;
		}
		if(color_index>=6){
			color_index=0;
		}else{
			color_index++;
		}
		if(alpha>=1){
			alpha=1;
		}else{
			alpha+=0.005;
		}
		angle+=Math.PI/60;
		Ball1.draw(context);
	}
	setInterval(loopBall,30);
}