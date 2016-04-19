
//飞机超类
function Plane(drection){
	this.rank=1;
	this.life=50;
	this.drection=drection;
	this.launch=1;
}
Plane.prototype.Fire=function(){

}
//敌机类
function BossPlane(x,y){
	this.x=x;
	this.y=y;
	this.img=new Image();
	this.img.src="../Img/ships.png";
}
BossPlane.prototype=new Plane("Down");
//自己的战机
function MyPlane(x,y,option){
	this.x=x;
	this.y=y;
	this.option=option;
}
MyPlane.prototype=new Plane("Up");

//子弹类
function Bullet(x,y,drection,endx,endy){
	this.x=x;
	this.y=y;
	this.drection=drection;
	this.endy=endy;
	this.endx=endx;
}
Bullet.prototype.start=function(){
	var _serf=this;
	function move(){
		switch(_serf.drection){
			case "left":
				_serf.x-=16;
				if(_serf.x<_serf.endx){
					clearInterval(t);
				}
				break;
			case "right":
				_serf.x+=16;
				if(_serf.x>_serf.endx){
					clearInterval(t);
				}
				break;
		}
	}
	var t=setInterval(move,60);
}