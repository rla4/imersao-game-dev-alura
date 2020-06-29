class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, Assets.get(imagem), x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.variacaoY = variacaoY;
    this.gravidade = 5;
    this.velocidadePulo = 0;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.maxPulos = 2;
    this.pulosAtivos = 0;
    this.alturaDoPulo = -50;
  }
  
  pula(){
    this.pulosAtivos++;
    
    if (this.pulosAtivos <= this.maxPulos) {
      this.velocidadePulo = this.alturaDoPulo;
      Assets.get('somPulo').play();
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.velocidadePulo = 0;
      // cabou o pulo
      this.pulosAtivos = 0;
    }
  }
  
  estaColidindo(inimigo) {
    const precisao = 0.6;
    
    noFill();
    rect(this.x + (precisao/4 * this.largura), 
      this.y + (precisao/4 * this.altura), 
      this.largura * precisao, 
      this.altura * precisao);
    rect(inimigo.x + (precisao/4 * inimigo.largura), 
      inimigo.y + (precisao/4 * inimigo.altura), 
      inimigo.largura * precisao, 
      inimigo.altura * precisao);
    return collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao, 
      inimigo.x, 
      inimigo.y, 
      inimigo.largura * precisao, 
      inimigo.altura * precisao);
  }
}