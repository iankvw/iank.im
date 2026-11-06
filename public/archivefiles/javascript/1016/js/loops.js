/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('------------');

for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log('------------');

for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

// *을 이용해서 6x6의 정사각형를 출력해라

let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square);

/**
 * for...in
 */

//오브젝트
const skhu = {
    name: '프로그래머',
    year: 2026,
    group: '자바스크립트프로그래밍',
}

console.log('------------');

for (let key in skhu) {
    console.log(key);
}

const skhuArray = ['교양', '소프트', '영어', '사회', '미디어', '신학'];

console.log('------------');

for (let key in skhuArray) {
    console.log(key);
    console.log(`${key}:${skhuArray[key]}`);
}

/**
 * for...of
 */
for (let value of skhuArray) {
    console.log(value);
}

/**
 * While
 */
let number = 0;

while (number < 10) {
    number++;
}

console.log(number);

/**
 * do...while
 */
number = 0;

do {
    number++;
} while (number < 10);

console.log(number);

/**
 * break
 */
console.log('--------------');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log('-------------');
number = 0;

while(number < 10){
    if(number === 5){
        break;
    }

    number ++;
    console.log(number);
}

/**
 * continue
 */
console.log('---------------');
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}


console.log('----------------');
number = 0;

while(number < 10){
    number ++;

    if(number === 5){
        continue;
    }

    console.log(number);
}