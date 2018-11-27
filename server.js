const express = require('express');
const MongoClient = require('mongodb').MongoClient;


const app = express();

var infobanco="";

//abrindo conexão com banco 
var url = 'mongodb://localhost:27017';

app.use(express.static('public'))

//app.use('/', express.static(__dirname + '/public'));

app.get('/api', function(req,res){
    MongoClient.connect(url, (err, client) => {
        var db = client.db('sitefinal');
        db.collection('artistas').find({}).toArray(function(err, docs) {
        if(docs!=null){
            infobanco=docs;
        }
        // imprime resultados somente teste
        //docs.forEach(function(doc) {
        //    console.log(doc);
        //});
        });

        res.send(infobanco);
        // fecha conexão
        client.close();  
    });
});
/*

app.get('/album', function(req, res) {
    res.redirect('play.html');
 });
*/

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
    console.log("ctrl+c to stop");
  });