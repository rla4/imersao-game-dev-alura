const assets = [];

class Assets {
  static adicionar(nome, asset){
    assets[nome] = asset;
  }
  
  static get(nome) {
    return assets[nome];
  }

  static preload() {
    Assets.adicionar('cenarioNoite', loadImage('imagens/cenario/floresta_noite.png'));
    Assets.adicionar('imgPersonagem', loadImage('imagens/personagem/horse_running.png'));
    Assets.adicionar('somTrilha', loadSound('sons/erlkonig.mp3'));
    Assets.adicionar('somPulo', loadSound('sons/somPulo.mp3'));
    Assets.adicionar('somHit', loadSound('sons/hit.wav'));
    Assets.adicionar('game-over', loadImage('imagens/assets/erlkonig_start.jpg'));
    Assets.adicionar('game-menu', loadImage('imagens/assets/erlkonig.jpg'));
    Assets.adicionar('cachorro', loadImage('imagens/inimigos/cachorro.png'));
    Assets.adicionar('wizard', loadImage('imagens/inimigos/wizard.png'));
    Assets.adicionar('vida', loadImage('imagens/assets/vida.png'));
  }
}

class Sprite {
  constructor(imagem, alturaSprite, larguraSprite) {
    this.frameAtual = 0; 
  }
}