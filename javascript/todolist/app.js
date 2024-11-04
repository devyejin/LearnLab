// API 베이스 URL
const URL = 'http://localhost:3000/todos';

// DOMContentLoaded : HTML 문서 로딩이 끝나면 실행되는 이벤트
// 페이지가 로드되면 Todo 목록 초기화 함수를 실행한다.
document.addEventListener('DOMContentLoaded', initTodos);

// Todo 추가 버튼 클릭 이벤트 리스너
const addTodoBtn = document.querySelector('#add-todo');
addTodoBtn.addEventListener('click', addTodo);

//Todo 전체 삭제 버튼 클릭 이벤트 리스너
const delTodoAllBtn = document.querySelector('#delete-all');
delTodoAllBtn.addEventListener('click', deleteAllTodo);

//단건 조회에서, 전체조회에서 활용을 위해 renderTodos, renderTodo로 분리
function renderTodos(todos) {
  todos.forEach((todo) => {
    renderTodo(todo);
  });
}

// 개별 Todo 요소를 화면에 그리는 함수
function renderTodo(todo) {
  const { id, content, completed: isCompleted } = todo;
  console.log(content);
  console.log(isCompleted);
  // const id = todo.id;
  // const isCompleted = todo.completed;

  const todoList = document.querySelector('#todo-list');

  const li = document.createElement('li');
  li.setAttribute('class', 'todo-item');
  li.setAttribute('id', `todoId-${id}`);

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
  completeBtn.textContent = isCompleted ? '완료 취소' : '완료';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';
  deleteBtn.setAttribute('class', 'btn btn-danger');
  deleteBtn.setAttribute('id', 'del-btn');
  //삭제 호출만 하고 랜더링 처리를 안했음
  deleteBtn.addEventListener('click', async () => {
    try {
      await deleteTodo(id);
      console.log('클로저 확인', li);
      li.remove(); // 좀 더 섬세하게 할거면 headers에서 state code받아서 처리
    } catch (error) {
      console.log(error);
    }
  });

  const div = document.createElement('div');
  div.setAttribute('class', 'input-container');

  li.append(span, completeBtn, deleteBtn); //append만 한줄로 가능

  todoList.append(li);

  span.textContent = todo.content;
}

//Todo 데이터 조회
async function fetchTodos() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function fetchTodo(id) {
  try {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

// Todo 목록 초기화 (GET 요청)
async function initTodos() {
  console.log('Hello World');

  const todos = await fetchTodos();

  renderTodos(todos);
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

  const response = await fetch(URL, {
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

  //여기서 랜더링 안해줬는데 어떻게 출력됐지...?? <-- open live server는 동기화떄문에 재호출된거였음 '
  renderTodo(data);
  todoInput.value = '';
}

// Todo 완료 상태 토글 (PATCH 요청)
/**
 * 완료, 미완료 상태변화 랜더링
 * @param {number} id Todo id값
 * @return
 */
async function toggleComplete(todo) {
  //브라우저 데이터는 무결성 보장이 안되기 때문에 db에서 조회해온다.
  const id = todo.id;

  const data = await fetchTodo(id);

  const { completed } = data; //구조분해할당

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

    //변경된 데이터 랜더링 renderTodo 하면 새롭게 만들어짐
    //기존 데이터를 찾아서 값 변경을 해주자. render가 아님
    const modifiedId = `todoId-${id}`;
    const modifiedLi = document.querySelector(`#${modifiedId}`);
    const span = modifiedLi.querySelector('span');
    const isCompleted = data.completed;

    if (isCompleted) {
      span.classList.add('completed');
    } else {
      span.classList.remove('completed');
    }

    // completeBtn.textContent = isCompleted ? '완료 취소' : '완료';

    //data 무결성을 위해서는 다시 GET요청해서 보여주는게 맞음
  } catch (error) {
    console.error(error);
  }
}

// Todo 삭제하기 (DELETE 요청)
async function deleteTodo(id) {
  console.log('delete 이벤트 발생 ');
  console.log(id);

  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
    response.json();

    //DB에 삭제한 것과 브라우저에 랜더링하는건 별개
    //data가 삭제되서 없는데 어떻게 넘기지 <- render 함수에 넘길게 아니라 여기서 처리
    // renderTodo(id);
    const deleteId = `todoId-${id}`;
    const deleteEl = document.querySelector(`#${deleteId}`);
    deleteEl.remove();
  } catch (error) {
    console.error(error);
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
