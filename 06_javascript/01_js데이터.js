// ====== String (문자열) ======

const string1 = "hello1"; // 큰따옴표가능
const string2 = "hello2"; // 작은따옴표가능
const string3 = `hello3 ${string1} ${1 + 1}`; // 백틱가능

console.log(string1, string2, string3);

// ====== Number ========

const number = 123;
const negative = -123;
const float = 0.123;

console.log(number, negative, float);
console.log(number + 1);
console.log(number + negative);
console.log(number + float);

// type of
const number2 = -123.123;
console.log(number2 + undefined);
console.log(typeof (number2 + undefined));

// number 변환
const a = 0.1;
const b = 0.2;

console.log(a + b);
console.log((a + b).toFixed(1));
// toFixed() : ()자리수까지 소숫점 고정해주는 메소드, 문자열로 반환됨
console.log(typeof (a + b).toFixed(1));
console.log(Number((a + b).toFixed(1)));
// Number() : 숫자로 반환
console.log(typeof Number((a + b).toFixed(1)));

// ====== boolean(참, 거짓) =======
const truthy = true;
const falsy = false;

if (truthy) {
  console.log("truthy");
}

// ====== null & undefined ======
// null : 의도적으로 데이터를 할당하지않음
// undefined : 데이터가 할당되지않음

// null
let year = null;
console.log(year);
year = 20; // 재할당 ( let 선언하지않음 )
console.log(year);

// undefined
let call;
console.log(call);
call = "abc";
console.log(call);

const user = {
  name: "kim",
  age: 20,
  height: 170,
  email: null,
};
console.log(user.name, user.age, user.height);
console.log(user.email); //null
console.log(user.weight); //undefined

// ====== Array ======
//  순서(index)가있는 데이터요소(element)의 집합

const animal = ["dog", "cat", "fish"];

console.log(animal);
console.log(animal[0], animal[1], animal[2]);
console.log(animal.length);
console.log(animal[animal.length]);
console.log(animal[animal.length - 1]);

// ========= object =========
// key와 value로 구성된 프로퍼티의 순서가없는 집합
const user2 = {
  // ( key : value ) => property
  name: "abcd",
  age: 30,
};
console.log(user2);
console.log(user2.name);

console.log(user2["name"]);
console.log(user2["age"]);

// 객체데이터에 접근하기 - 점표기, 대괄호표기
const userA = {
  name: "A",
  age: "20",
};
const userB = {
  name: "B",
  age: "40",
  parent: userA,
};
console.log(userB);
console.log(userB.parent);
console.log(userB.parent.name);
console.log(userB["parent"]);
console.log(userB["parent"]["name"]);

// 배열에 객체넣기
const users = [userA, userB];

console.log(users);
console.log(users[0].name, users[1].name);
console.log(users[0]["name"]);

// ========== function ============

// 함수선언식( 기명함수 )
function printHello() {
  console.log("hello");
}

printHello();

console.log(printHello());

// 함수표현식 (익명함수)
const getNumber = function () {
  return 123;
};

console.log(getNumber);
console.log(typeof getNumber); // function
console.log(getNumber());
console.log(typeof getNumber()); // number

// ============== type conversion 형변환 ===========
const aa = 1;
const bb = "1";
console.log(aa == bb); //동등연산자 (형변환됨)
console.log(aa === bb); //일치연산자 (형변환X)

const cc = false;
const dd = "0";
console.log(cc == dd);
console.log(cc === dd);

// truthy (참같은값) & falsy (거짓같은값)

if (true) {
  console.log("true");
}

// 데이터 타입 확인 (type of)

console.log(typeof "123");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});
// console.log(typeof [].constructor);
