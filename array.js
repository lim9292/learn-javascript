const daysOfWeek = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
console.log("🚀 ~ daysOfWeek:", daysOfWeek);

console.log("오늘 요일은? ", daysOfWeek[1]);
console.log("내가 좋아하는 요일은? ", daysOfWeek[4]);

const student = ["김완수", "김태희", "송혜진", "신수진", "임은혜"];
console.log("students 수(size)? ", student.length);
console.log(`내 이름은 ${student[4]} 입니다.`);

const student2 = {
  name: "후츠릿",
  mbti: "ENTJ",
  isMale: false,
  subjects: ["HTML", "CSS", "JavaScript"],
};

console.log("student2", student2);
console.log(
  `이름: ${student2.name}, MBTI: ${student2.mbti}, 성별: ${student2.isMale}, 과목: ${student2.subjects}`,
);
