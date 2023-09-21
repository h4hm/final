// 함수 선언문 =======================================================
function hello() {
  console.log("hello");
}

// 함수 표현식
let world = function () {
  console.log("world");
};

hello(); // hello
world(); // world

// 호이스팅
// 함수 선언문이 코드의 최상단으로 끌어올려진다.

hello2(); // hello

function hello2() {
  console.log("hello2");
}
// 함수선언문은 선언하기전에 호출해도 정상적으로 실행된다.
//  ex) 아래쪽에 함수들을 몰아서 선언해두고 위에서 호출만 하는방식

// world();

// let world = function () {
//   console.log("world");
// }; // error

//함수표현식은 호이스팅이 일어나지 않는다.

// => 선언문을 사용하는것이 더 나은방식

// returen and exit ======================================
// return : 호출한곳으로 값을 반환, 함수가 종료된다.

function okay1() {
  return "okay1"; // 종료
  console.log("okay1"); // 실행되지않음
}

function okay2() {
  return; // undefined
}
function okay3() {
  return 1; //종료
  return 2; // 실행되지않음
}
function okay4() {
  console.log("1");
  return 2; // undefined , 종료
  console.log("2"); // 실행되지않음
}

console.log("===== return and exit =====");
console.log("okay1 :", okay1());
console.log("okay2 :", okay2());
console.log("okay3 :", okay3());
console.log("okay4 :", okay4());
