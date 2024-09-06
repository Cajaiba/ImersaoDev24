function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      // Se estiver vazio, exibe uma mensagem de erro
      section.innerHTML = "<p>Nenhum resultado encontrado. Tente digitar o nome do atleta ou esporte.</p>";
      return;
    }
  
    // Inicializa variáveis para armazenar o resultado da pesquisa
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre os dados da pesquisa
    for (let dado of dados) {
      // Converte o título, descrição e tags para minúsculas para facilitar a comparação
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      // Verifica se a pesquisa ocorre em algum dos campos
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se encontrar um resultado, adiciona o HTML para exibi-lo na página
        resultado += `
          <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Se nenhum resultado for encontrado, exibe uma mensagem
    if (!resultado) {
      resultado = "<p>Nenhum resultado encontrado</p>";
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultado;
  }


