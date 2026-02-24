// 조건문
const score = 90;

if (score >= 80) {
  console.log("✅합격");
}

if (score >= 95) {
  console.log("✅합격");
} else {
  console.log("🚫불합격");
}

let grade = "F";
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}
console.log(`⚠️학생의 등급은 ${grade}입니다.`);
console.log("조건문 끝!");

score >= 60 ? console.log("✅합격") : console.log("🚫불합격");

if (0) {
  console.log("✅true");
} else {
  console.log("🚫false");
}

const userInput = ""; // 사용자 입력값
if (!userInput) {
  //사용자 입력 값이 false이면
  console.log("값을 입력해주세요.");
}
