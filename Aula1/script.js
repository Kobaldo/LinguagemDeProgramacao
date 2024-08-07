function calcularIMC() {
    // Obtém os valores de peso e altura do usuário
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura^2);

    // Classifica o IMC de acordo com as faixas padrão
    let classificacao;
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    // Exibe o resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
}
