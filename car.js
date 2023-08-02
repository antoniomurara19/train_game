// leitura canvas
let des = document.getElementById('des').getContext('2d')
// definição das instâncias
const train = new Train(260, 500, 150, 120,'./assets/img/tomas.png')
const carro1 = new Carro1(120, 100, 80, 120,'./assets/img/scooby_doo.png')
const carro2 = new Carro2(280, 200, 80, 120,'./assets/img/vesuvio.png')
const trilho_esq = new Trilho_esq(250, 0, 8, 600,'gray')
const trilho_dir = new Trilho_dir(310, 0, 8, 600,'gray')
const pedais = new Pedais(250, 20, 10, 60,'gray')
const arvore = new Arvore(220, 50, 1, 1,'./assets/img/tree.png')

// definição dos textos
const t1 = new Text()

// definição das instâncias do som
const som1 = new Audio('./assets/audio/nature.mp3')
som1.volume = 1.0
som1.loop = true

// controles de movimentação

document.addEventListener('keydown', (e)=>{
    if(e.key === 'a'){
        train.x -= 13
    }if(e.key === 'd'){
        train.x += 13
    }
    som1.play()
})


// game over

// pontos

// colisao

// desenha
function desenha(){
    t1.des_text('Pontos : ', 10, 60, '#000', 'bold 50px system-ui')
    trilho_esq.des_obj()
    trilho_dir.des_obj()
    arvore.des_obj()
    pedais.des_obj()
    carro1.des_obj()
    carro2.des_obj()
    train.des_obj()
}

// atualiza
function atualiza(){
    pedais.move()
    arvore.move()
    train.move()
    carro1.move()
    carro2.move()
}

// principal
function main(){
    des.clearRect(0,0,600,600)
    atualiza()
    desenha()
    requestAnimationFrame(main)
}

main()