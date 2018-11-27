$(document).ready(function(){
    //inicia carousel
    $(".owl-carousel").owlCarousel();
    //onclick="pesquisar(\'albumart'+i+'\')\"
    //cria lista de albums
    $.get( "http://localhost:8081/api", function( data ) {
        let i=0;
        data.forEach(function(item){
            for(let aux=0; aux<item.albums.length;aux++){
                $('#albumsLista').append(
                '<div class="album" >'+
                    '<a id="capa'+i+'" href="/play.html?nome='+item.apelido+'">'+
                        '<div class="capatape ">'+
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
    //carregar owl-carousel
    $.get("http://localhost:8081/api", function(data){
        console.log(JSON.stringify(data));
        data.sort(function(a,b){ return a.albums[0].mes-b.albums[0].mes});
        var novidade=data.splice(0,6);
        let i=0;
        novidade.forEach(function(item){
           var elemento='<a id="capa'+i+'" href="/play.html?nome='+item.apelido+'">'+
                            '<div class="capatape">'+
                                '<img src="'+item.albums[0].caminho+'front.jpg'+'" width="10" height="200">'+
                            '</div>'+
                            '<div class="desc-album">'+
                                '<span id="album'+i+'">'+item.albums[0].album+'</span>'+
                            '</div>'+
                            '<div class="desc-album">'+
                                '<span id="ano'+i+'">'+item.albums[0].ano+'</span><span>/</span><span id="albumart'+i+'">'+item.apelido+'</span>'+
                            '</div>'+
                        '</a>';
           $(".owl-carousel").owlCarousel('add', elemento).owlCarousel('update');
           i++;
        });

    })
});