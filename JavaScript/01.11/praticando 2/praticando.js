function remover_tudo() {
    var p = document.querySelectorAll("#container")
    p[0].innerHTML = '';
}

function adicionar() {
    const p = document.createElement('p');
    p.innerText = "Lorem ipsum dolor sit amet";
    document.querySelector('#container').appendChild(p);
}
function remover() {
    var p = document.querySelectorAll("p")
    p[0].remove();
}
