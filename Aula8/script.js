// Construtor para criar objetos do tipo Usuario
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const usuarios = [
    new Usuario('Alice', 25),
    new Usuario('Bob', 35),
    new Usuario('Charlie', 32),
    new Usuario('David', 40),
    new Usuario('Eve', 22),
];

// Comunicação DOM - conectando botões ao JavaScript
document.getElementById('botaoCarregarDados').addEventListener('click', carregarDados);
document.getElementById('botaoFiltrar').addEventListener('click', filtrarUsuarios);
document.getElementById('botaoBuscar').addEventListener('click', encontrarUsuario);
document.getElementById('botaoVerificarTodos').addEventListener('click', verificarTodosAdultos);
document.getElementById('botaoSomarIdades').addEventListener('click', calcularSomaIdades);
document.getElementById('botaoExemploSeta').addEventListener('click', exemploArrowFunction);

// Função para exibir resultados na área designada
function exibirResultado(mensagem) {
    const areaResultados = document.getElementById('resultados');
    areaResultados.textContent += mensagem + "\n";
}

// Função assíncrona que simula o carregamento de dados com um atraso
async function carregarDados() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Complete o código abaixo para retornar a mensagem "Dados carregados"
            resolve(/* ??? */);
        }, 2000);
    }).then(mensagem => exibirResultado(mensagem));
}

// Função para filtrar usuários maiores de 30 anos
function filtrarUsuarios() {
    //  Use o método correto para filtrar os usuários com idade maior que 30 anos
    const usuariosFiltrados = usuarios.???(usuario => usuario.idade > 30);
    exibirResultado(JSON.stringify(usuariosFiltrados, null, 2));
}

// Função para encontrar o primeiro usuário com 35 anos
function encontrarUsuario() {
    //  Use o método correto para encontrar o usuário com idade 35 anos
    const usuario = usuarios.???(usuario => usuario.idade === 35);
    exibirResultado(JSON.stringify(usuario, null, 2));
}

// Função para verificar se todos os usuários são maiores de idade (maiores de 18 anos)
function verificarTodosAdultos() {
    //  Use o método correto para verificar se todos os usuários têm mais de 18 anos
    const todosAdultos = usuarios.???(usuario => usuario.idade > 18);
    exibirResultado(todosAdultos ? "Todos são maiores de idade" : "Nem todos são maiores de idade");
}

// Função para calcular a soma das idades dos usuários
function calcularSomaIdades() {
    //  Use o método correto para somar as idades dos usuários
    const somaIdades = usuarios.???((soma, usuario) => soma + usuario.idade, 0);
    exibirResultado(`Soma das idades: ${somaIdades}`);
}

// Função anônima para exibir uma mensagem após 3 segundos
setTimeout(() => {
    //  Exiba a mensagem "Tempo esgotado!" no console
    exibirResultado(/* ??? */);
}, 3000);

// Função para exibir uma mensagem no console a cada 5 segundos
setInterval(() => {
    exibirResultado("Intervalo de 5 segundos");
}, 5000);

// Função de seta (Arrow Function) para exibir uma mensagem no console
const exemploArrowFunction = () => {
    //  Exiba a mensagem "Exemplo de Função de Seta" no console
    exibirResultado(/* ??? */);
};
