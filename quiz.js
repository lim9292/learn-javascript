/* Q1. 다음 함수를 화살표 함수로 변환하세요
function add(a, b) {
  return a + b;
}
*/

const add = (a, b) => a + b;
console.log(add(5, 3)); // 예상 결과: 8

/* Q2. 두 개의 숫자를 입력받아 그 차이를 계산하는 함수를 화살표 함수로 작성하세요.*/

const minus = (a, b) => a - b;
console.log(minus(60, 20)); // 예상 결과: 40

/* Q3. 다음 함수가 주어졌을 때, 이 함수를 호출하여 "안녕하세요, [이름]님. 당신의 나이는 [나이]세입니다."라는 메시지를 출력하는 코드를 작성하세요.*/

const introduce = (name, age) => {
  return "안녕하세요, " + name + "님. 당신의 나이는 " + age + "세입니다.";
};

console.log(introduce("김철수", 25)); // 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."

/* Q4. 샌드위치 주문 함수를 작성하세요. 아래 콘솔 출력 결과를 보고 orderSandwich 함수를 화살표 함수로 구현하세요. */
//orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다

const orderSandwich = (type) => {
  if (type == "basic") {
    console.log("case 1");
    return "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
  } else if (type == "vegan") {
    console.log("case 2");
    return "🥖 + 🥬 + 🍅 + 🥑 + 🥒";
  } else {
    console.log("case 3");
    return "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
  }
};

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich("basic"));
console.log("비건 샌드위치 주문: " + orderSandwich("vegan"));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/

/* Q5. 5부터 1까지 카운트다운하는 for문을 작성하세요. */
for (i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("예상 출력: 5 4 3 2 1");

/* Q6. 다음 코드에서 각 숫자에 1을 더한 새로운 배열을 만들어 주세요.(map) */
const numbers = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers.map((numbers) => numbers + 1);
console.log(incrementedNumbers);
// 예상 결과: [2, 3, 4, 5, 6]

/* Q7. 다음 코드에서 짝수만 필터링된 새로운 배열을 만들어 주세요 (filter) */
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter((numbers2) => numbers2 % 2 == 0);
console.log(evenNumbers); // 예상 결과: [2, 4, 6]

/* Q8. 다음 코드에서 각 문제를 풀어보세요. (`find`) */

// 학생들의 정보가 담긴 배열
const students = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 21, major: "Mathematics" },
  { name: "Charlie", age: 23, major: "Physics" },
  { name: "David", age: 20, major: "Chemistry" },
  { name: "Eva", age: 22, major: "Biology" },
];

// 1. 전공이 "Physics"인 학생을 찾으세요.
const physicsStudent = students.find((students) => students.major == "Physics");
console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },

// 2. 이름이 "David"인 학생을 찾으세요.
const davidStudent = students.find((students) => students.name == "David"); // 여기에 코드를 작성하세요.
console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },
