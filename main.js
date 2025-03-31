let des = document.getElementById('des').getContext('2d');

let car = new Car(200, 600, 70, 70, './img/aviaosemfundo.png');
let car2 = new CarIn(200, -200, 60, 40, './img/nuvem.png');
let car3 = new CarIn(100, -170, 60,40, './img/nuvem.png');
let car4 = new CarIn(50, -470, 60, 40, './img/nuvem.png');
let car5 = new CarIn(300, -300, 60, 40, './img/nuvem.png');

let t1 = new Text();
let t2 = new Text();
let t3 = new Text();
let t4 = new Text();
let t5 = new Text();
let t6 = new Text();
let t7 = new Text();
let t8 = new Text();

let musica = new Audio('./img/musica.mp3')
let vida= new Audio('./img/vida.mp3')
let gameover = new Audio('./img/gameover.mp3')
musica.loop = true
musica.volume = 0.5



let jogar = true;
let fase = 1; 
let tela_inicial = true; // Flag para verificar se estamos na tela inicial

document.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
        car.dir -= 5;
    } else if (e.key === 'd') {
        car.dir += 5;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'a') {
        car.dir = 0;
    } else if (e.key === 'd') {
        car.dir = 0;
    }
});

document.addEventListener('keypress', (e) => {
    console.log("tecla =", e.key);
});

document.addEventListener('keydown', (e) => {
    if (tela_inicial) {
        tela_inicial = false; // Ao pressionar uma tecla, desativa a tela inicial
        jogar = true; // Começa o jogo
    musica.play()
    }
})

function game_over() {
    if (car.vida <= 0) {
        jogar = false;
        musica.pause()
        gameover.play()
    }
}

function colisao() {
    if (car.colid(car2)) {
        car.vida -= 1;
        car2.recomeca();
        vida.play()
    } else if (car.colid(car3)) {
        car.vida -= 1;
        car3.recomeca();
        vida.play()
    } else if (car.colid(car4)) {
        car.vida -= 1;
        car4.recomeca();
        vida.play()
    } else if (car.colid(car5)) {
        car.vida -= 1;
        car5.recomeca();
        vida.play()
    }
}

function pontos() {
    if (car.point(car2)) {
        car.pts += 1;
    } else if (car.point(car3)) {
        car.pts += 1;
    } else if (car.point(car4)) {
        car.pts += 1;
    } else if (car.point(car5)) {
        car.pts += 1;
    }

}

function faseChecar() {
   fase = 1
    if (car.pts >= 50) {
        fase = 2
    }
    if (car.pts >= 80) {
        fase = 3
        console.log('fase 3')
    }
}
function atualiza() {
    faseChecar();
    if (jogar) {
        car.mov(fase);
        car2.mov(fase);
        car3.mov(fase);
        car4.mov(fase);
        car5.mov(fase);
        pontos();
        colisao();
        game_over();
    }
}

function desenha() {
    t1.des_text('Pontos: ', 360, 24, '#27657a', '26px Times');
    t2.des_text(car.pts, 442, 24, '#27657a', '26px Times');
    t3.des_text('Vida: ', 40, 24, '#27657a', '26px Times');
    t4.des_text(car.vida, 100, 24, '#27657a', '26px Times');
    t6.des_text('Fase: ', 200, 24, '#27657a', '26px Times');
    t7.des_text(fase, 260, 24, '#27657a', '26px Times');
    if (jogar) {
        car.des_car_img();
        car2.des_car_img();
        car3.des_car_img();
        car4.des_car_img();
        car5.des_car_img();
    } else {
        t5.des_text('Game Over', 150, 340, '#27657a', '46px Times');
        t8.des_text('Pressione F5 para jogar novamente:', 70, 400, '#27657a', '26px Times');
    }
    if (tela_inicial) {
        des.fillStyle = 'white';
        des.fillRect(0, 0, 500, 700);
        t5.des_text('Aviator', 190, 250, '#27657a', '40px Times');
        t5.des_text('Pressione qualquer tecla para começar', 100, 320, '#27657a', '20px Times');
    }
}

function main() {
    des.clearRect(0, 0, 500, 700);
    atualiza();
    desenha();
    requestAnimationFrame(main);
}

main();

