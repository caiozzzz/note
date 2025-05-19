var fs = require ('fs');
var leituraAsync = function (arquivo){
    var inicio = new Date().getTime();
    console.log("Fazendo Leitura síncrona");
    fs.readFileSync(arquivo)
    var fim = new Date().getTime();
    console.log("Bloqueio síncrono: "+(fim - inicio)+ "ms")
};
module.exports = leituraAsync;
