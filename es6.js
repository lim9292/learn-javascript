// Default Parameter
const greeting = (username = "사용자") => {
  // 실행할 로직
  console.log(`안녕하세요, ${username}님!!🎀`);
};

greeting();
greeting("임은혜");

// 논리연산자 (And, Or, Not)
const user = {
  isLoggedIn: true, // 로그인 여부
  role: "admin", // 다른 값으로 "user", "guest"
};

// 관리자 페이지 접근 코드
if (user.isLoggedIn && user.role === "admin") {
  // login 상태이면서 role이 admin인 경우 실행
  console.log("✅관리자 페이지에 접근할 수 있습니다.");
} else {
  console.log("⚠️관리자 페이지에 접근할 수 없습니다.");
}

const person = {
  age: 17,
  isParentPermission: false, // 부모님 허락 여부
};

const canAccess = person.age >= 18 || person.isParentPermission;
console.log("🚀 ~ canAccess:", canAccess);

if (canAccess) {
  // 성인이거나, 부모님의 허락을 받은 경우
  console.log("✅접근 가능");
} else {
  console.log("⚠️접근 불가");
}

const adult = person.age >= 18 && "성인";
console.log("🚀 ~ adult:", adult);

// 구조분해할당
const colors = ["red", "blue", "green"];
// const first = color[0];
// const second = color[1];

const [second, first] = colors;
console.log("🚀 ~ first:", first);
console.log("🚀 ~ second:", second);

const todoItem = {
  id: 123,
  todo: "React학습",
  isComplete: false,
};

// const id = todoItem.id;
// const todo = todoItem.todo;
const isComplete = "🙃🙃🙃메롱🙃🙃🙃";

const { todo, id, isComplete: todoIsComplete } = todoItem;

console.log("🚀 ~ todoItem.id:", todoItem.id);
console.log("🚀 ~ todoItem.todo:", todoItem.todo);
console.log("🚀 ~ todoItem.isComplete:", todoItem.isComplete);
