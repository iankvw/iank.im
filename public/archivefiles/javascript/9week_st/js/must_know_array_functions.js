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

console.log(resceneMembers); //리센느멤버 출력

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

//다시입력 후 작업

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

console.log(resceneMembers4); //
console.log(resceneMembers4 === resceneMembers); 

console.log([
    ...resceneMembers,
] === resceneMembers); 
                       

//유용한 함수
// join()
console.log(resceneMembers.join());
console.log(resceneMembers.join('/'));
console.log(resceneMembers.join(', ')); 

// sort()
// 오름차순
resceneMembers.sort(); 
console.log(resceneMembers);

console.log(resceneMembers.reverse()); 

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map()
console.log('--------------');
console.log(resceneMembers.map((x) => x));
console.log(resceneMembers.map((x) => `리센느: ${x}`));

console.log(resceneMembers.map((x) => {
    if (x === '메이') {
        return `: ${x}`;
    } else {
        return x;
    }
}));
console.log(resceneMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => true)) 
console.log(numbers.filter((x) => false))

console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

//다음주에 작업
// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(resceneMembers.reduce((p, n) => p + n.length, 0))