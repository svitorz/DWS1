function adicionar(){
    var c = document.querySelector (".container")
    c.innerHTML += 
    "<table> <tr> <td> # </td> <td> lorem </td> <td> ipsum </td> </tr> </table>"
     }

function remover_tudo(){
        var p=document.querySelector(".container")

        p.innerHTML= null
    }
function remover(){
        var a = document.querySelector("table")
        a.remove()
    }