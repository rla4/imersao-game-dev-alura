class Vida {
    constructor(vidaMaxima, vidaInicial){
        this.vidaInicial = vidaInicial;
        this.vidaMaxima = vidaMaxima;
        this.vidaAtual = vidaInicial;
        this.imagem = Assets.get('vida');
        this.somHit = Assets.get('somHit');
    }

    draw() {
        let largura = 60;
        for (let i = 0; i < this.vidaAtual; i++) {
            image(this.imagem, 10 + largura * i, 10, largura, 60);
        }
    }

    ganhaVida(){
        if (this.vidaAtual < this.vidaMaxima) {
            this.vidaAtual++;
        }
    }

    morreu() {
        this.vidaAtual--;
        this.somHit.play();
        if (this.vidaAtual <= 0) {
            mudaEstadoJogo('gameOver');
        }
    }

    reset() {
        this.vidaAtual = this.vidaInicial;
    }
}