let student = '본인이름'
console.log(student)
student = '홍길동'
console.log(student)
// let student = '홍길동'
// Identifier 'teacher' has already been declared

const teacher = '본인이름2'
// teacher = '홍길동2'
console.log(teacher)

let a = 5
let font1 = "돋움"
let _price = 30000
let max_width = 600
let maxWidth = 800

// document.write(a+"<br>")

showPage1 = () => {
  document.getElementById("page1").style.display = "block"
  document.getElementById("page2").style.display = "none"
}
showPage2 = () => {
  document.getElementById("page1").style.display = "none"
  document.getElementById("page2").style.display = "block"
}

let introduce = [
  `이번 학기에는 ${sub} 프로그래밍, 네트워크프로그래밍, 백엔드프로그래밍 및 컴퓨터네트워크를 수강하고 있습니다.`,
  "평소 프론트엔드와 백엔드 개발뿐만 아니라 리눅스와 도커를 활용한 서버 관리에도 큰 흥미를 느끼고 있습니다.",
  "평소 개인 프로젝트로 서버 환경을 구축하고 관리해 온 경험을 살려 실습 과정에도 적극적으로 임하고 있습니다.",
  "클라우드플레어와 오라클 클라우드를 활용해 개인 서버 환경을 구축하고 안정적인 도메인 및 인프라를 운영하고 있습니다.",
  `${sub}를 활용하여 크롬 확장 프로그램 개발 등 일상 속 유용한 웹 유틸리티를 직접 구현해 본 경험이 있습니다.`,
  "수업 시간에 배운 내용들을 바탕으로 실생활에 유용한 웹 애플리케이션을 직접 구현해보고자 합니다.",
  "개발 과정에서 마주하는 다양한 기술적 도전 과제들을 성실하게 풀어나가며 꾸준히 역량을 넓혀가겠습니다.",
  "이번 학기 부여된 과제와 프로젝트를 성실히 완수하여 의미 있는 성취를 거두고 싶습니다.",
  "다들 이번 학기와 앞으로 남은 학기 모두 좋은 성과를 거두기를 바라며, 잘 부탁드립니다."
]

function printIntroduce(arr) {
  let str = ""
  arr.forEach(element => str += element + "<br><br>")
  return str
}

document.getElementById("introArea").innerHTML = printIntroduce(introduce)