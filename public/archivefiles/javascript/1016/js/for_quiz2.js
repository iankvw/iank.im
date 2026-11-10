function test2() {
  //for 문으로 2단 구구단 프로그램  
  for (let i = 1; i <= 9; i++) {
    document.write("2 * " + i + " = " + (2 * i) + "<br>");
  }
  document.write("<hr>");

  //이중 for 문으로 전체 구구단 프로그램 
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      document.write(i + " * " + j + " = " + (i * j) + " ");
    }
    document.write("<br>");
  }
  document.write("<hr>");

  //이중 for 문으로 전체 구구단 세로로 출력하는 프로그램 
  for (let i = 1; i <= 9; i++) {
    for (let j = 2; j <= 9; j++) {
      document.write(j + " * " + i + " = " + (i * j) + " ");
    }
    document.write("<br>");
  }
  document.write("<hr>");

  //이중 for 문으로 전체 구구단 세로로 출력하는 프로그램 – 테이블 적용 
  document.write("<table border='1' style='border-collapse: collapse; text-align: center;'>");
  document.write("<tr>");
  for (let j = 2; j <= 9; j++) {
    document.write("<th style='padding: 5px 10px; background-color: #f2f2f2;'>" + j + "단</th>");
  }
  document.write("</tr>");
  for (let i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (let j = 2; j <= 9; j++) {
      document.write("<td style='padding: 5px 10px;'>" + j + " * " + i + " = " + (j * i) + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  document.write("<hr>");

  //while 문으로 숫자 5번 출력하기
  let count = 1;
  while (count <= 5) {
    document.write("숫자: " + count + "<br>");
    count++;
  }
  document.write("<hr>");

  //while 문으로 1-10까지의 정수 합계
  let num = 1;
  let sum = 0;
  while (num <= 10) {
    sum += num;
    num++;
  }
  document.write("1~10까지의 합계: " + sum + "<br>");
}