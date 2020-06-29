class MenuInicial {
    constructor(jogo){
        this.imagem = Assets.get('game-menu');
        this.jogo = jogo;
    }

    draw(){
        image(this.imagem, 0, 0, width, height);
    }

    keyPressed(key) {
        if (key === 'Enter') {
            jogo.iniciaTrilhaSonora();
            mudaEstadoJogo('jogo');
        }
    }
}