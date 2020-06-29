class Cenario {
  constructor(imagens, velocidade) {
    this.imagens = imagens.map(Assets.get);
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
    this.indiceImagemAtual = 0;
  }
  
  exibe() {
    image(this.imagens[this.indiceImagemAtual], this.x1, 0, width, height);
    image(this.imagens[this.indiceImagemAtual], this.x2, 0, width, height);
  }
  
  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;
    
    if (this.x1 < -width) {
      this.x1 = width;
    }
    if (this.x2 < -width) {
      this.x2 = width;
      
      // alternar cenario dia/noite
      this.indiceImagemAtual = this.indiceImagemAtual ^ 1;
    }
  }
  
  gameMenu() {
    image(Assets.get('game-menu'), 0, 0, width, height);
  }
  
  gameOver() {
    background('black');
    image(Assets.get('game-over'), (width - 700)/2, 0, 700, 537);
  }

  reset() {
    this.x1 = 0;
    this.x2 = width;
    this.indiceImagemAtual = 0;
  }
}