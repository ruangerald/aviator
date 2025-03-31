class Obj {
    constructor(x,  y,w, h, a) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    des_obj() {
        des.fillStyle = this.a
        des.fillRect(this.x, this.y, this.w, this.h, this.a)
    }

}
//AVIAO -------------------------
class Car extends Obj {
    dir = 0 
    pts = 0
    vida = 5
    frame = 1
    tempo = 0

    mov() {
        this.x += this.dir
        if (this.x <= 2) {
            this.x = 2
        } else if (this.x >= 400) {
            this.x = 400
        }
    }
    des_car_img() {
        let img = new Image()
        img.src = this.a
        des.drawImage(img, this.x, this.y, this.w, this.h)
    }
    point(objeto){
        if((objeto.y>=680)&&(objeto.y <= 684)){
            return true
        }else{
            false
        }
    }
        
    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
          (this.x + this.w > objeto.x)&&
          (this.y < objeto.y + objeto.h)&&
          (this.y + this.h > objeto.y)){
            return true
        }else{
            false
        }
    }
}

// NUVEM ----------------------------------------
class CarIn extends Obj {
    mov(fase) {
        if (fase === 1) {
            this.y += 3
        } else if(fase === 2) {
            this.y += 5
        } else if (fase === 3) {
            this.y += 7
        }
        
        if (this.y >= 760) {
            this.recomeca();
        }
    }
    recomeca(){
        this.y = -100
        this.x = Math.floor(Math.random() * ((416 - 2 + 1) + 2)) // quando o aviao sair da tela
    }
    // Adicionando o método des_car_img() para a classe CarIn também
    des_car_img() {
        let img = new Image();
        img.src = this.a;
        img.onload = () => {
            des.drawImage(img, this.x, this.y, this.w, this.h);
        };
        des.drawImage(img, this.x, this.y, this.w, this.h);
    }
}

class Text{
    des_text(text,x,y,cor,font){
        des.fillStyle = cor
        des.lineWidth = '5'
        des.font = font
        des.fillText(text,x,y)
    }
}

