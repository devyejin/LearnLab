// API 베이스 URL
const URL = 'http://localhost:3000/todos';

// DOMContentLoaded : HTML 문서 로딩이 끝나면 실행되는 이벤트
// 페이지가 로드되면 Todo 목록 초기화 함수를 실행한다.
document.addEventListener('DOMContentLoaded', initTodos);

// Todo 추가 버튼 클릭 이벤트 리스너
const addTodoBtn = document.querySelector('#add-todo');
addTodoBtn.addEventListener('click', (e) => addTodo(e));

// 개별 Todo 요소를 화면에 그리는 함수
function renderTodo(todo) {
  const todoId = todo.id;
  console.log(typeof todoId);
  console.log('render todo 호출');
  const todoList = document.querySelector('#todo-list');

  const li = document.createElement('li');
  li.setAttribute('class', 'todo-item');
  li.setAttribute('id', `todoId-${todoId}`);

  const span = document.createElement('span');
  span.setAttribute('class', 'todo-text');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '완료';
  completeBtn.setAttribute('class', 'btn btn-primary success-btn');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';
  deleteBtn.setAttribute('class', 'btn btn-danger');
  deleteBtn.setAttribute('id', 'del-btn');
  console.log(deleteBtn);
  deleteBtn.addEventListener('click', () => deleteTodo(todoId));

  // const wrapDiv = document.createElement('div');
  // wrapDiv.setAttribute('class');

  li.append(span, completeBtn, deleteBtn); //append만 한줄로 가능

  todoList.append(li);
  //데이터 넣어주기
  span.textContent = todo.content;
}

// Todo 목록 초기화 (GET 요청)
async function initTodos() {
  console.log('Hello World');

  const response = await fetch('http://localhost:3000/todos');
  const data = await response.json();

  data.forEach((todo) => {
    renderTodo(todo);
  });
}

// Todo 추가하기 (POST 요청)
async function addTodo(e) {
  e.preventDefault();

  console.log('추가 버튼 클릭');

  const container = document.querySelector('.container');
  const todoInput = container.querySelector('#todo-input');
  const todo = todoInput.value;

  const response = await fetch(`http://localhost:3000/todos`, {
    method: 'POST',
    body: JSON.stringify({
      content: todo,
      completed: false,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });

  const data = await response.json();
  console.log(data);
  console.log('post 요청 후');
}

// Todo 완료 상태 토글 (PATCH 요청)
async function toggleComplete(id) {}

// Todo 삭제하기 (DELETE 요청)
async function deleteTodo(id) {
  console.log('delete 이벤트 발생 ');
  console.log(id);

  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    });

    const data = response.json();
    console.log(data);
  } catch (error) {
    console.error(error.body);
  }
  console.log('delete 이벤트 발생 이후 ');
}
