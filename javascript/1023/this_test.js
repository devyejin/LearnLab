const person = {
  name: '철수',
  greet: (function () {
    console.log('안녕하세요. 반갑습니다.');
    return this;
  })(),
  greet3: (() => {
    console.log('안녕하세요. 반갑습니다.');
    return this;
  })(),

  greet2() {
    console.log(`${this.name}`); // this : 호출하는 자기 자신
    console.log(this); // [Function: greet2]
  },

  greet4: (function () {
    return 123;
  })(), // 이 형태는  greet4가 값으로 갖는거라 많이 씀
};
console.log('--------------');
// person.greet2();
console.log(person.greet); //호출 주체 Node라 Object
console.log(person.greet3); // arrow라서 호출주체X {}
console.log(person.greet2); //[Function: greet2]
console.log(person.greet4);

//값으로 가지고 있을 때 많이 사용, 모듈패턴
