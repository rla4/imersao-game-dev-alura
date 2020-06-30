function preload() {
  Assets.preload();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);

  jogo = new Jogo();
  menuInicial = new MenuInicial(jogo);
  gameOver = new GameOver(jogo);

  jogo.setup();

  cenas = {
    menuInicial,
    jogo,
    gameOver
  };
  cenaAtual = 'menuInicial';
}

function keyPressed() {
  cenas[cenaAtual].keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

function mudaEstadoJogo(cena) {
  cenaAtual = cena;
}