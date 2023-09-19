const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// 구조분해할당 - 배열데이터를 변수에 할당 =======================
const [a, b, c] = arr;

console.log(a, b, c); // 1 2 3

// 각각의 변수가 미리 할당되어있을경우
let e = 5;
let f = 6;

const arr2 = [1, 2, 3];

// const d = arr2[0]

// 구조분해"재할당" =========================================
[, e, f] = arr2;
console.log(e, f); // 1 2 3

//나머지할당
const arr3 = [6, 7, 8];
const [g, ...rest] = arr3;

console.log(g, rest); // 6 [7, 8]

// 객체 구조 분해 할당 ========================================
const abc = {
  ee: 1,
  ff: 2,
  gg: 3,
};

// 구조분해할당
const { ee = 4, ff: free, kk: kkk = 10 } = abc;
// ee = 4 :임시값

console.log("ee, free, kkk : " + ee, free, kkk); // 1 2 10

//선택적 체이닝 ===============================================
let user = null; // 정보가없는사용자

// console.log(user.name); // error
//  ?  :  유효한지확인
console.log(user?.name); // undefined

// ex

let user2 = {
  name: "winter",
  age: 2,
  address: {
    city: "seoul",
    zipcode: "123456",
  },
};

let user3 = {
  name: "fall",
  age: 3,
};

function prinyCity(user) {
  // user : 매개변수
  return user.address?.city || "주소 정보가 없습니다.";
}
// user의 address값이 유효한지 확인하고 유효하지 않다면 메시지를 출력
// || : or 연산자

console.log(prinyCity(user2)); //seoul
console.log(prinyCity(user3)); // 주소정보가없습니다
