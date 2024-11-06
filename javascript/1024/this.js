// const person = {
//   name: '철수',
//   greet: () => {
//     console.log(`안녕하세요. 저의 이름은 ${this.name} 입니다.`);
//     // 화살표 함수의 this는 상위 컨텍스트의 this를 참조하므로 undefined이 출력된다.
//     // 이 코드에서는 전역 컨텍스트 this를 참조한다.
//   },
// };

// person.greet(); // 안녕하세요. 저의 이름은 undefined 입니다.
// //상위 greet는 name 프로퍼티가 없으니까 undefined

// const person = {
//   name: '철수',
//   greet () {
//       function sayHi () {
//           console.log(`안녕하세요. 저의 이름은 ${this.name} 입니다.`);
//       }
//       sayHi()
//   },
// };

// person.greet(); // 안녕하세요. 저의 이름은 undefined 입니다.
// //sayHi에서의 this가 속한 컨텍스트는 greet고, greet에 name 프로퍼티가 없으므로

// const person = {
//   name: '철수',
//   greet() {
//     const sayHi = () => {
//       console.log(`안녕하세요. 저의 이름은 ${this.name} 입니다.`);
//     };
//     sayHi();
//   },
// };

// person.greet(); // 안녕하세요. 저의 이름은 철수 입니다.
// sayHi메서드는 arrow니 상위인 greet가 속한 환경에 속한다. 그래서 this가 person

// const person = {
//   name: 'John',
//   friends: ['Jane', 'Mike'],

//   printFriends_wrong() {
//     this.friends.forEach(function (friend) {
//       console.log(this);
//       console.log(this.name + ' knows ' + friend); // this는 window
//     });
//   },

//   printFriends_right() {
//     //컨텐스트는 실행되는 공간!
//     this.friends.forEach((friend) => {
//       console.log(this);
//       console.log(this.name + ' knows ' + friend); // 정상 작동
//       console.log('------------끝-----------------');
//     });
//   },
// };

// person.printFriends_wrong();
// // person.printFriends_right();

const person = {
  name: 'John',
  friends: ['Jane', 'Mike'],

  printFriends_wrong() {
    console.log(this);
    this.friends.forEach(function (friend) {
      console.log(this);
      console.log(this.name + ' knows ' + friend); // this는 window
    });
  },

  printFriends_right() {
    this.friends.forEach((friend) => {
      console.log(this.name + ' knows ' + friend); // 정상 작동
    });
  },
};

person.printFriends_wrong();
// person.printFriends_right()
