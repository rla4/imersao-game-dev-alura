class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay){
    super(matriz, Assets.get(imagem), x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.velocidade = velocidade;
    this.delay = delay;
  }
  
  move(){
    this.x = this.x - this.velocidade;
    if (this.x < -(this.largura + this.delay)) {
      this.x = width;
    }
  }
  
  reset() {
    super.reset();
    this.x = width + this.largura;
  }
}