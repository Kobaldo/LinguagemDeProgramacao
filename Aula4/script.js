function placeOrder() {
    // Obter as escolhas do usuário
    const burgerChoice = document.getElementById('burger-choice').value;
    const sideChoice = document.getElementById('side-choice').value;
    const drinkChoice = document.getElementById('drink-choice').value;
    const resultElement = document.getElementById('result');

    let burgerMessage;
    let sideMessage;
    let drinkMessage = "";

    // Usando Switch-Case para determinar a resposta do lanche
    switch (burgerChoice) {
        case 'hamburger':
            burgerMessage = "Você escolheu um Hambúrguer";
            break;
        case 'cheeseburger':
            burgerMessage = "Você escolheu um Cheeseburger";
            break;
        case 'vegetariano':
            burgerMessage = "Você escolheu um lanche Vegetariano";
            break;
        default:
            burgerMessage = "Seu lanche virá sem sanduíche ";
    }

    // Usando If-Else para determinar a resposta do acompanhamento
    if (sideChoice === 'batata') {
        sideMessage = "com Batata Frita ";
    } else if (sideChoice === 'salada') {
        sideMessage = "com Salada ";
    } else if (sideChoice === 'anéis de cebola') {
        sideMessage = "com Anéis de Cebola ";
    } else{
        if(burgerMessage === "Seu lanche virá sem sanduíche "){
            burgerMessage = "Você não pediu nada!";
            sideMessage = "";
        } else{
            sideMessage = "sem acompanhamento ";
        }
    }

        // Usando If-Else para determinar a resposta da bebida
        if (drinkChoice === 'refrigerante') {
            drinkMessage = "e  refrigerante.";
            resultElement.style.color = "red";
        } else if (drinkChoice === 'suco') {
            drinkMessage = "e suco.";
            resultElement.style.color = "yellow";
        } else if (drinkChoice === 'água') {
            drinkMessage = "e água.";
            resultElement.style.color = "green";
        } else{
            if(burgerMessage !== "Você não pediu nada!"){
                drinkMessage = "sem bebida.";
                resultElement.style.color = "black";
            } 
        }

    // Exibir a mensagem final
    resultElement.textContent = `${burgerMessage} ${sideMessage} ${drinkMessage}`;
}
