// classe base
class Object{
    constructor(x,y,w,h,atrib){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.atrib = atrib
    }

    des_obj(){

        // === CHAMINÉ ===

        des.beginPath()
        des.lineWidth = '5'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.rect(this.x-13,this.y-30,this.w-40,this.h-15);
        des.closePath()
        des.stroke()
        des.fill()

        // === FUMAÇA ===

        des.beginPath()
        des.lineWidth = '2'
        des.fillStyle = 'gray'
        des.strokeStyle = 'white'
        des.moveTo(this.x-10,this.y-45)
        des.arc(this.x-10,this.y-45, 9, 0, Math.PI*2, true)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '2'
        des.fillStyle = 'gray'
        des.strokeStyle = 'white'
        des.moveTo(this.x-20,this.y-60)
        des.arc(this.x-20,this.y-60, 9, 0, Math.PI*2, true)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '2'
        des.fillStyle = 'gray'
        des.strokeStyle = 'white'
        des.moveTo(this.x-35,this.y-75)
        des.arc(this.x-35,this.y-75, 9, 0, Math.PI*2, true)
        des.closePath()
        des.stroke()
        des.fill()

        // === PARACHOQUE ===

        des.beginPath()
        des.lineWidth = '5'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x+15,this.y-2)
        des.lineTo(this.x+15,this.y-15)
        des.lineTo(this.x-15,this.y-15)
        des.lineTo(this.x-15,this.y-25)
        des.lineTo(this.x+65,this.y-25)
        des.lineTo(this.x+65,this.y-15)
        des.lineTo(this.x+35,this.y-15)
        des.lineTo(this.x+35,this.y-2)
        des.closePath()
        des.stroke()
        des.fill()

        //=== RODAS ===

        des.beginPath()
        des.lineWidth = '5'
        des.fillStyle = 'white'
        des.strokeStyle = 'black'
        des.rect(this.x+49,this.y+43,this.w-40,this.h-20);
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '5'
        des.fillStyle = 'white'
        des.strokeStyle = 'black'
        des.rect(this.x+47,this.y+5,this.w-40,this.h-20);
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '5'
        des.fillStyle = 'white'
        des.strokeStyle = 'black'
        des.rect(this.x-9,this.y+44,this.w-40,this.h-20);
        des.closePath()
        des.stroke()
        des.fill()
        
        des.beginPath()
        des.lineWidth = '5'
        des.fillStyle = 'white'
        des.strokeStyle = 'black'
        des.rect(this.x-7,this.y+5,this.w-40,this.h-20);
        des.closePath()
        des.stroke()
        des.fill()

        // === CORPO QUADRADO ===

        des.beginPath()
        des.lineWidth = '5'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.rect(this.x,this.y,this.w,this.h);
        des.closePath()
        des.stroke()
        des.fill()

        // === BUNDA TRAPÉZIO ===

        des.beginPath()
        des.lineWidth = '5'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+30)
        des.lineTo(this.x-10,this.y+70)
        des.lineTo(this.x+60,this.y+70)
        des.lineTo(this.x+50,this.y+30)
        des.closePath()
        des.stroke()
        des.fill()
    }
}

// classe carro

class Train extends Object{
    dir = 0
    move(){
        this.x += this.dir
    }
}

class Carro1 extends Object{
    move(){
        this.y += 1
        if(this.y >= 610){
            this.y = -100
            this.x = (Math.random() * (545 - 2 + 1) + 2)
        }
    }
}

class Carro2 extends Object{
    move(){
        this.y += 1
        if(this.y >= 610){
            this.y = -100
            this.x = (Math.random() * (545 - 2 + 1) + 2)
        }
    }
}



// classe estrada

// classe texto