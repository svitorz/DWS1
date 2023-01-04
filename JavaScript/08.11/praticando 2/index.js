  function texto() {
      console.log("APERTANDO BOTAO => " + event.key)


if(event.key == `l`){
    var p = document.querySelector(".abc")
    p.style.textAlign ="left"
}
if(event.key == `c`) {
    console.log("  cc  " + event.key)
    var p = document.querySelector(".abc")
    p.style.textAlign="center"
}
if(event.key == `r`){
    var p = document.querySelector(".abc")
    p.style.textAlign="right"
}
  }
