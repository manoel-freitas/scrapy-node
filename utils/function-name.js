if (Function.prototype.nome === undefined) {
  //Propriedade customizada que retorna o nome da função
  Object.defineProperty(Function.prototype, 'nome', {
    get: function () {
      return /class (\w+[^])/.exec(this + "")[1];
    }
  });
}