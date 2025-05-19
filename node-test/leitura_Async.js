var fs = require ('fs');
var leituraAsync = function(arquivo){
    var inicio = new Date().getTime();
    console.log("Fazendo Leitura assíncrona");
    fs.readFile(arquivo,erro => {
        console.log(erro)
    })
    var fim = new Date().getTime();
    console.log("Bloqueio assíncrono: "+(fim - inicio)+ "ms")
    
};
module.exports = leituraAsync;
