
// modo noturno
const botaoTema = document.querySelector("#tema");
const elementos = document.querySelectorAll("body, header, #tema, nav");

botaoTema.addEventListener("click", function() {

  elementos.forEach(function(elemento){

  elemento.classList.toggle("noturno");

    if (document.body.classList.contains("noturno")) {
      botaoTema.textContent = "Modo diurno";
    } else {
      botaoTema.textContent = "Modo noturno";
    }
  });
});
