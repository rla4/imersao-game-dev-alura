class Pontuacao {
    constructor(){
        this.valor = 0;
    }

    pontuar() {
        this.valor += 0.1;
    }

    exibe() {
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
        text(parseInt(this.valor), width - 30, 50);
    }
    
    reset() {
      this.valor = 0;
    }
}