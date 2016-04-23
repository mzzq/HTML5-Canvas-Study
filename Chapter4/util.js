
//飞机超类
function Plane(drection){
	
	this.rank=1;
	this.life=50;
	this.drection=drection;
	this.launch=1;
	this.img=new Image();
	this.img.src="../Img/ships.png";
}
Plane.prototype.Fire=function(){

}
//敌机类
function BossPlane(x,y){
	this.x=x;
	this.y=y;
	this.bullet=new Bullet(x,y,this.drection);
}
BossPlane.locationChange=function(){
	this.bullet.x=this.x;
	this.bullet.y=this.y;
}
BossPlane.prototype=new Plane("Down");
//自己的战机
function MyPlane(x,y,option){
	this.x=x;
	this.y=y;
	this.bullet=new Bullet(x,y,this.drection);
	this.option=option;
}
MyPlane.prototype=new Plane("Up");

//子弹类
function Bullet(x,y,drection){
	this.x=x;
	this.y=y;
	this.drection=drection;
	this.bullet=new Image();
	this.bullet.src="../Img/tanks_sheet.png";
}
Bullet.prototype.start=function(canvas,context){
	var _serf=this;
	function move(){
		switch(_serf.drection){
			case "Down":
				_serf.y+=32;
				if(_serf.y<canvas.height){
					// clearInterval(t);
				}
				break;
			case "Up":
				_serf.y-=32;
				if(_serf.y>0){
					// clearInterval(t);
				}
				break;
			default:
				_serf.y-=32;
				if(_serf.y>0){
					// clearInterval(t);
				}
		}
		context.drawImage(_serf.bullet,5*32,2*32,32,32,_serf.x+5,_serf.y+32,32,32);
		context.drawImage(_serf.bullet,5*32,2*32,32,32,_serf.x+27,_serf.y+32,32,32);
	}
	// var t=setInterval(move,30);
	move();
}