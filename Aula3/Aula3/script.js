function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Por favor, insira números válidos!";
    } else {
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Divisão por zero!";
                break;
            case '%':
                result = num1 % num2;
                break;
            case '**':
                result = num1 ** num2;
                break;
            default:
                result = "Operação inválida!";
        }
    }
    document.getElementById('result').textContent = `Resultado: ${result}`;
}

function compare(operator) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    let result;

    switch (operator) {
        case '===':
            result = (num1 === num2) ? "Verdadeiro" : "Falso";
            break;
        case '==':
            result = (num1 == num2) ? "Verdadeiro" : "Falso";
            break;
        case '!=':
            result = (num1 != num2) ? "Verdadeiro" : "Falso";
            break;
        case '!==':
            result = (num1 !== num2) ? "Verdadeiro" : "Falso";
            break;
        case '>':
            result = (num1 > num2) ? "Verdadeiro" : "Falso";
            break;
        case '<':
            result = (num1 < num2) ? "Verdadeiro" : "Falso";
            break;
        case '>=':
            result = (num1 >= num2) ? "Verdadeiro" : "Falso";
            break;
        case '<=':
            result = (num1 <= num2) ? "Verdadeiro" : "Falso";
            break;
        default:
            result = "Operador inválido!";
    }
    document.getElementById('result').textContent = `Resultado: ${result}`;
}
