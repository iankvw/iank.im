/**
 * Getter and Setter
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
get nameAndYear(){ //함수 정의하듯이
        return `${this.name}-${this.year}`;
    }
    set setName(name){
        this.name = name;
    }
    get getName() {
        return this.name
    }
}
 const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);
yuJin.setName = '장원영';
console.log(yuJin);

yuJin.setName = "안유진"
console.log(yuJin.getName)

const iankim = new IdolModel("김이언", 2002)
console.log(iankim)

class student {
    name;
    year;

    constructor(name, year) {
        this.name = name
        this.year = year
    }

    sayName() {
        return `안녕하세요 저는 iankim입니다`
    }
}

const student1 = new student("김이언", 2022) // 안녕하세요 저는 iankim입니다
const student2 = new student("김이언", 2023)
const student3 = new student("김이언", 2024)
const student4 = new student("김이언", 2025)
const student5 = new student("김이언", 2026)
const student6 = new student("김이언", 2027)

console.log(student1.sayName())

class book {
    bookname
    author

    constructor(bookname, author) {
        this.bookname = bookname
        this.author = author
    }

    sayName() {
        return `이 책의 이름은 ${this.bookname} 입니다.`
    }
}

const book1 = new book("자바스크립트", "홍길동")
console.log(book1.sayName())
