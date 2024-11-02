// API 베이스 URL
const URL = 'http://localhost:3000/todos';

// DOMContentLoaded : HTML 문서 로딩이 끝나면 실행되는 이벤트
// 페이지가 로드되면 Todo 목록 초기화 함수를 실행한다.
document.addEventListener('DOMContentLoaded', initTodos);

// Todo 추가 버튼 클릭 이벤트 리스너
const addTodoBtn = document.querySelector('#add-todo');
addTodoBtn.addEventListener('click', (e) => addTodo(e));

//Todo 전체 삭제 버튼 클릭 이벤트 리스너
const delTodoAllBtn = document.querySelector('#delete-all');
delTodoAllBtn.addEventListener('click', deleteAllTodo);

// 개별 Todo 요소를 화면에 그리는 함수
function renderTodo(todo) {
  const todoId = todo.id;
  const isCompleted = todo.completed;

  const todoList = document.querySelector('#todo-list');

  const li = document.createElement('li');
  li.setAttribute('class', 'todo-item');
  li.setAttribute('id', `todoId-${todoId}`);

  const span = document.createElement('span');
  span.setAttribute('class', 'todo-text');
  if (isCompleted) {
    span.classList.add('completed');
  } else {
    span.classList.remove('completed');
  }

  const completeBtn = document.createElement('button');
  completeBtn.setAttribute('class', 'btn btn-primary');
  completeBtn.setAttribute('id', 'complete-btn');
  completeBtn.addEventListener('click', () => toggleComplete(todo));
  completeBtn.textContent = isCompleted ? '미완료' : '완료';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';
  deleteBtn.setAttribute('class', 'btn btn-danger');
  deleteBtn.setAttribute('id', 'del-btn');
  deleteBtn.addEventListener('click', () => deleteTodo(todoId));

  const div = document.createElement('div');
  div.setAttribute('class', 'input-container');

  li.append(span, completeBtn, deleteBtn); //append만 한줄로 가능

  todoList.append(li);

  span.textContent = todo.content;
}

//Todo 데이터 조회
async function fetchTodos() {
  const response = await fetch('http://localhost:3000/todos');
  const data = await response.json();
  return data;
}

// Todo 목록 초기화 (GET 요청)
async function initTodos() {
  console.log('Hello World');

  const todos = await fetchTodos();

  todos.forEach((todo) => {
    renderTodo(todo);
  });
}

// Todo 추가하기 (POST 요청)
async function addTodo(e) {
  e.preventDefault();

  const container = document.querySelector('.container');
  const todoInput = container.querySelector('#todo-input');
  const todo = todoInput.value.trim();

  if (!todo) {
    alert('내용을 입력하세요.');
    return;
  }

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
async function toggleComplete(todo) {
  const id = todo.id;
  const completed = todo.completed;

  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json', // Content-Type 헤더 추가
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

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

//Todo 전체 삭제하기
async function deleteAllTodo() {
  const isConfirmed = confirm('정말로 다 삭제하시겠습니까?');

  if (!isConfirmed) return;

  const todos = await fetchTodos();
  const todoIds = todos.map((todo) => todo.id);

  todoIds.forEach((todoId) => {
    deleteTodo(todoId);
  });
}
