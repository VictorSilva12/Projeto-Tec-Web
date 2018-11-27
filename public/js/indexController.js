const urlBase = "http://localhost:8081/";

function asd(id){
    var nome = document.getElementById(id).innerHTML; 
    //alert(nome);
    //
    //alert("json");
    $.get("http://localhost:8081/api", function(data){
        alert(JSON.stringify(data));
        //var json=JSON.stringify(data);
        //alert(json);
        /*
        var result = data.filter(function(d) {
            return (d.apelido.toUpperCase() === nome.toUpperCase());
          });
          alert("result[0].nome");
        */
    });
    
    
}

function pesquisar(id){
    alert(id);
    var nome=document.getElementById(id);
    alert(nome);
    $.get("http://localhost:8081/pesquisar_nome/"+nome+"", function(data){
        alert(data);
        /*
        $.ajax({
            type: "POST",
            data: {data: data},
            url: "index.html",
            success: function(msg)
            {
              $('.resposta').html(msg);
            }
         });
         */
    });
}
/*
function loadindex(){
	httpGetAsync(urlBase + "index.html",function(res){
        let i=0;
        res.forEach(function(item){
        for(let aux=0; aux<item.albums.length;aux++){
            $('#albumsLista').append(
                '<div class="album">'+
                    '<a id="capa'+i+'"href="">'+
                        '<div class="capatape">'+
                            '<img src="'+item.albums[aux].caminho+'front.jpg'+'" width="200" height="200">'+
                        '<div class="desc-album">'+
                            '<span id="album'+i+'">'+item.albums[aux].album+'</span>'+
                        '</div>'+
                        '<div class="desc-album">'+
                            '<span id="ano'+i+'">'+item.albums[aux].ano+'</span><span>/</span><span id="albumart'+i+'">'+item.apelido+'</span>'+
                        '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'
                );
                i++
            }
        });
    });		
}
*/