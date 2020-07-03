class Jogo {
    constructor(level){
        this.indiceMapaAtual = 0;
        this.level = level;
        this.tamanhoMusica = 227; // tempo total da musica em segundos
        this.countdown = this.tamanhoMusica;
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
        ], [0, 1, 1.5, 2, 3, 5, 8, 10, 20]);
        personagem = new Personagem(matrizPersonagem, 'imgPersonagem', 0, 15, 2*196,2*128,196,128);
        pontuacao = new Pontuacao();
        vida = new Vida(this.level.configuracoes.vidaMaxima, this.level.configuracoes.vidaInicial);

        const cachorro = new Inimigo(matrizInimigo, 'cachorro', width + 52, 15, 67*2*2, 32*2*2, 67, 32, 12*2);
        const wizard = new Inimigo(matrizInimigoGrande, 'wizard', width + 300, 0, 120*2, 120*2, 80, 80, 18*2);
        inimigos.push(cachorro, wizard);
    }

    draw() {
        if (this.countdown <= 0) {
            this.ganhou();
        }

        personagem.anima();
        personagem.aplicaGravidade();
        cenario.exibe();
        cenario.move();
        pontuacao.exibe();
        pontuacao.pontuar();

        // countdown
        text(parseInt(this.countdown / 60) + ":" + parseInt(this.countdown % 60), width / 2, 50);

        const linhaAtual = this.level.mapa[this.indiceMapaAtual];
        const inimigo = inimigos[linhaAtual.inimigo];
        const isInimigoForaDaTela = inimigo.x < -inimigo.largura;
        
        inimigo.velocidade = linhaAtual.velocidade;
        inimigo.exibe();
        inimigo.move();

        vida.draw();
        
        if (isInimigoForaDaTela) {
            this.indiceMapaAtual++;
            inimigo.aparece();
            if (this.indiceMapaAtual >= this.level.mapa.length) {
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
        personagem.exibe();
    }

    ganhou() {
        // parabens! voce ganhou o jogo, mas 
        // como somos justos com a lenda e a poesia de Goethe,
        // infelizmente seu filho não sobreviveu. :(
        noLoop();
    }

    recomecar() {
        cenario.reset();
        pontuacao.reset();
        vida.reset();
        this.iniciaCountdown();
        inimigos.forEach(i => {
            i.reset();
        });
    }

    iniciaTrilhaSonora() {
        Assets.get('somTrilha').playMode('restart');
        Assets.get('somTrilha').play();
    }

    iniciaCountdown() {
        this.countdown = this.tamanhoMusica;
        var that = this;
        var idInterval = setInterval(function () {
            that.countdown--;
            if (that.countdown === 0) {
                clearInterval(idInterval);
            }
        }, 1000); // a cada segundo
    }
}