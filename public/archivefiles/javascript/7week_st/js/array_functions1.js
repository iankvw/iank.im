/**
 * Array Functions
 */
let resceneMembers = [
    '원이',
    '리브',
    '미나미', 
    '메이', 
    '제나',
];

console.log(resceneMembers);

// push()
console.log(resceneMembers.push('자바스크립트'));
console.log(resceneMembers);

console.log('---------------_');
// pop()
console.log(resceneMembers.pop());
console.log(resceneMembers);

console.log('---------------_');
// shift()
console.log(resceneMembers.shift());
console.log(resceneMembers);

// unshift()
console.log(resceneMembers.unshift('원이'));
console.log(resceneMembers);

console.log('---------------_');

// splice()
console.log(resceneMembers.splice(0, 3))
console.log(resceneMembers);

resceneMembers = [
    '원이',
    '리브',
    '미나미', 
    '메이', 
    '제나'
];
console.log(resceneMembers);

// concat()
console.log(resceneMembers.concat('자바스크립트'));
console.log(resceneMembers);

// slice()
console.log(resceneMembers.slice(0, 3));
console.log(resceneMembers);

// spread operator
let resceneMembers2 = [
    ...resceneMembers, 
];
console.log(resceneMembers2); 


let resceneMembers3 = [
    resceneMembers,
];
console.log(resceneMembers3);


console.log('--------------');
let resceneMembers4 = resceneMembers;

console.log(resceneMembers4); 
console.log(resceneMembers4 === resceneMembers);

console.log([
    ...resceneMembers,
] === resceneMembers);

//유용한 함수 - 9주차부터 학습