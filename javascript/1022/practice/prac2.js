// 40 이하의 3의 배수를 출력하시오(3단의 확장).
for (let num = 0; num <= 40; num++) {
  if (num % 3 === 0) {
    console.log(num);
  }
}

console.log('---------------------------');
for (let num = 1; num * 3 <= 40; num++) {
  console.log(num * 3);
}

console.log('---------------------------');
//1 ~ 100 중에 7의 배수의 개수를 출력하세요.
let count = 0;
for (let num = 1; num <= 100; num++) {
  if (num % 7 === 0) {
    count++;
  }
}
console.log(count);

console.log('---------------------------');
count = 0;
for (let num = 7; num <= 100; num += 7) {
  count++;
}
console.log(count);

console.log('---------------------------');
// 몫 활용
console.log(Math.floor(100 / 7));

console.log('---------------------------');
// const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7] 일 때,
// 원소가  1, 4, 5, 7인 경우를 제외하고 출력하세요
const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7];
const notLog = [1, 4, 5, 7];

console.log('---------존재유무 2중 for문 활용-------------');
for (let num of arr) {
  //notLog에 들어 있으면 -> 출력 안함
  // let inNotLog = false;
  for (notNum of notLog) {
    if (notNum === num) {
      // inNotLog = true;
      continue;
    } else {
      console.log(num);
    }
  }
}
console.log('---------존재유무 2중 for문 활용-------------');
// inner -> outer 순으로 생각
// 특수한 상황 = 들어 있는 상황 -> 출력 안함
// 하나라도 들어있으면 -> 들은 상황 -> stop (더 이상 돌 필요는 없음)
for (let num of arr) {
  let isInNotLog = false;
  for (let notLogNum of notLog) {
    if (num === notLogNum) {
      isInNotLog = true;
      break; // for문 중단
    }
  }

  // if (isInNotLog) continue; //들어 있다면 출력을 안하고
  // console.log(num); // 아니라면 출력

  if (!isInNotLog) console.log(num);
}

for (let num of arr) {
  for (notNum of notLog) {
    if (num === notNum) continue;
    console.log(num);
  }
}

console.log('---------존재유무 Set 활용-------------');
//set을 이용해서 존재성 여부 판단, 존재시 미출력
const notLogSet = new Set([1, 4, 5, 7]);
for (let num of arr) {
  if (notLogSet.has(num)) continue;
  console.log(num);
}

// const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7] 일 때,
// 원소가  1, 4, 5, 7인 경우를 제외하고 출력하세요
// const arr = [1, 2, 4, 3, 3, 5, 5, 6, 9, 7];
// const notLog = [1, 4, 5, 7];
console.log('----------for...in 안쓰게 주의 ------------');

for (let num of arr) {
  let isInNotLog = false;

  for (let notLogNum of notLog) {
    if (num === notLogNum) {
      isInNotLog = true;
      break;
    }
  }

  //들어 있지 않다면
  if (!isInNotLog) console.log(num);
}

console.log('---------------------------');
//1 ~ 9 까지의 자연수 중 제곱한 수가 10 이상 50 이하인 자연수의 리스트를 출력해보세요.
for (let num = 1; num < 10; num++) {
  if (10 <= Math.pow(num, 2) && Math.pow(num, 2) <= 50) {
    console.log(num);
  }
}

console.log('----------두 수 사이에 속한 모든 정수의 합--------------');
//두개의 숫자에 대해. 두 수 사이에 속한 모든 정수의 합을 구하시오. (ex. 2와 5를 입력받는다면 2 + 3 + 4 + 5 = 14)
let num1 = 5,
  num2 = 2,
  result = 0;
for (num1; num1 <= num2; num1++) {
  result += num1;
}
console.log(result);

console.log('----------두 수 사이에 속한 모든 정수의 합22--------------');

//num1 이 작다는 보장이 없음 + 수가 같은 경우도 고려 ( 케바케를 항상 고려해야 함 )
if (num1 > num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
}

result = 0;
for (let num = num1; num1 <= num2; num1++) result += num1;
console.log(result);

console.log('---------------------------');
//2의 배수 혹은 3의 배수를 제외하고 1~30까지 숫자를 출력하시오.
//2의 배수가 아니고 3의 배수가 아니라면 출력해라
for (let i = 1; i <= 30; i++) {
  if (!(i % 2 == 0 || i % 3 == 0)) {
    console.log(i);
  }
}

// T F / F T / T T -> 먼저, T 0인거 제거 그 후 0 T 제거 이렇게 생각
for (let i = 1; i <= 30; i++) {
  if (!(i % 2)) continue;
  if (!(i % 3)) continue;
  console.log(i);
}

console.log('------------2,3 배수 제거-----------');

// 어차피 평가니까(2의 배수 or 3의 배수를 제외해라)
// !2의 배수 and !3의배수 -> 출력
for (let i = 1; i <= 30; i++) {
  if (i % 2 && i % 3) console.log(i);
}

console.log('---------------------------');
// 자연수 n이 주어졌을 때, n이 소수인지 판단하시오.
// 소수가 아닌 수 <-> 1과 n 이외의 어떠한 수로 나눠 떨어지는 수 (하나라도 해당되면 소수가 아님)
// 2~ n-1로 나눠보고 -> 나눠진다면 -> 소수가 아님

// k !== 1 or k ! == target

// 특수한 경우 2를 고려한다면, target이 미포함이라 걸러지게 됨

let target = 2;

let k = 0;
let isPrime = true;

for (let num = 2; num < target; num++) {
  if (target % num === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? '소수' : '소수가 아님');

//8번
people = {
  name: ['jun', 'ken', 'alex'],
  age: [15, 26, 37],
  gender: ['M', 'F', ''],
};

// 위에처럼 보기보다는 객체단위로 보는게 효율적임
// 배열 안에 객체를 넣기
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



for (person of people) {
  console.log(person);
  for (key in person) {
    console.log(`${key} : ${person[key]}`);
  }
}
console.log();

// 이름이 alex인 사람에 대한 정보를 출력하시오
for (person of people) {
  if (person.name === 'alex') {
    console.log(person);
  }
}

//이름이 alex인 사람의 나이를 출력하시오
for (person of people) {
  if (person.name === 'alex') {
    console.log(person.age);
  }
}

console.log('--------------------------');
// 이름을 활용하여 각 사람의 데이터에 쉽게 접근할 수 있도록 people 변수를 수정하시오.
// object명이 겹칠 수 있기 때문에 데이터가 많거나 겹치는경우 좋지 않지만, 일반적인 경우에는 배열안에 넣는게 편리함
people = {
  jun: {
    name: 'jun',
    age: 15,
    gender: 'M',
  },
  ken: {
    name: 'ken',
    age: 26,
    gender: 'F',
  },
  alex: {
    name: 'alex',
    age: 37,
    gender: '',
  },
};

console.log(people.jun);
