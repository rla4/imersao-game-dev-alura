class Jogo {
    constructor(){
        this.indiceMapaAtual = 0;
        this.mapa = Assets.get('level').mapa;
    }

    setup(){
        cenario = new Cenario(
            ['cenarioLayer1',
                'cenarioLayer2',
                'cenarioLayer3',
                'cenarioLayer4',
            'cenarioLayer5',
            'cenarioLayer6',
            'cenarioLayer7',
            'cenarioLayer8',
            'cenarioLayer9'
        ], 
            [0, 1, 1.5, 2, 3, 5, 8, 10, 15]);
        personagem = new Personagem(matrizPersonagem, 'imgPersonagem', 0, 15, 2*196,2*128,196,128);
        pontuacao = new Pontuacao();
        vida = new Vida(3, 3);

        const cachorro = new Inimigo(matrizInimigo, 'cachorro', width + 52, 15, 67*2*2, 32*2*2, 67, 32, 12*2);
        const wizard = new Inimigo(matrizInimigoGrande, 'wizard', width + 300, 0, 120*2, 120*2, 80, 80, 18*2);
        inimigos.push(cachorro, wizard);
    }

    draw() {
        personagem.anima();
        personagem.aplicaGravidade();
        cenario.exibe();
        cenario.move();
        pontuacao.exibe();
        pontuacao.pontuar();
        
        const linhaAtual = this.mapa[this.indiceMapaAtual];
        const inimigo = inimigos[linhaAtual.inimigo];
        const isInimigoForaDaTela = inimigo.x < -inimigo.largura;
        
        inimigo.velocidade = linhaAtual.velocidade;
        inimigo.exibe();
        inimigo.move();

        vida.draw();
        
        if (isInimigoForaDaTela) {
            this.indiceMapaAtual++;
            inimigo.aparece();
            if (this.indiceMapaAtual >= this.mapa.length) {
                this.indiceMapaAtual = 0;
            }
        }
        
        if (personagem.estaColidindo(inimigo)) {
            vida.morreu();
            personagem.ficaInvencivel();
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
        vida.reset();
        inimigos.forEach(i => {
            i.reset();
        });
    }

    iniciaTrilhaSonora() {
        Assets.get('somTrilha').playMode('restart');
        Assets.get('somTrilha').play();
    }
}