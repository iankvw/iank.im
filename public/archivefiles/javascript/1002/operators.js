/**
 *
 * Operators
 * 
 * 연산자
 
 */
/**
 * 1)덧셈
 * 2)뺄셈
 * 3)곱셈
 * 4)나눗셈
 * 5)나머지 %
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);
console.log("-----------------");
console.log(10 * (10 + 10));
/**
 * 증가와 감소
 */
let number = 1;
number++; // 많이 쓰는 operator
console.log(number);
number--; // 많이 쓰는 operator
console.log(number); //1
console.log("-----------------");
/**
 * 연산자의 위치( ++, -- 순서 위치 중요, 순서에 따라 결과가 바뀜)
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number);
result = number--;
console.log(result, number);

//++number/ --number 연습은 하지만 실제 사용은 안하는 것이 좋다
result = ++number;
console.log(result, number);
result = --number;
console.log(result, number);
console.log("-----------------");

/**
 * 숫자 타입이 아닌 타입에 +, - 를 사용하면 어떻게 될까?
 */
//변수 선언
let sample = "99"; // 숫자가아니고 스트링 99
console.log(+sample); // 99 출력
console.log(typeof +sample); // number
console.log(sample); //99
console.log(typeof sample); //string

sample = true;
console.log(+sample); // 1
console.log(typeof +sample);

sample = false;
console.log(+sample); // 0
console.log(typeof +sample);
//number , if문에서 true 대신 1 false 대신 0 사용 가능 그러나 쓰지 않는게 좋다.
console.log("-----------------");
sample = "자바스크립트";
//NaN -> Not a Number
console.log(+sample); //NaN

console.log("-----------------");
sample = "99"; // 숫자가아니고 스트링 99
console.log(-sample); //-99
console.log(typeof -sample); //number
console.log("-----------------");

/**
 *
 * 할당 연산자(assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);
number -= 10;
console.log(number);
number *= 10;
console.log(number);
number /= 10;
console.log(number);
number %= 10;
console.log(number);

/**
 *
 * 비교 연산자(assignment operator) - 개발의 꽃
 *
 * 1)값의 비교 - 거의 사용하지 않는다
 * 2)값과 타입의 비교 -사용한다
 */

//1)값의 비교 : 같다
console.log(5 == 5);
console.log(5 == "5");
console.log(0 == "");
console.log(true == 1);
console.log(false == 0);
console.log("-----------------");
//2)값과 타입의 비교 : 같다
console.log(5 === 5);
console.log(5 === "5");
console.log(true === 1);
console.log(false === 0);
console.log("-----------------");
//1)값의 비교 : 다르다
console.log(5 != 5);
console.log(5 != "5");
console.log(0 != "");
console.log(true != 1);
console.log(false != 0);
console.log("-----------------");
//2)값과 타입의 비교 : 다르다
console.log(5 !== 5);
console.log(5 !== "5");
console.log(true !== 1);
console.log(false !== 0);
//==와 !=는 사용하지 않는다
console.log("-----------------");
/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);
console.log("-----------------");
/**
 * 삼항 조건 연산자(ternary operator)
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");
//?를 기준으로 true 왼쪽 false 오른쪽 "10이 0보다 크다" 수행
console.log("-----------------");
/**
 * 논리 연산자
 * 1)&&
 * 2)||
 */
//&&조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("-----------------");
//||는 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("-----------------");
console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);
console.log("-----------------");
console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log("-----------------");
/**
 * 단축 평가 (short circuit evaluation) - 무조건 외운다
 *
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 flase면 우측 값 반환
 */
console.log(true || "자바스크립트");
console.log(false || "자바스크립트");
console.log(false && "자바스크립트");
console.log(true && "자바스크립트");
console.log("-----------------");
console.log(true && true && "자바스크립트");
console.log(true && false && "자바스크립트");
console.log("-----------------");
/**
 * 지수연산자
 */
console.log(2 ** 2); //4
console.log(10 ** 3); //1000
console.log("-----------------");
/**
 * null 연산자
 */
let name1;
console.log(name1); //undefined
name1 = name1 ?? "자바스크립트";
console.log(name1);
// 자바스크립트 ?? 좌측값이 null이거나  undefined 이면 오른쪽 값 저장
name1 = name1 ?? "html";
console.log(name1); //자바스크립트
let name2;
name2 ??= "자바스크립트";
console.log(name2); //자바스크립트
console.log(Number("HI")); //NaN
console.log(Number("안녕하세요")); //NaN
num = 10;
console.log(num.toString());
isFull = false; // 원랫값 논리형
initValue = null; // 원랫값 null형
console.log(String(isFull)); // 'false'
console.log(String(initValue)); // 'null'
console.log(Boolean(5 * 4)); //true
