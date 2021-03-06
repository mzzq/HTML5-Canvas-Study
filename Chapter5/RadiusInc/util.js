function Ball(radius,color,x,y){
	if(radius==null){
		radius=20;
	}
	if(color==null){
		color="#ff0000";
	}
	this.x=x;
	this.y=y;
	this.radius=radius;
	this.rotation=0;
	this.scaleX=1;
	this.scaleY=1;
	this.color=color;
	this.alpha=1;
	this.lineWidth=0;
}
Ball.prototype.draw=function(context){
	context.save();
	context.globalAlpha=this.alpha;
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX,this.scaleY);
	context.lineWidth=this.lineWidth;
	context.fillStyle=this.color;
	context.beginPath();
	context.arc(0,0,this.radius,0,(Math.PI*2),true);
	context.closePath();
	context.fill();
	if(this.lineWidth>0){
		context.stroke();
	}
	context.restore();
};
Ball.prototype.setProperty=function(radius,color,x,y,alpha){
	this.x=x;
	this.y=y;
	this.radius=radius;
	this.color=color;
	this.alpha=alpha;
};