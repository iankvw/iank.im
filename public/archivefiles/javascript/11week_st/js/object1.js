// 엄격모드 선언
// const obj = {};
// obj.name = '개발자';
// obj.age =  20;
// document.write(obj.name)
// obj.add ="IT";
// document.write(obj.add)
function Book(author,pages,price,title){
	this.author = author;
	this.pages = pages;
	this.price = price;
	this.title = title;
}

jsBook = new Book("개발자",500,15000,"자바스크립트")


console.log(jsBook.title)

let book = {
	title: "자바스크립트",
	author: "개발자",
	pages: 500,
	info: function(){
		console.log(this.title + "책의 분량은 " + this.pages + "쪽입니다.")
	}
}

book.field = "IT"
console.log(book.field)
console.log(book.info())

let iankim = {
	name: "김이언",
	name_eng: "iankim",
	age: 25,
	info: function(){
		console.log(this.name + "은 " + this.age + "살입니다.")
	}
}

console.log(iankim.name)
console.log(iankim.info())