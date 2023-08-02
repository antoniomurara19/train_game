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
        des.lineTo(this.x+15,this.y-5)
        des.lineTo(this.x-15,this.y-5)
        des.lineTo(this.x-15,this.y-15)
        des.lineTo(this.x+65,this.y-15)
        des.lineTo(this.x+65,this.y-5)
        des.lineTo(this.x+35,this.y-5)
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

        if(this.x <= 16){
            thix.x = 16
        }else if(this.x >= 550){
            thix.x = 550
        }
    }

    des_obj(){
        let img = new Image()
        img.src = this.atrib
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }
}

class Carro1 extends Object{
    move(){
        this.y += 3
        if(this.y >= 610){
            this.y = -100
            this.x = (Math.random() * (545 - 2 + 1) + 2)
        }
    }
    des_obj(){
        let img = new Image()
        img.src = this.atrib
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }
}

class Carro2 extends Object{
    move(){
        this.y += 3
        if(this.y >= 610){
            this.y = -100
            this.x = (Math.random() * (545 - 2 + 1) + 2)
        }
    }
    des_obj(){
        let img = new Image()
        img.src = this.atrib
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }
}

class Trilho_esq extends Object{
    des_obj(){
        des.beginPath()
        des.lineWidth = '5'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.rect(this.x,this.y,this.w,this.h);
        des.closePath()
        des.stroke()
        des.fill()
    }
}

class Trilho_dir extends Object{
    des_obj(){
        des.beginPath()
        des.lineWidth = '5'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.rect(this.x,this.y,this.w,this.h);
        des.closePath()
        des.stroke()
        des.fill()
    }
}

class Pedais extends Object{
    des_obj(){
        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-550)
        des.lineTo(this.x+70,this.y-550)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-500)
        des.lineTo(this.x+70,this.y-500)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-450)
        des.lineTo(this.x+70,this.y-450)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-400)
        des.lineTo(this.x+70,this.y-400)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-350)
        des.lineTo(this.x+70,this.y-350)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-300)
        des.lineTo(this.x+70,this.y-300)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-250)
        des.lineTo(this.x+70,this.y-250)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-200)
        des.lineTo(this.x+70,this.y-200)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-150)
        des.lineTo(this.x+70,this.y-150)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-100)
        des.lineTo(this.x+70,this.y-100)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y-50)
        des.lineTo(this.x+70,this.y-50)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y)
        des.lineTo(this.x+70,this.y)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+50)
        des.lineTo(this.x+70,this.y+50)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+100)
        des.lineTo(this.x+70,this.y+100)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+150)
        des.lineTo(this.x+70,this.y+150)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+200)
        des.lineTo(this.x+70,this.y+200)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+250)
        des.lineTo(this.x+70,this.y+250)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+300)
        des.lineTo(this.x+70,this.y+300)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+350)
        des.lineTo(this.x+70,this.y+350)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+400)
        des.lineTo(this.x+70,this.y+400)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+450)
        des.lineTo(this.x+70,this.y+450)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+500)
        des.lineTo(this.x+70,this.y+500)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+550)
        des.lineTo(this.x+70,this.y+550)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+600)
        des.lineTo(this.x+70,this.y+600)
        des.closePath()
        des.stroke()
        des.fill()

        des.beginPath()
        des.lineWidth = '10'
        des.fillStyle = this.atrib
        des.strokeStyle = 'black'
        des.moveTo(this.x,this.y+650)
        des.lineTo(this.x+70,this.y+650)
        des.closePath()
        des.stroke()
        des.fill()
    }

    move(){
        this.y += 5
        if(this.y >= 610){
            this.y = -100
        }
    }
}

class Arvore extends Object{
    move(){
        this.y += 5
        if(this.y >= 610){
            this.y = -100
        }
    }

    des_obj(){
        let img = new Image()
            img.src = this.atrib
            des.drawImage(img,this.x,this.y,this.w,this.h)
    }
}
    
// classe estrada

// classe texto

class Text{
    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)
    }
}