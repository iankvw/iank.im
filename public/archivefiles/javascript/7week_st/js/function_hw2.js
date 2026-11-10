// 콜백함수

setTimeout(function () { console.log('3초 뒤 실행') }, 3000)


// 1. 매개변수도, 반환도 없는 함수

console.log("=== 1. 매개변수도, 반환도 없는 함수 ===");

function sayHello() {
    console.log("안녕하세요! 환영합니다.");
    console.log("이름: 김이언, 나이: 25세");
}

sayHello(); // 함수 호출


// 2. 매개변수는 있지만, 반환은 없는 함수

console.log("=== 2. 매개변수는 있지만, 반환은 없는 함수 ===")

function printUserInfo(name, age) {
    console.log(`이름: ${name}, 나이: ${age}세`);
    console.log(`이름은 ${name} 이며 나이는 ${age}살 입니다.`);
}

printUserInfo("김이언", 25); // 함수 호출

function sayFood(food1, food2) {
    console.log(`오늘 먹고 싶은 음식은 ${food1}와(과) ${food2}입니다!`);
}

sayFood("치킨", "돈까스"); // 인자 전달 및 호출


// 3. 매개변수는 없지만, 반환은 있는 함수

console.log("=== 3. 매개변수는 없지만, 반환은 있는 함수 ===")

function getGrade() {
    const score = 95;
    return `점수: ${score}점 (A+ 등급)`;
}

const myGrade = getGrade(); // 반환값을 변수에 저장
console.log(myGrade);

function getLuckyNumber() {
    const luckyNum = 7;
    return luckyNum;
}

const number = getLuckyNumber();
console.log(`오늘의 행운의 숫자: ${number}`);


// 4. 매개 변수와 반환이 모두 있는 함수

console.log("=== 4. 매개 변수와 반환이 모두 있는 함수 ===")

function add(n1, n2) {
    return n1 + n2;
}

const sumResult = add(15, 25);
console.log(`15 + 25 = ${sumResult}`);

function whatIsBigger(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

const bigger = whatIsBigger(10, 20);
console.log(`10과 20 중 더 큰 수: ${bigger}`);
