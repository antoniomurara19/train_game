// classe base
class Object{
    constructor(x,y,w,h,atrib){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.atrib = atrib
    }

    dir = 0

    des_obj(){
        des.beginPath()
        des.lineWidth = '1'
        des.fillStyle = this.atrib
        des.strokeStyle = 'white'
        des.moveTo(this.x,this.y);
        des.lineTo(this.x,this.y-80);
        des.lineTo(this.x-80,this.y+80);
        des.closePath()
        des.stroke()
        des.fill()
    }

    move(){
        this.x += this.dir
    }
}

// classe carro

// classe estrada

// classe texto