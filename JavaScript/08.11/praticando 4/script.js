 function acende() {
    var i = document.querySelector('img')
    i.src = "lampada-acesa.png"

    var t = document.querySelector('h2')
    t.innerHTML = "Lampada acesa"
    t.style.color = ('black')

    var c = document.querySelector('h1')
    c.style.color = ('black')

    var b = document.querySelector('body')
    b.style.backgroundColor = ('white')
   }


   function apaga() {
      var d = document.querySelector('img')
      d.src = "lampada.png"
  
      var e = document.querySelector('h2')
      e.innerHTML = "Lampada apagada"
      e.style.color = ('white')
  
      var f = document.querySelector('h1')
      f.style.color = ('white')
  
      var a = document.querySelector('body')
      a.style.backgroundColor = ('black')
     }
