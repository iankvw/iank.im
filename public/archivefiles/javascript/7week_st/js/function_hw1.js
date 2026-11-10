//엄격모드 선언
//함수 선언식

function sayHello() {
    console.log("이름과 나이를 출력")
    console.log("name: 김이언, age: 25세")
    console.log(`이름은 김이언 이며 나이는 25살 입니다`)
}

sayHello();

function sayHello2(name, age) {
    console.log("이름과 나이를 출력")
    console.log(`name : ${name}, age : ${age}세`)
    console.log(`이름은 ${name} 이며 나이는 ${age}살 입니다`)
}

sayHello2("김이언", 25);


//함수표현식

const sayHello3 = function () {
    console.log("이름과 나이를 출력")
    console.log("name: 김이언, age: 25세")
    console.log(`이름은 김이언 이며 나이는 25살 입니다`)
}

sayHello3()


//파라미터

function sayHello4(...args) {
    console.log(args)
}

sayHello4("김이언", 25, 180, 80);

function transfer(...args) {
    data = "나는 "
    args.forEach(arg => {
        data += arg + ", "
    })
    data += "를 타고 집에 갈거야"
    return data
}

console.log(transfer("버스", "지하철", "택시", "자전거"))


function whatIsBigger(n1, n2) {
    if (n1 > n2) {
        return n1
    }
    else {
        return n2
    }
}

console.log(whatIsBigger(3, 5))


//반환값 - return

function getData() {
    let result1 = 3 + 2 + 1
    let result2 = 4 + 3 + 2 + 1

    return result1
    return result2 //return을 만나면 함수가 종료되기 때문에 이 코드는 실행되지 않는다.
}

const count = getData()
console.log(count) // 6


// 함수 스코프

function aFunc() {
    let name = '김이언'
    let age = 25
    function bFunc() {
        let job = '학생'
        console.log('name: ', name)
        console.log('age: ', age)
        console.log('job: ', job)
    }
    bFunc()
    console.log("name: ", name)
    console.log("age: ", age)
    // console.log('job: ', job) //자식 함수에서 선언한 변수는 부모 함수에서 사용할 수 없다.
}
aFunc()


// 익명함수

const sayHello5 = function() { console.log("안녕하세요") }


// 즉시 실행 함수

(function() { console.log("안녕하세요") })


// 파라미터 기본값

function sum(n1, n2) {
    const result = n1 + n2
    console.log('결과값: ', result)
}

sum(5) // NaN

function sum2(n1 = 0, n2 = 0) {
    const result = n1 + n2
    console.log('결과값: ', result)
}

sum2(5)
sum2(5, 10)