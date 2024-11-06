console.log(-1 <= -5 <= 5);

console.log(10 >= 5);

const temp = 20;

if (temp < 22) console.log('보일러 가동');
else console.log('에어컨');

temp < 22 ? console.log('보일러 가동') : console.log('에어컨');

//미세먼지 + 초미세먼지 => 초미세먼지 기준으로 출력되도록

const names = ['a', 'b', 'c'];

// const는 constant라고 했는데, names에 어떻게 push(), pop()이 가능하냐?
// address는 동일한 객체를 가리키기때문에! 가능 다른 객체를 참조하는게 불가능
// names = ['hello']; //TypeError: Assignment to constant variable.
names.push('k');

const test = {
  name: 'sara',
  age: 16,
};

test.age = 18; //참조값은 그대로니까 ㅇㅋ
console.log(test);
