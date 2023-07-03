// leitura canvas
let des = document.getElementById('des').getContext('2d')
// definição das instâncias
const train = new Train(260, 500, 50, 30,'orange')
const carro1 = new Carro1(120, 100, 50, 30,'darkgreen')
const carro2 = new Carro2(280, 200, 50, 30,'pink')

// definição dos textos

// definição das instâncias do som

// controles de movimentação

document.addEventListener('keydown', (e)=>{
    if(e.key === 'a'){
        train.x -= 5
    }else if(e.key === 'd'){
        train.x += 5
    }
})


// game over

// pontos

// colisao

// desenha
function desenha(){
    carro1.des_obj()
    carro2.des_obj()
    train.des_obj()
}

// atualiza
function atualiza(){
    train.move()
    carro1.move()
    carro2.move()
}

// principal
function main(){
    des.clearRect(0,0,600,600)
    atualiza()
    desenha()
}

setInterval(main,10)
