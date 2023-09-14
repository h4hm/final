// ===============================================
// 산술연산자 ( +, -, *, /, %, ++, -- )

console.log(1 + 2); // + : 연산자 / 1,2 : 피연산자
console.log(5 - 7);
console.log(5 * 7);
console.log(10 / 2);
console.log(7 % 5);
//나머지연산자 : 배수(2n,3n ...)구할때 자주 사용함

// num을 2로 나눴을때 나머지가 0이 맞는지 (true / false)
function isEven(num) {
  // num : 매개변수
  return num % 2 === 0;
}

console.log(isEven(3));
//num에 3(인수)를 넣었을때 결과값을 출력하기
console.log(isEven(4));

// ==================================================
// 할당연산자
const A = 2;
console.log(A);
a = 3; // const 재할당 불가
console.log(A); // 2

let B = 2;
console.log(B);
B = 3; // let 재할당 가능
console.log(B); // 3
B += 3; // B = B + 3;
console.log(B); // 6
B -= 3;
console.log(B); // 3
B %= 3;
console.log(B); // 0

// =================================================
// 증감연산자 (increment / decrement) - 헷갈림주의

// <증가연산자>

// D++ : 출력 => 연산
let D = 1;
console.log("D : " + D);
console.log("D++ : " + D++);
console.log("D++ : " + D++);

// ++C : 연산 => 출력
let C = 1;
console.log("C : " + C);
console.log("++C : " + ++C); // 1
console.log("++C : " + ++C); // 1

// <감소연산자(증가연산자와 원리 똑같음)>
// let E = 1;
// console.log("E : " + E);
// console.log("E-- : " + E--);
// console.log("E-- : " + E--);

// let F = 1;
// console.log("F : " + F);
// console.log("--F : " + --F);
// console.log("--F : " + --F);

// ================================================
// 부정연산자(negative)
// !a => 해당데이터의 반대 boolean데이터를 출력

console.log("!true : " + !true); // false
console.log("!false : " + !false); // true
console.log("!1 : " + !1); // false
console.log("!0 : " + !0); // true
console.log("!!0 : " + !!0); // false

// * 객체,배열,함수의 boolean값은 true
