
// constantes declaradas para alterar entre os temas visuais.
const botaoTema = document.querySelector("#tema");
const elementos = document.querySelectorAll("body, main, header, #tema, nav, #github, #sobre, .card-projeto, dialog, #abrir");
const git = document.querySelector("#github");
// constantes para a verificação e alertas do formulário.
const dialog = document.getElementById("form-contato");
const formContato = document.querySelector("#cform");
const nome = document.querySelector("#cname");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#msg");
const resposta = document.querySelector("#resposta");

//alternar modo noturno
botaoTema.addEventListener("click", function() {

  elementos.forEach(function(elemento){

  elemento.classList.toggle("noturno");

    if (document.body.classList.contains("noturno")) {
      botaoTema.textContent = "Modo diurno";
      git.src = "imagens/github-white.png";
    } else {
      botaoTema.textContent = "Modo noturno";

      git.src = "imagens/github-black.png";
    }
  });
});

//acessar o contato
document.getElementById("abrir").addEventListener("click", () => {
  dialog.showModal();
});
document.getElementById("fechar").addEventListener("click", () => {
  dialog.close();
});

//verificação e resposta
formContato.addEventListener("submit", function(event) {
    console.log("evento disparado")
    event.preventDefault();

    if (nome.value.trim() === "" ||
        email.value.trim() === "" ||
        mensagem.value.trim() === "") {

        alert("Preencha todos os campos!");
        return;
    }

    if (!email.checkValidity()) {
         alert("Digite um e-mail válido!");
        return;
    }

    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
    console.log(formContato)
    formContato.reset();
});
