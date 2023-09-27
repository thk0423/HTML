/**
 * todo리스트를 제어하는 자바 스크립트
 * 최초작성자: 곽신아
 * 최초작성일: 2023-09-12
 * 이     력: 2023-09-12 파일 생성
 *            2023-09-13 todo리스트 화면에서 추가, 삭제 기능 추가
 *            2023-09-25 todo리스트 로컬스토리지에 추가, 삭제 기능 추가
 */

//변수 선언
const todoForm = document.getElementById("frmTodo");
const todoInput = document.querySelector("#frmTodo input");
const todoList = document.getElementById("lstTodo");

/**
 * "todos" string 상수화
 */
const TODOS_KEY = "todos";

let todos = []

/**
 * todo리스트를 로컬스토리지에 저장하는 함수
 */
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}


/**
 * todo리스트에서 항목을 삭제하는 함수
 */
function deleteTodo(event){
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

/**
 * todo리스트 목록을 출력하는 함수
 */
function displayTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

/**
 * todoForm 에 입력된 값을 변수에 저장하고
 * form 의 내용은 지운다.
 * @param {*} event 
 */
function handleSubmitTodo(event){
    event.preventDefault();
    const valueTodo = todoInput.value;
    todoInput.value ="";
    const newTodoObj = {
        text : valueTodo,
        id : Date.now(),
    };
    todos.push(newTodoObj);
    displayTodo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleSubmitTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null){
    const parseTodos = JSON.parse(savedTodos);
    // parseTodos.forEach(item => {console.log(item);
    // });
    todos = parseTodos;
    parseTodos.forEach(displayTodo);       
    
}
