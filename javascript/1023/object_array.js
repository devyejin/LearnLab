// 위에처럼 보기보다는 객체단위로 보는게 효율적임
// 배열 안에 식별하도록 넣기
// JSON형태라 많이 사용되는 형태, API에서 많이 이용됨
let people = [
  {
    name: 'jun',
    age: 15,
    gender: 'M',
  },
  {
    name: 'ken',
    age: 26,
    gender: 'F',
  },
  {
    name: 'alex',
    age: 37,
    gender: null,
  },
];

//특정한 객체를 다루기 위해 name으로 식별가능하도록 Object에 넣는다면
const objectPeople = {};

//먼저 name을 어떻게 뽑아낼지 고려
const person = people[0];
console.log(typeof person);
console.log(person);
console.log(person.name);

objectPeople[person.name] = person;

// for로 돌리기
for (const person of people) {
  const name = person.name;
  objectPeople[name] = person;
}

//아래 형태는 특정한 Object에 대한 관리가 필요한 특이 케이스에 필요해서 만들음
// for (const person of people) {
//   const name = person.name;
//   objectPeople[name] = person;
// }

console.log(objectPeople);
console.log(typeof objectPeople);
console.log(objectPeople['jun']);
