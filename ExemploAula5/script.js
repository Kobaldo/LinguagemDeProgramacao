let numeros = [1, 2, 3, 4, 5];
console.log("Usando for:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

let contar = 0;
console.log("Usando while:");
while (contar < numeros.length) {
    console.log(numeros[contar]);
    contar++;
}

let indice = 0;
console.log("Usando do-while:");
do {
    console.log(numeros[indice]);
    indice++;
} while (indice < numeros.length);

let pessoa = {
    nome: "John",
    idade: 30,
    cidade: "Nova York"
};
console.log("Usando for-in:");
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

console.log("Usando for-of:");
for (let number of numeros) {
    console.log(number);
}
