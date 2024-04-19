const botao = document.querySelector(".btn-plataformas");

const elementoPlataformas = document.querySelector(".btn-plataformas .plataforma");

botao.addEventListener("click", () => {
  elementoPlataformas.classList.add("ativo");

  if(botaoEstaAberto) {
    elementoPlataformas.classList.remove("ativo");
  }else{
    elementoPlataformas.classList.add("ativo");
  }
});