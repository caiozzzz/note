var http = require('http');
var fs = require('fs');
var leituraAsync = require ('./leitura_Async.js');
var leituraSync = require ('./leitura_sync.js');
var arquivo = "./node.exe";
var stream = fs.createWriteStream(arquivo);
var download = "http://nodejs.org/dist/latest/node-v24.0.0-x64.msi";
http.get ( download,function (res) {
    console.log("Fazendo download do Node js");
    res.on('data',function (data){
        stream.write(data);
        
    

    });
    res.on('end', function(){
        stream.end();
        console.log ("Download Finalizado!");
        leituraSync(arquivo);
        leituraAsync(arquivo);
    });


});
