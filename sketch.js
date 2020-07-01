function preload() {
  Assets.preload();
}

function setup() {
  pixelDensity(1);
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

  let fps = frameRate();
  fill(255);
  stroke(0);
  text("FPS: " + fps.toFixed(2), width - 60, height - 10);
}

function mudaEstadoJogo(cena) {
  cenaAtual = cena;
}