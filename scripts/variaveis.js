let jogo;
let menuInicial;
let gameOver;
let cenario;
let personagem;
let pontuacao;
let cenaAtual;
let cenas;
let vida;

const matrizPersonagem = [
[0,0],[0,0],[196,0],[196,0],[196*2,0],[196*2,0],[196*3,0],[196*3,0],[196*4,0],[196*4,0],[196*5,0],[196*5,0],
[196*6,0],[196*6,0],[196*7,0],[196*7,0]
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
  [0,0],[0,0],
  [80,0],[80,0],
  [160,0],[160,0],
  [0,80],[0,80],
  [80,80],[80,80],
  [160,80],  [160,80],
  [0, 160],[0, 160],
  [80, 160],[80, 160],
  [160,160],[160,160],
];

const inimigos = [];