function test1() {
  //for문
  //1~10 정수 출력하기 프로그램
  for (let i = 1; i <= 10; i++) {
    document.write(i + " ")
  }
  document.write("<hr>")

  //1~10 합계를 구하는 프로그램 
  let sum = 0
  for (let i = 1; i <= 10; i++) {
    sum += i
  }
  document.write(`1~10 합계: ${sum}<hr>`)

  //1~100 짝수 합계 구하는 프로그램
  sum = 0
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      sum += i
    }
  }
  document.write(`1~100 짝수 합계: ${sum}<hr>`)

  //본인이름 글자에 색 입히는 프로그램
  const colors = ["red", "green", "blue", "pink"]
  let text = ""
  for (let color of colors) {
    document.write(`<span style='color: ${color}'>김이언</span> `)
  }
  document.write("<hr>")

  //for in 문 
  // 객체에 저장된 국어,영어,수학 성적의 합계와 평균 구하는 프로그램
  const score1 = { kor: 85, eng: 90, math: 95 }
  let sum4 = 0;
  let avg1;
  let count = 0

  for (x in score1) {
    sum4 += score1[x]
    count++
  }
  avg1 = sum4 / count
  document.write(`합계: ${sum4}, 평균: ${avg1}<hr>`)

  //for of 문 
  // 문자열의 각 문자를 읽어 세로 출력하는 프로그램
  let arr = ["j", "a", "v", "a", "s", "c", 'r', 'i', 'p', 't']
  for (v of arr) {
    document.write(v + "<br>")
  }
}