var toggleAttr = document.querySelector(".change-mode");
var typeButton = document.querySelectorAll(".button");
var typeIcon = document.querySelectorAll(".icon");
var queryString = window.location.search;



document.addEventListener('DOMContentLoaded', function () {
    console.log("¡Estamos en vivo!");
    console.log(queryString);
   
    var indexBack = document.querySelector(".indexBack"); 
    if(queryString==="?viewIframe"){
        console.log(queryString+" true");
        indexBack.style.display = 'none'
    }else{
        if(indexBack){
            indexBack.style.display = 'block'
            console.log("false");
        }
    
    }

    if(toggleAttr){

        toggleAttr.addEventListener("click", function () {
          var row = document.querySelector(".theme");
          var rowAttr = row.getAttribute("data-theme");
          //console.log(rowAttr);
          if (rowAttr === "dark") {
            row.setAttribute("data-theme", "light");
            toggleAttr.innerHTML="modo Claro"
          }
        
          if (rowAttr === "light") {
            row.setAttribute("data-theme", "dark");
            toggleAttr.innerHTML="modo Oscuro"
          }
        });
        }
        
});
    