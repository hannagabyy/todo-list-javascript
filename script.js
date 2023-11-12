const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-text');
const listTasks = document.querySelector('.list-tasks')

let minhaListaDeItens = [];

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida:false
    });
    input.value = ''
    mostrarTarefas();
}


function mostrarTarefas(){
    let novaLi = ''

    minhaListaDeItens.forEach((item,index) => {
       novaLi= novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img class="riscar-tarefa" src="./imagens/check-circle.svg" alt="check na tarefa" onclick=riscarTarefa(${index})>
            <p>${item.tarefa}</p>
            <img class="deletar-tarefa" src="./imagens/trash-bold.svg" alt="apagar tarefa" onclick=deletarTarefa(${index})>
         </li>
        `   

    })
    listTasks.innerHTML = novaLi;

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens));

}
function riscarTarefa(index){
    console.log(minhaListaDeItens[index]);
    minhaListaDeItens[index].concluida = !(minhaListaDeItens[index].concluida);
    mostrarTarefas();
}
function deletarTarefa(index){
    minhaListaDeItens.splice(index,1);
    mostrarTarefas();
}
function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista');
    if (tarefasDoLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    
    mostrarTarefas();
}
recarregarTarefas()
button.addEventListener('click',adicionarNovaTarefa);