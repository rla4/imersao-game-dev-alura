class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade){
    super(matriz, Assets.get(imagem), x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.xInicial = x;
    this.velocidade = velocidade;
  }
  
  move(){
    this.x = this.x - this.velocidade;
  }

  aparece() {
    this.x = width;
  }
  
  reset() {
    super.reset();
    this.x = this.xInicial;
  }
}