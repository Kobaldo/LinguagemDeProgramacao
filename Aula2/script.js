// Função para registrar uma pessoa
function registrarPessoa() {
    // Variável do tipo String para o nome
    const nome = document.getElementById('nome').value;

    // Variável do tipo String para a data de nascimento
    const dataNascimento = document.getElementById('dataNascimento').value;

    // Variável do tipo BigInt para o RG
    const rg = BigInt(document.getElementById('rg').value);

    // Variável do tipo Boolean para a doação de órgãos
    const doacaoOrgaos = document.getElementById('doacaoOrgaos').checked;

    // Variável do tipo Symbol para o identificador único
    const identificadorUnico = Symbol(nome);

    // Criando o objeto "Pessoa"
    const pessoa = {
        identificador: identificadorUnico,
        nome: nome,
        dataNasc: dataNascimento,
        rg: rg,
        doador: doacaoOrgaos
    };

    // Exibir o cartão de identidade formatado
    exibirCartaoIdentidade(pessoa);
}

// Função para exibir o cartão de identidade
function exibirCartaoIdentidade(pessoa) {
    const cartaoIdentidade = document.getElementById('cartaoIdentidade');
    cartaoIdentidade.innerHTML = '';

    const idCard = document.createElement('div');
    idCard.classList.add('id-card');

    if (pessoa.doador) {
        idCard.classList.add('doador');
    } else {
        idCard.classList.add('nao-doador');
    }

    idCard.innerHTML = `
        <h2>Carteira de Identidade</h2>
        <p><strong>Nome:</strong> ${pessoa.nome}</p>
        <p><strong>Data de Nascimento:</strong> ${pessoa.dataNasc}</p>
        <p><strong>RG:</strong> ${pessoa.rg}</p>
        <p><strong>Doador de Órgãos:</strong> ${pessoa.doador ? 'Sim' : 'Não'}</p>
    `;

    cartaoIdentidade.appendChild(idCard);
}
