for (let i = 0; i < 5; i++) {
  console.log(`${i}번째 실행중...`);
}

const student = ["김완수", "김태희", "송혜진", "신수진", "임은혜"];
const greeting = (username) => {
  console.log(`안녕하세요, ${username}님!!!💕`);
};

for (let i = 0; i < student.length; i++) {
  greeting(student[i]);
}

student.forEach((name, idx) => {
  console.log(name, idx);
});

// 자주 사용되는 배열함수 실습
const names = ["alice", "bob", "Charlie", "david"];

// map: 기존 배열을 조작하여 새로운 배열을 리턴
const upperNames = names.map((name) => name.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

// 미션: 각 이름 뒤에 💫이모지가 추가된 새로운 배열을 콘솔에 출력
const starName = names.map((name) => name + "💫");
console.log("🚀 ~ starName:", starName);

// filter: 배열 안의 요소 중 조건을 만족하는 요소들로 새로운 배열 리턴
// 이름 글자 수가 5자 이상인 요소
const filterNames = names.filter((name) => name.length >= 5);
console.log("🚀 ~ filterNames:", filterNames);

// find: 배열의 요소 중 조건을 만족하는 첫번째 요소를 리턴, 조건을 만족하는 요소가 없으면 undefind를 리턴
const findName = names.find((name) => name.length >= 5);
console.log("🚀 ~ findName:", findName);

// some: 배열의 요소 중 하나라도 조건을 만족하면 true, 아니면 false 리턴
const someName = names.some((name) => name.length >= 5);
console.log("🚀 ~ someName:", someName);

// every: 배열의  모든 요소가 조건을 만족해야만 true, 아니면 false 리턴
const everyName = names.every((name) => name.length >= 5);
console.log("🚀 ~ everyName:", everyName);

// spread syntax
const mbtiTypes = ["INTP", "ISFJ", "ENTJ"];
console.log("🚀 ~ mbtiTypes:", mbtiTypes);

const addMbtiTypes = ["ISTJ", ...mbtiTypes];
console.log("🚀 ~ addMbtiTypes:", addMbtiTypes);

const todoItem = {
  id: 123,
  todo: "JS공부하기",
  isComplete: false,
};
console.log("🚀 ~ todoItem:", todoItem);

const setTodoItem = {
  ...todoItem,
  memo: "집에 가고싶다💫",
  isComplete: true, // 이미 존재하는 키값인 경우에는 수정이 이루어지므로 키값은 고유하게 작성해야한다.
};
console.log("🚀 ~ setTodoItem:", setTodoItem);
