class Cenario {
  constructor(imagens, velocidades) {
    this.layers = [];

    for (let i = 0; i < imagens.length; i++) {
      this.layers.push(new LayerCenario(Assets.get(imagens[i]), velocidades[i]));
    }
  }
  
  exibe() {
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].exibe();
    }
  }
  
  move() {
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].move();
    }
  }

  reset() {
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].reset();
    }
  }
}

class LayerCenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }

  exibe(){
    image(this.imagem, this.x1, 0, width, height);
    if (this.velocidade > 0) { // pequena otimizacao
      image(this.imagem, this.x2, 0, width, height);
    }
  }

  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;
    
    if (this.x1 <= -width + this.velocidade) {
      this.x1 = width;
    }
    if (this.x2 <= -width + this.velocidade) {
      this.x2 = width;
    }
  }

  reset() {
    this.x1 = 0;
    this.x2 = width;
  }
}