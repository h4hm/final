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
B += 3; // B = B + 3; ( + = 순서주의)
console.log(" B+= : " + B); // 6
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

// ===============================================
// 비교연산자(comarsion)

console.log(1 == "1"); // 동등연산자 ( 형변환 O ) true
console.log(1 === "1"); // 일치연산자 ( 형변환 X ) false

console.log(1 != "1"); // 부동 ( 형변환 O ) false
console.log(1 !== "1"); // 불일치 ( 형변환 X ) true

console.log(1 > 2); // false
console.log(1 >= 2); // 크거나 같다 false

console.log(1 < 2); //true
console.log(1 <= 2); // 작거나 같다true

// =================================================
// 논리연산자(logical) - && ||

// < and 연산자 : A && B => 데이터가 둘다 참이면 true 반환 >

const E = true;
const F = true;

if (E && F) {
  console.log("둘다 참이면 실행됩니다.");
}

// *거짓데이터가 있을 경우,
// 연산자를 기준으로 가정 먼저 만나는 거짓데이터 반환후 종료
console.log(true && false && true); // false 반환
console.log(1 && 2 && 0); // 0 반환
console.log("E" && 0 && "F"); // 0 반환
console.log("A" && "B" && ""); // " "

// *모두 참일경우
// 가장 마지막 데이터 출력
console.log("A" && "B" && "C"); // C

// < or 연산자 : a || b 둘중 하나만 참이면 true 반환 >
const G = false;
const H = true;

if (G || H) {
  console.log("둘중 하나라도 참이면 실행됩니다.");
}

// * 참 데이터가 있을경우
// 연산자를 기준으로 가장 먼저 만나는 참 데이터 반환후 종료
console.log(false || true); // true
console.log(0 || 1 || 3); // 1
console.log(function () {} || undefined || ""); // f () {}

// 모두 거짓일경우 마지막 데이터 반환
console.log(false || 0 || NaN);

// ====================================================
// 병합(Nullish Coalescing) 연산자 : A ?? B
// null과 undefined를 제외한 데이터 반환

const J = 0;

console.log("J : " + J);
console.log("J || 5 : " + (J || 5)); // 5
console.log(J ?? 5); // 0
console.log(null ?? 1); // 1
console.log(undefined ?? 1); //1
console.log(undefined ?? null); // null
console.log(null ?? 1 ?? 2); // 1
console.log(0 ?? 1 ?? 2); // 0

// ==============================================
// 삼항(ternary) 연산자
//  조건 ? 참 : 거짓

console.log(true ? 1 : 2); // true값을 출력하시오 : 1
console.log(false ? 1 : 2); // false값을 출력하시오 : 2

let K = 1;

if (K < 3) {
  console.log("K는 3보다 작다.");
} else {
  console.log("K는 3보다 작지않다.");
}
// if문 표현을 삼항연산자 표현으로 바꾸기
console.log(K < 3 ? "K는 3보다 작다." : "K는 3보다 작지않다.");

// 예제
function isAnimal(text) {
  return text === "고양이" ? "고양이" : "고양이아님";
  // text 가 "고양이" 인가?
  // true : "고양이" / false : "고양이아님"
}
console.log(isAnimal("고양이")); // 고양이
console.log(isAnimal("개")); // 고양이아님

// ==============================================
// 전개(spread) 연산자

// < 배열 전개 > - 순서index 전개
let L = [1, 2, 3];
let N = [4, 5, 6];

// concat메소드를 이용하여 전개하기
let M = L.concat(N);
console.log(M);

// 전개연산자를 이용하여 전개하기
console.log([...L, ...N]);

// <객체 전개> - key전개 {key:value}
let userC = {
  name: "아무개",
};

let userInfo = {
  // parent: userC,
  ...userC,
  age: 30,
  height: 140,
};

console.log(userInfo); // {name: '아무개', age: 30, height: 140}

// <함수 전개>

function sum(a, b, c) {
  console.log(a + b + c);
}

sum(1, 2, 3); // 6

const num = [1, 2, 3];

sum(num[0], num[1], num[2]); // 6

sum(...num); // 6
