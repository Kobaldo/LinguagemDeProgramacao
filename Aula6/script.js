// Criando um array
let frutas = ["Maçã", "Banana", "Laranja"];
document.getElementById('arrayExample').innerHTML += "<p><strong>Array inicial:</strong> " + frutas.join(", ") + "</p>";

// Length: Tamanho do array
let tamanho = frutas.length;
document.getElementById('arrayExample').innerHTML += "<p><strong>Tamanho do array:</strong> " + tamanho + "</p>";

// ForEach: Iterando sobre o array
frutas.forEach((fruta, index) => {
    document.getElementById('arrayExample').innerHTML += "<p>Fruta " + (index + 1) + ": " + fruta + "</p>";
});

// Push: Adicionando um item ao final do array
frutas.push("Manga");
document.getElementById('arrayExample').innerHTML += "<p><strong>Após adicionar 'Manga' com push:</strong> " + frutas.join(", ") + "</p>";

// InsertItem: Adicionando um item em uma posição específica (usando splice)
frutas.splice(1, 0, "Morango");  // Adiciona 'Morango' na posição 1 (índice 1)
document.getElementById('arrayExample').innerHTML += "<p><strong>Após inserir 'Morango' na posição 1:</strong> " + frutas.join(", ") + "</p>";

// Pop: Removendo o último item do array
let ultimaFruta = frutas.pop();
document.getElementById('arrayExample').innerHTML += "<p><strong>Após remover o último item (" + ultimaFruta + ") com pop:</strong> " + frutas.join(", ") + "</p>";

// Shift: Removendo o primeiro item do array
let primeiraFruta = frutas.shift();
document.getElementById('arrayExample').innerHTML += "<p><strong>Após remover o primeiro item (" + primeiraFruta + ") com shift:</strong> " + frutas.join(", ") + "</p>";

// Unshift: Adicionando um item no início do array
frutas.unshift("Pêssego");
document.getElementById('arrayExample').innerHTML += "<p><strong>Após adicionar 'Pêssego' com unshift:</strong> " + frutas.join(", ") + "</p>";

// IndexOf: Encontrando o índice de um item no array
let indiceLaranja = frutas.indexOf("Laranja");
document.getElementById('arrayExample').innerHTML += "<p><strong>Índice de 'Laranja' no array:</strong> " + indiceLaranja + "</p>";

// Splice: Removendo itens em uma posição específica
frutas.splice(1, 1);  // Remove 1 item na posição 1 (índice 1)
document.getElementById('arrayExample').innerHTML += "<p><strong>Após remover 1 item na posição 1 com splice:</strong> " + frutas.join(", ") + "</p>";

// Matrizes: Criando e acessando uma matriz (array de arrays)
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
document.getElementById('arrayExample').innerHTML += "<p><strong>Matriz:</strong></p>";
matriz.forEach((linha, i) => {
    document.getElementById('arrayExample').innerHTML += "<p>Linha " + (i + 1) + ": " + linha.join(", ") + "</p>";
});

// Acessando um elemento específico da matriz
let elemento = matriz[1][2];  // Acessa o número 6 (linha 2, coluna 3)
document.getElementById('arrayExample').innerHTML += "<p><strong>Elemento específico da matriz (linha 2, coluna 3):</strong> " + elemento + "</p>";
