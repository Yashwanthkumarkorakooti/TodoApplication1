let todoItemsContainerEle = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text : "Learn HTML"
    },
    {
        text : "Learn CSS"
    },
    {
        text : "Learn JavaScript"
    }
]

function createAndAppendTodo(todo){

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container" ,"d-flex", "d-row");
    todoItemsContainerEle.appendChild(todoElement);

    let inputElement = document.createElement("input");
    // console.log(inputElement);
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput" ;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex","flex-row");
    // console.log(labelContainer);
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for","checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text ;
    // console.log(labelElement);
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);
    // console.log(deleteIconContainer);


    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far","fa-trash-alt","delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
    // console.log(deleteIcon);

}

for (let todo of todoList){
    createAndAppendTodo(todo);
}
