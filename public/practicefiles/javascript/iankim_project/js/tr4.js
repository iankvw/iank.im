async function tr4() {
  const input = Number(prompt("USD 단위의 숫자를 입력해주세요."))
  const response = await fetch("https://api.frankfurter.dev/v1/latest?from=USD&to=KRW")
  const data = await response.json()
  const rate = Number(data.rates.KRW)
  const output = Math.floor(input * rate)
  alert(`${input}달러 = ${output}원 입니다.`)
}