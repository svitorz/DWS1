/* Imagens */

function mudarImagemGato() {
    document.getElementById("x-imagem").src = "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/vpelgt06e9g5n801i5hr.png";
    document.getElementById("x-imagem").style.display = 'block';
    document.getElementById("botao-fechar").style.display = 'block';
}

function mudarImagemCachorro() {
    document.getElementById("x-imagem").src = "https://www.thesun.co.uk/wp-content/uploads/2022/01/NINTCHDBPICT000003600554-1.jpg";
    document.getElementById("x-imagem").style.display = 'block';
    document.getElementById("botao-fechar").style.display = 'block';
}

function mudarImagemCavalo() {
    document.getElementById("x-imagem").src = "https://pbs.twimg.com/media/EaAAso6XkAIj029.png";
    document.getElementById("x-imagem").style.display = 'block';
    document.getElementById("botao-fechar").style.display = 'block';
}

function mudarImagemChad() {
    document.getElementById("x-imagem").src = "https://qph.cf2.quoracdn.net/main-qimg-fd559338e12ef323dbbff1913016bba7-lq";
    document.getElementById("x-imagem").style.display = 'block';
    document.getElementById("botao-fechar").style.display = 'block';
}

function removerImagem() {
    document.getElementById("x-imagem").style.display = 'none';
    document.getElementById("botao-fechar").style.display = 'none';
}