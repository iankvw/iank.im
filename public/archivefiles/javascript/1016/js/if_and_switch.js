let number = Math.floor(Math.random() * 100)

console.log("number: " + number)

if (number % 5 === 0) {
  console.log("number 변수는 5의 배수")
} else if (number % 4 === 0) {
  console.log("number 변수는 4의 배수")
} else if (number % 3 === 0) {
  console.log("number 변수는 3의 배수")
} else if (number % 2 === 0) {
  console.log("number 변수는 2의 배수")
} else {
  console.log("2, 3, 4, 5의 배수가 아닙니다.")
}


const eng = "sat";
let kor;

switch (eng) {
  case "mon":
    kor = "월";
    break;
  case "tue":
    kor = "화";
    break;
  case "wed":
    kor = "수";
    break;
  case "thu":
    kor = "목";
    break;
  case "fri":
    kor = "금";
    break;
  default:
    kor = "주말";
}

console.log(kor);