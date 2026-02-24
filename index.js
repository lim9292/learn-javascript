//console.log("후츠릿 짱");

// 변수
//const username = "후츠릿";

let username = "후츠릿";
username = "임은혜";
console.log("username", username);

// 데이터ㅓ 타입
const num = 10;
console.log("🚀 ~ num:", num, typeof num);

const str = "안녕하세요";
console.log("🚀 ~ str:", str, typeof str);

const bool = true;
console.log("🚀 ~ bool:", bool, typeof bool);

const bool2 = "true";
console.log("🚀 ~ bool2", bool2, typeof bool2);

const empty = null;
console.log("🚀 ~ empty", empty);

let user; // 변수선언
console.log("🚀 ~ user:", user);

// 함수선언
function greeting() {
  console.log("안녕하세요, 임은혜님!"); // 실행할 로직
}

// 함수호출
greeting();

// 함수선언 및 호출
const helloworld = () => {
  console.log("Hello World!!!");
};
helloworld();

const greeting2 = (username2) => {
  console.log(`안녕하세요 ${username2}님!`);
};
greeting2("리리림");
greeting2("DY");

const add = (num1, num2) => {
  return num1 + num2;
};

const doubleSum = (num) => {
  return num * 2;
};

const sum = add(10, 20);
console.log("🚀 ~ sum:", sum);
const result = doubleSum(sum);
console.log("🚀 ~ result:", result);

const upperString = (str) => {
  console.log("리턴 전");
  return str.toUpperCase();
};
console.log("대문자 변환", upperString("name"));
