function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Não foi encontrado. Precisa digitar o nome de um atleta ou esporte.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descrição.toLowerCase(); // Corrigido para 'descrição'
        tags = dado.tags.toLowerCase();

        // Verifica se o termo de pesquisa está no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
                <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>`;
        }
    }

    // Exibe uma mensagem se nenhum resultado for encontrado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }

    section.innerHTML = resultados;
}