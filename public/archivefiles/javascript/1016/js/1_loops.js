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

let square = '';
let width = 6;
let height = 4;

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square);

console.log('------------');

const skhuArray = ['교양', '소프트', '영어', '사회', '미디어', '신학'];

console.log('------------');

for (let key in skhuArray) {
    console.log(key);
    console.log(`${key}:${skhuArray[key]}`);
}

console.log('------------');

const iankim = {
    name: '김이언',
    birth: 2002,
    intro: '안녕하세요. 자바스크립트프로그래밍 수업을 듣고 있는 김이언 입니다.',
}

const iankimArray = ['김이언', 2002, '안녕하세요. 자바스크립트프로그래밍 수업을 듣고 있는 김이언 입니다.']

for (let key in iankim) {
    console.log(`${key}:${iankim[key]}`)
}
for (let value of iankimArray) {
    console.log(value)
}