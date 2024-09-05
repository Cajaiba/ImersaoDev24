function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultado = "";
  
    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
      // Constrói o HTML para cada item, formatando com as propriedades do dado
      resultado += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção com o HTML construído
    section.innerHTML = resultado;
  }


