class GameOver {
    constructor(jogo){
        this.jogo = jogo;
    }

    keyPressed(key) {
        if (key === 'Enter') {
            this.jogo.recomecar();
            mudaEstadoJogo('jogo');
            loop();
        }
    }

    draw() {
        background('black');
        image(Assets.get('game-over'), (width - 700)/2, 0, 700, 537);

        // necessario para re-exibir a pontuacao atual e o personagem
        this.jogo.gameOver();
        noLoop();
    }
}