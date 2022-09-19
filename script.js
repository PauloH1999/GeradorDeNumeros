function gerador(){

var n = [ ]

var max = document.getElementById("max").value
var qtd = document.getElementById("qtd").value
var res = document.getElementById("box")

 for( var i = 0 ; i < qtd ; i++ ){
        
     var x = Math.floor(Math.random() * max +1)
     
     n += `<h1 id="${i}" class="res">${x}</h1>`
     
     box.innerHTML= n
     
  }


}
