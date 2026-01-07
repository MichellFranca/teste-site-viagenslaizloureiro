/* FUNÇÃO QUE TROCA AS ABAS AO CLICAR */
function abrirAba(evt, nomeAba) {
  var i, conteudoAba, filterBtn;

  // 1. Esconde todos os conteúdos
  conteudoAba = document.getElementsByClassName("conteudo-aba");
  for (i = 0; i < conteudoAba.length; i++) {
    conteudoAba[i].style.display = "none";
  }

  // 2. Remove a classe "active" (dourada) de todos os botões
  filterBtn = document.getElementsByClassName("filter-btn");
  for (i = 0; i < filterBtn.length; i++) {
    filterBtn[i].className = filterBtn[i].className.replace(" active", "");
  }

  // 3. Mostra a aba clicada e deixa o botão dourado
  document.getElementById(nomeAba).style.display = "block";
  if (evt) {
    evt.currentTarget.className += " active";
  }
}

/* FUNÇÃO AUTOMÁTICA (LÊ O LINK #europa, #asia, etc) */
document.addEventListener("DOMContentLoaded", function () {
  // Verifica se tem # no endereço do site
  if (window.location.hash) {
    // Pega o nome (ex: #europa vira europa)
    var hash = window.location.hash.substring(1); 
    
    // Procura o botão com id="btn-europa"
    var botaoParaClicar = document.getElementById("btn-" + hash);

    // Se o botão existir, clica nele automaticamente
    if (botaoParaClicar) {
      // Simula o clique
      botaoParaClicar.click();
      
      // Rola a tela suavemente até a barra de filtros
      botaoParaClicar.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});