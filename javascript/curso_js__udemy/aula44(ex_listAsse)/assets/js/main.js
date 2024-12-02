const adicionar = selectElement("#adicionar");
const task = selectElement(`#task`);
const list = selectElement(`#list`);



adicionar.addEventListener('click', function(){
    focusElement(task);
    if(!task.value){
        alert("Valor vazio");
        return;
    }
    creatorTask(task);
    cleanWrite(task);

})

task.addEventListener('keypress', (e)=>{
    if(e.keyCode == 13){
        focusElement(task);
        if(!task.value){
            alert("Valor vazio");
            return;
        }
        creatorTask(task);
        cleanWrite(task);
    }
})


document.addEventListener('click', (e)=>{
    const elementSelect = e.target;
    if(elementSelect.classList.contains('apagar')){
        elementSelect.parentElement.remove();
        saveTasks();
    }
})


//Funções
function creatorTask(task){
    const itemTaks = creatorElement('li');
    console.log(typeof(task))
    if(typeof(task) != 'string'){
        inText(itemTaks, task.value);
    } else{
        inText(itemTaks, task); 
    }


    inChild(list, itemTaks);

    buttonCleanTask(itemTaks);

    saveTasks();
}
function selectElement(ident){
    return(window.document.querySelector(String(ident)));
}
function cleanWrite(item){
    item.value = "";
}
function focusElement(item){
    item.focus();
}
function creatorElement(element){
    return (window.document.createElement(String(element)));
}
function inText(elemento, texto){
    elemento.innerText = String(texto);
}
function inChild(pai, filho){
    pai.appendChild(filho);
}
function outChild(pai, filho){
    pai.removeChild(filho);
}
function buttonCleanTask(element){
    const cleanButton = window.document.createElement('button');
    cleanButton.innerText = 'Apagar';
    cleanButton.setAttribute('class', 'apagar')
    cleanButton.setAttribute('title', 'apagar esta tarefa')
    element.appendChild(cleanButton);
}
function saveTasks(){
    const liTasks = list.querySelectorAll('li');
    let listTasks = [];
    for (tarefa of liTasks){
        let taskText = tarefa.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        console.log(taskText);
        listTasks.push(taskText);
    }
    const tasksJSON = JSON.stringify(listTasks);
    localStorage.setItem('tarefas', tasksJSON);
}
function addSaveTasks(){
    const tasks = localStorage.getItem('tarefas');
    console.log(tasks);
    const listTasks = JSON.parse(tasks);
    console.log(listTasks);
    for(let tarefa of listTasks){
        creatorTask(tarefa);
    }
    
}
addSaveTasks();