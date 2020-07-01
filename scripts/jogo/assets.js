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

    // parallax - 10 layers!
    Assets.adicionar('cenarioLayer10', loadImage('imagens/cenario/01_Mist.png'));
    Assets.adicionar('cenarioLayer9', loadImage('imagens/cenario/02_Bushes.png'));
    Assets.adicionar('cenarioLayer8', loadImage('imagens/cenario/03_Particles.png'));
    Assets.adicionar('cenarioLayer7', loadImage('imagens/cenario/04_Forest.png'));
    Assets.adicionar('cenarioLayer6', loadImage('imagens/cenario/05_Particles.png'));
    Assets.adicionar('cenarioLayer5', loadImage('imagens/cenario/06_Forest.png'));
    Assets.adicionar('cenarioLayer4', loadImage('imagens/cenario/07_Forest.png'));
    Assets.adicionar('cenarioLayer3', loadImage('imagens/cenario/08_Forest.png'));
    Assets.adicionar('cenarioLayer2', loadImage('imagens/cenario/09_Forest.png'));
    Assets.adicionar('cenarioLayer1', loadImage('imagens/cenario/10_Sky.png'));


    Assets.adicionar('imgPersonagem', loadImage('imagens/personagem/horse_running.png'));
    Assets.adicionar('somTrilha', loadSound('sons/erlkonig.mp3'));
    Assets.adicionar('somPulo', loadSound('sons/somPulo.mp3'));
    Assets.adicionar('somHit', loadSound('sons/hit.wav'));
    Assets.adicionar('game-over', loadImage('imagens/assets/erlkonig_start.jpg'));
    Assets.adicionar('game-menu', loadImage('imagens/assets/erlkonig.jpg'));
    Assets.adicionar('cachorro', loadImage('imagens/inimigos/cachorro.png'));
    Assets.adicionar('wizard', loadImage('imagens/inimigos/wizard.png'));
    Assets.adicionar('vida', loadImage('imagens/assets/vida.png'));
    Assets.adicionar('level', loadJSON('level/level.json'));
  }
}

class Sprite {
  constructor(imagem, alturaSprite, larguraSprite) {
    this.frameAtual = 0; 
  }
}