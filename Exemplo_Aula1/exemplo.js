// Função que exibe uma saudação personalizada
function exibirSaudacao() {
    // Obtém o valor do campo de texto com o ID "nome"
    const nome = document.getElementById('nome').value;

    // Verifica se um nome foi inserido
    if (nome.trim() === '') {
        alert('Por favor, insira seu nome.');
        return;
    }

    // Cria uma mensagem de saudação
    const mensagem = `Olá, ${nome}! Seja bem-vindo(a)!`;

    // Obtém o elemento de resultado pelo ID "saudacao" e define seu conteúdo
    const saudacaoElement = document.getElementById('saudacao');
    saudacaoElement.innerHTML = mensagem;
}
