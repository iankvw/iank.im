/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (블리언)
 * 4) unsefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼) 최근에 생긴 타입
 *
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

/**
 * 1) Number 타입
 */

const age = 22;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("---------------------");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("---------------------");
let a1 = 10 / 0;
console.log(a1);
let a2 = -10 / 0;
console.log(a2);
console.log(typeof a1);
console.log(typeof a2);
console.log(a1 === Infinity);
console.log("---------------------");
/**
 * 2) String 타입
 */

const nameCase1 = "자바스크립트";
const nameCase2 = '"자바"스크립트';
console.log(nameCase1);
console.log(nameCase2);
console.log(typeof nameCase1);
console.log(typeof nameCase2);
const nameCase3 = "'자바' 스크립트";
console.log(nameCase3);
//"나 '를 문자열속에 넣고 싶을때 , 개행, 탭 등 사용 -> Template Literal 사용
/**
 * Template Literal : 아무 내용이나 입력 가능
 *
 * Escaping Character
 * 1) newline ->\n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다. \\
 */

const nameCase4 = "자바\n스크립트";
console.log(nameCase4);
const nameCase5 = "자바\t스크립트";
console.log(nameCase5);
const backslash = "자바\\스크립트";
console.log(backslash);
const smallQutoatuin = "자바\'스크립트\'";
console.log(smallQutoatuin);
//Escaping Character 사용 불편
const nameCase6 = `자바
스크립트
'html'    css  \\ 자바스크립트`;
console.log(nameCase6);
console.log(typeof nameCase6); //Template Literal 사용해도 string
// 스트링 값을 더하고 싶을때
const groupName = "자바스크립트";
console.log(groupName + " Javascript");
//Template Literal
console.log(`${groupName} Javascript`);
console.log("---------------------");

/**
 * 3) Boolean 타입(o/x로 생각) true와 false
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log("---------------------");

/**
 * 4) Undefined 타입
 *
 * 사용자가 직접 값을 초기화 하지 않았을때
 * 지정되는 값이다. 값을 지정안함
 * 선언만 하고 값 할당 안했을때
 * 직접 undefined로 값을 초기화 하는건 지양해야 한다. - let noInit=undefined; 이렇게 하면 안된다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);
/**
 * 5) null 타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때 개발자가 값이 없다라고 직접 입력, 개발자가 정함
 *
 */
let init = null;
console.log(init);
console.log(typeof init); // object
//이미 null 타입이 object 타입으로 작업된 프로그램이 많기 때문에 그대로 사용 중요치 않다

/**
 * 6) Symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 * object 사용시 가끔 사용 중요하지 않음
 */
const test1 = "1";
const test2 = "2";
console.log(test1 === test2); //flase 출력
const test3 = "1";
const test4 = "1";
console.log(test3 === test4); //true 출력 1===1
const symbol1 = Symbol("1");
const symbol2 = Symbol("1");
console.log(symbol1 === symbol2); // false 출력

/**
 * 7) Object 타입 : 자바스크립트는 모든게 오브젝트타입이라고 생각, 사전처럼 생각, 일반 object
 *
 * 매우 중요
 * Map
 * 키:밸류의 쌍으로 이루어져 있다.
 * key:value
 */

const student1 = {
  name: "honggildong",
  age: 24,
  hobby: "study",
};
console.log(student1);
console.log(student1["name"]); //대괄호 안에 가져오고 싶은 키값을 넣으면 value 값을 찾을 수 있다. honggildong 출력
console.log(student1["age"]);
console.log(student1["hobby"]);
console.log(typeof student1);

/**
 * 8) Array 타입(Object 타입에 속함)
 *
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */

const colorBooksArray = ["red", "yellow", "blue", "pink"];
//대괄호 안에 값을 리스트로 넣음 하나의 변수 안에 값 4개 한번에 넣음 리스트로
console.log(colorBooksArray);

/**
 * index(Array 개념에서)
 *
 * 0부터 시작한다.
 * 1씩 올라간다- red 0번부터 할당
 */

//인텍스 사용
console.log(colorBooksArray[0]); // red
console.log(colorBooksArray[3]); // pink
console.log(colorBooksArray[4]); // undefined
colorBooksArray[0] = "orange"; //0번째 값을 바꿀 수 있다.
console.log(colorBooksArray); //[ 'orange', 'yellow', 'blue', 'pink' ]
console.log(typeof colorBooksArray); //object

//funtion은 뒤에가서 설명 - function도 Array

/**
 * statinc typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다. -> C언어
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'한다
 *  -> JS : dynamic typing
 */
