document.addEventListener("DOMContentLoaded", function () {
  // Captura todos os links com a classe "link"
  var links = document.querySelectorAll(".link");

  // Itera sobre os links
  links.forEach(function (link) {
    // Adiciona um evento de clique a cada link
    link.addEventListener("click", function (event) {
      // Abre a nova aba
      var newTab = window.open(link.href, "_blank");

      // Adiciona um evento de carga à nova aba
      newTab.onload = function () {
        // Cria um botão de retorno
        var backButton = newTab.document.createElement("button");
        backButton.textContent = "Voltar";

        // Adiciona um evento de clique ao botão de retorno
        backButton.addEventListener("click", function () {
          // Fecha a nova aba
          newTab.close();
        });

        // Adiciona o botão de retorno à nova página
        newTab.document.body.appendChild(backButton);
      };

      // Impede o comportamento padrão do link (evita que a nova aba seja aberta imediatamente)
      event.preventDefault();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o elemento body
  var body = document.querySelector("body");

  // Define o estilo de fundo com a imagem desejada
  body.style.backgroundImage =
    'url("https://i.pinimg.com/736x/eb/1a/cc/eb1accbe943acd304321ca0f1ca91da5.jpg")';
  body.style.backgroundSize = "cover"; // Ajusta o tamanho da imagem para cobrir todo o corpo

  // Adiciona um evento de clique aos links
  document
    .getElementById("lowcode-link")
    .addEventListener("click", function () {
      // Altera a cor de fundo do link para uma cor aleatória
      this.style.backgroundColor = getRandomColor();
    });

  document
    .getElementById("linguagens-link")
    .addEventListener("click", function () {
      // Altera a cor de fundo do link para uma cor aleatória
      this.style.backgroundColor = getRandomColor();
    });
});

// Função para gerar uma cor aleatória hexadecimal
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
