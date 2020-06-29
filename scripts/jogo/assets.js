const assets = [];

class Assets {
  static adicionar(nome, asset){
    assets[nome] = asset;
  }
  
  static get(nome) {
    return assets[nome];
  }
}