//조건문 ======================================================

//반복문 ======================================================

// for문 =================================

// for (초기화; 조건; 종료식) {
//   실행문;
// }
for (let i = 0; i < 10; i++) {
  console.log(i); // 0부터 9까지 출력
}

// 예시
const animalsA = ["dog", "cat", "fish"];

console.log(animalsA[0], animalsA[1], animalsA[2]);

for (let i = 0; i < animalsA.length; i++) {
  console.log(animalsA[i]); // dog, cat, fish
}

//for of 문 ===================================================

// 배열의요소를 하나씩 꺼내 변수에 할당
// // for (변수 of 배열) {
//   실행문;
// }

for (let animal of animalsA) {
  console.log("for of문 : " + animal);
}

// 예시2

const users = [
  {
    name: "winter",
    age: 2,
  },
  {
    name: "fall",
    age: 3,
  },
  {
    name: "river",
    age: 4,
  },
];

console.log(users[0], users[1], users[2]);

console.log("====== for ======");

for (i = 0; i < users.length; i++) {
  console.log(users[i]);
}

console.log("===== for of =====");

for (let user of users) {
  console.log(user);
  console.log(user.name);
  console.log(user.age);
}

//for in 문 ====================================================================

// 객체의 속성을 하나씩 꺼내 변수에 할당
// for(변수 in 객체) {실행될코드}

const user1 = {
  name: "summer",
  age: 2,
  city: "seoul",
};

console.log("===== for in =====");

for (let key in user1) {
  console.log("key : " + key);
  console.log("value : " + user1[key]);
}

//while 문 ====================================================================

// 무한반복, 거짓의조건을 명확하게명시해야함.
// while (조건) {실행될코드}
console.log("===== while =====");

let k = 0;
while (k < 10) {
  console.log(k);
  k++;
}

// do while ================================================================
// 코드를 먼저 진행하고 조건을 검사
// do {실행될코드} while (조건);

console.log("===== do while =====");

let g = 0;
do {
  console.log(g);
  g++;
} while (g < 10); //조건이 false여도 최소 한번은 실행됨
