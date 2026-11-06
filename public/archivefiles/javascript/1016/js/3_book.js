function test3() {
  let temp = console.log
  console.log = function (msg) { document.write(msg + "<br>") }
  document.write("<pre>")

  // 교재 179p 예제 연습
  // 1부터 N까지 더하기

  let output = 0
  let n = Math.floor(Math.random() * 100)
  for (let i = 1; i <= n; i++) {
    output += i
  }
  console.log(`1~${n}까지 숫자를 모두 더하면 ${output}입니다.`)

  // 교재 188p 예제 연습
  // 중첩반복문 별찍기

  output = ''

  for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
      output += '*'
    }
    output += '\n'
  }

  console.log(output)

  // 교재 189p 예제 연습

  output = ''

  for (let i = 1; i < 15; i++) {
    for (let j = 15; j > i; j--) {
      output += ' '
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      output += '*'
    }
    output += '\n'
  }

  console.log(output)

  // 역삼각형

  output = ''

  for (let i = 14; i >= 1; i--) {
    for (let j = 15; j > i; j--) {
      output += ' '
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      output += '*'
    }
    output += '\n'
  }

  console.log(output)

  document.write("</pre>")
  console.log = temp
}