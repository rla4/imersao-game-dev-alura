let cenario;
let personagem;
let pontuacao;

let isGameOver = false;

const matrizPersonagem = [
[0,0],[196,0],[196*2,0],[196*3,0],[196*4,0],[196*5,0],[196*6,0],[196*7,0]
];
const matrizInimigo = [
  [0, 0],
  [67, 0],
  [134, 0],
  [201, 0],
  [268, 0],
  [0, 32],
  [67, 32],
  [134, 32],
  [201, 32],
  [268, 32],
];
const matrizInimigoGrande = [
  [0,0],
  [80,0],
  [160,0],
  [0,80],
  [80,80],
  [160,80],
  [0, 160],
  [80, 160],
  [160,160],
];

const inimigos = [];

function preload() {
  Assets.adicionar('cenario', loadImage('imagens/cenario/floresta.png'));
  Assets.adicionar('cenarioNoite', loadImage('imagens/cenario/floresta_noite.png'));
  Assets.adicionar('imgPersonagem', loadImage('imagens/personagem/horse_running.png'));
  Assets.adicionar('somTrilha', loadSound('sons/erlkonig.mp3'));
  Assets.adicionar('somPulo', loadSound('sons/somPulo.mp3'));
  Assets.adicionar('game-start', loadImage('imagens/assets/erlkonig_start.jpg'));
  Assets.adicionar('cachorro', loadImage('imagens/inimigos/cachorro.png'));
  Assets.adicionar('wizard', loadImage('imagens/inimigos/wizard.png'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setFrameRate(40);

  cenario = new Cenario(['cenario','cenarioNoite'], 10);
  personagem = new Personagem(matrizPersonagem, 'imgPersonagem', 0, 15, 196,128,196,128);
  pontuacao = new Pontuacao();

  const cachorro = new Inimigo(matrizInimigo, 'cachorro', width + 52, 15, 67*2, 32*2, 67, 32, 12, 300);
  const wizard = new Inimigo(matrizInimigoGrande, 'wizard', width + 300, 0, 120, 120, 80, 80, 8, 200);
  inimigos.push(cachorro, wizard);

  iniciaTrilhaSonora();
}

function keyPressed() {
  if (key === 'Enter' && isGameOver) {
    recomecar();
  } else if (!isGameOver) {
    if (key === 'ArrowUp'){
      personagem.pula();
    }
  } 
}

function draw() {
  cenario.move();
  personagem.anima();
  personagem.aplicaGravidade();
  cenario.exibe();
  pontuacao.exibe();
  pontuacao.pontuar();
  
  for(let i = 0; i < inimigos.length; i++) {
    inimigos[i].move();
    if (personagem.estaColidindo(inimigos[i])) {
      gameOver();
    }
    inimigos[i].exibe(); // sempre exibir o inimigo na tela de game over
  }
  personagem.exibe();
}

function gameOver() { 
  isGameOver = true;
  cenario.gameOver();
  noLoop();
}

function recomecar() {
  isGameOver = false;
  cenario.reset();
  pontuacao.reset();
  inimigos.forEach(i => {
    i.reset();
  });
  loop();
}

function iniciaTrilhaSonora() {
  Assets.get('somTrilha').playMode('restart');
  Assets.get('somTrilha').loop();
}