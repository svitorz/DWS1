function mudaDirecao(event) {
    if(event.key == 'ArrowLeft') {

    var imagem = document.querySelector('img')
    imagem.src = "seta-esquerda.png"

    var texto = document.querySelector('h2')
    texto.innerHTML = "Para esquerda" 

    var fundo = document.querySelector('body') 
    fundo.style.backgroundColor = ("yellow")
    }

    if(event.key == 'ArrowRight') {
        var imagem_esquerda = document.querySelector('img')
        imagem_esquerda.src = "seta-direita.png"
    
        var texto_a = document.querySelector('h2')
        texto_a.innerHTML = "Para direita" 
    
        var fundo_a = document.querySelector('body') 
        fundo_a.style.backgroundColor = ("green")
        }

}