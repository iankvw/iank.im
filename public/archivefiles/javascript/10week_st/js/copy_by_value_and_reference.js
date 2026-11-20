/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 원이 입니다.';
console.log('--------------');
console.log(original);
console.log(clone);

let originalObj = {
    name: '원이',
    group: '리센느',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('----------');

originalObj['group'] = '자바스크립트';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name: '홍길동',
    group: '자바스크립트',
};
cloneObj = {
    name: '홍길동',
    group: '자바스크립트',
};
console.log(originalObj === cloneObj);

const woni1 = {
    name: '원이',
    group: '리센느',
}
const woni2 = woni1;
const woni3 = {
   name: '원이',
    group: '리센느',
}

// true
console.log(woni1 === woni2);
// false
console.log(woni1 === woni3);
// false
console.log(woni2 === woni3);

/**
 * Spread Operator
 */
const woni4 = {
    ...woni3,
};
console.log(woni4);

console.log(woni4 === woni3);

const woni5 = {
    year: 2026,
    ...woni3,
};
console.log(woni5);

const woni6 = {
    name: '자바스크립트',
    ...woni3,
};
console.log(woni6);

const woni7 = {
    ...woni3,
    name: '자바스크립트',
}
console.log(woni7);

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);