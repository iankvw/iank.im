//엄격모드 선언
function Book(author, pages, price, title) {
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.title = title;
}

let jsBook = new Book("개발자", 500, 15000, "자바스크립트");

document.write(jsBook.title);
