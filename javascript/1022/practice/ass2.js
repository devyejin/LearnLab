const todos = [];
todos.push({
  todoId: 1,
  content: '예습하기',
  isCompleted: false,
});
todos.push({
  todoId: 2,
  content: '강의듣기',
  isCompleted: false,
});
todos.push({
  todoId: 3,
  content: '복습하기',
  isCompleted: false,
});

console.log(todos);
//키 값 일부만 출력하고 싶을 때 (배열안에 객체)
for (todo of todos) {
  console.log(`content : ${todo.content}, isCompleted : ${todo.isCompleted}`);
}

//객체와 배열3
