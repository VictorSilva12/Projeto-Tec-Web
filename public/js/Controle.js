let audio = document.getElementById('audio');
let status= true

function tocar(musica){
    let aux=musica;
    aux=aux.split("/");
    
    let caminho= musica;
    proxima(caminho, aux[3]);
}

function proxima(musica, nome){

    if(audio.canPlayType("audio/mp3") != ''){
        audio.src = musica;
    }

    document.getElementById('nome_musica').innerHTML = nome;
    audio.tocar()
}
