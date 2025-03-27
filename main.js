let des = document.getElementById('des').getContext('2d')

let car = new Car(150,600,100,100,'./img/aviaosemfundo.png');
let car2 = new CarIn(200,-200,80,80,'./img/nuvem.png');
let car3 = new CarIn(100,-170,80,80,'./img/nuvem.png');
let car4 = new CarIn(50,-470,80,80,'./img/nuvem.png');
let car5 = new CarIn(300,-300,80,80,'./img/nuvem.png');

let t1 = new Text()
let t2 = new Text()
let t3 = new Text()
let t4 = new Text()
let t5 = new Text()

jogar = true
document.addEventListener('keydown', (e)=>{
    if(e.key === 'a'){
        car.dir -= 5
    }else if(e.key === 'd'){
        car.dir += 5
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        car.dir = 0
    }else if(e.key === 'd'){
        car.dir = 0
    }
})

document.addEventListener('keypress', (e)=>{
    console.log("tecla =", e.key)
})
function game_over(){
    if(car.vida <=0){
        jogar = false
        
    }
}
function colisao(){
    if(car.colid(car2)){
        car.vida -= 1
        car2.recomeca()
    }else if(car.colid(car3)){
        car.vida -= 1
        car3.recomeca()
    }else if(car.colid(car4)){
        car.vida -= 1
        car4.recomeca()
    }else if(car.colid(car5)){
        car.vida -= 1
        car5.recomeca()
    } 
}
function pontos(){
    if(car.point(car2)){
        car.pts +=2
    }else if(car.point(car3)){
        car.pts += 2
    }
    else if(car.point(car4)){
        car.pts += 2
    }
    else if(car.point(car5)){
        car.pts += 2
    }
}
// colisao(){

// }
function atualiza(){
    if(jogar){
    car.mov()
    car2.mov()
    car3.mov()
    car4.mov()
    car5.mov()
    pontos()
    colisao()
    game_over()
}else if(car.point >= 50){

}
}


function desenha(){
    t1.des_text('Pontos: ',360,24,'yellow','26px Times')
    t2.des_text(car.pts,442,24,'yellow','26px Times')
    t3.des_text('Vida: ',40,24,'yellow','26px Times')
    t4.des_text(car.vida,100,24,'yellow','26px Times')
   
    if(jogar){
        car.des_car_img()
        car2.des_car_img()
        car3.des_car_img()
        car4.des_car_img()
        car5.des_car_img()
    }else{
        t5.des_text('Game Over',120,340,'yellow','46px Times')
    }
}

function main(){
    des.clearRect(0,0,500,700)
    atualiza()
    desenha()
    requestAnimationFrame(main)
}

main()