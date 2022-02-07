const toDoForm = document.getElementById("todo-form");
const toDoIuput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY="todos";

let toDos = [];

function savetoDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove()
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoIuput.value;
    toDoIuput.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    savetoDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedtoDos = localStorage.getItem(TODOS_KEY);

if (savedtoDos){
    const parsedtoDos = JSON.parse(savedtoDos);
    toDos = parsedtoDos;
    parsedtoDos.forEach(paintToDo);
} else{
    
}