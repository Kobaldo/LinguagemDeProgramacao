function adicionarTarefa() {
    // Obtém o valor do input
    const tarefaTexto = document.getElementById('tarefa').value;
    
    // Cria um novo objeto Tarefa
    const tarefa = {
        descricao: tarefaTexto,
        feita: false
    };
    /*Criamos um objeto tarefa com duas propriedades: descricao, que armazena o texto da tarefa, e feita,
     um booleano que indica se a tarefa foi concluída (inicialmente definido como false).
    O objeto é usado para estruturar os dados da tarefa, embora neste exemplo simples, apenas a descricao seja usada para definir o texto do elemento li.
    */

    // Cria um novo elemento de lista (li)
    const novoItem = document.createElement('li');
    /* No JavaScript, usamos document.createElement('li') para criar um novo elemento de lista (li). 
    Isso cria um novo nó no DOM que pode ser manipulado antes de ser adicionado à página. */
    
    // Define o texto do novo item como a descrição da tarefa
    novoItem.textContent = tarefa.descricao;

    // Adiciona o novo item à lista de tarefas (ul)
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.appendChild(novoItem);
    /* Usamos appendChild(novoItem) para adicionar o novo item de lista (li) ao elemento de lista não ordenada (ul) que representa a lista de tarefas na página.
     Isso efetivamente insere o elemento li como um filho do elemento ul. */

    // Limpa o campo de input após adicionar a tarefa
    document.getElementById('tarefa').value = '';
}
