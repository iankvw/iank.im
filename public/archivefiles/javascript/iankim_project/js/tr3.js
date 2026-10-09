function tr3() {
  const input = Number(prompt("°F 단위의 숫자를 입력해주세요."))
  const output = (input - 32) / 1.8
  alert(`${input}°F = ${output}°C 입니다.`)
}