$(document).ready(function(){
    var url = window.location.href; //retorna a url da página
    //alert(url);
    var res = url.split('?'); //tenta localizar o ? 
    if (res[1] === undefined) { 
        //alert('página sem parâmetros.'); 
    } 
    if (res[1] !== undefined) {
        var parametros = res[1].split('%20'); //tenta localizar os & (pode haver mais de 1)
        //alert('Parametros da url:\n' + parametros); 
        var apelido = parametros[0].split('=')[1]+" "+parametros[1];
        $.get("http://localhost:8081/api", function(data){
            data.forEach(function(item){
                if(apelido==item.apelido)
                {
                    var caminho=item.albums[0].caminho;
                    $('#localcapa').append(
                        '<div class="col-4">'+
                            '<img id="capaalbum"src="'+caminho+item.albums[0].capa+'" width="200" height="250">'+
                        '</div>'+
                        '<div class="col-4">'+
                            '<span id="nomealbum" style="font-size: 150%;">'+item.albums[0].album+'</span><br>'+
                            '<span id="ano" style="font-size: 150%;">'+item.albums[0].ano+'</span><br>'+
                            '<span id="nomeartista" style="font-size: 150%;">'+item.albums[0].artista+'</span><br>'+
                        '</div>'+
                        '<div class="4">'+
                        '</div>'
                    );
                    //alert(caminho);
                    item.albums[0].musicas.forEach(function(musica){                          
                        $('#listamusicas').append(
                            '<li>'+musica.musica+'&nbsp&nbsp&nbsp&nbsp<input id="entrada" type="button" onclick="tocar(\''+caminho+musica.arquivo+'\')" class="botao shrink"></li><br>'
                        );
                    })
                    //alert(JSON.stringify(item));
                }
            });
        })
    } 
})