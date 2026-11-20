
/**
 * Class Keyword
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

// constructor - 생성자

const name1 = new IdolModel('이름1', 2021);
console.log(name1);
const name2 = new IdolModel('이름2', 2022);
console.log(name2);
const name3 = new IdolModel('이름3', 2023);
console.log(name3);
const name4 = new IdolModel('이름4', 2024);
console.log(name4);
const name5 = new IdolModel('이름5', 2025);
console.log(name5);
const name6 = new IdolModel('이름6', 2026);
console.log(name6);

console.log(name3.name);
console.log(name3.year);

console.log(name3.sayName());
console.log(name5.sayName());

console.log(typeof IdolModel);
console.log(typeof name3);