class Jogo {
    constructor(){
        this.inimigoAtual = 0;
    }

    setup(){
        cenario = new Cenario(['cenario','cenarioNoite'], 20);
        personagem = new Personagem(matrizPersonagem, 'imgPersonagem', 0, 15, 2*196,2*128,196,128);
        pontuacao = new Pontuacao();

        const cachorro = new Inimigo(matrizInimigo, 'cachorro', width + 52, 15, 67*2*2, 32*2*2, 67, 32, 12*2, 300);
        const wizard = new Inimigo(matrizInimigoGrande, 'wizard', width + 300, 0, 120*2, 120*2, 80, 80, 18*2, 200);
        inimigos.push(cachorro, wizard);
    }

    draw() {
        cenario.move();
        personagem.anima();
        personagem.aplicaGravidade();
        cenario.exibe();
        pontuacao.exibe();
        pontuacao.pontuar();
        
        const inimigo = inimigos[this.inimigoAtual];
        const isInimigoForaDaTela = inimigo.x < -inimigo.largura;
        
        inimigo.exibe();
        inimigo.move();
        
        if (isInimigoForaDaTela) {
            this.inimigoAtual++;
            if (this.inimigoAtual >= inimigos.length) {
            this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(25,40));
        }
        
        if (personagem.estaColidindo(inimigo)) {
            mudaEstadoJogo('gameOver');
        }
        personagem.exibe();
    }

    keyPressed(key) {
        if (key === 'ArrowUp'){
            personagem.pula();
        }
    }

    gameOver() {
        pontuacao.exibe();
    }

    recomecar() {
        cenario.reset();
        pontuacao.reset();
        inimigos.forEach(i => {
            i.reset();
        });
    }

    iniciaTrilhaSonora() {
        Assets.get('somTrilha').playMode('restart');
        Assets.get('somTrilha').play();
    }
}