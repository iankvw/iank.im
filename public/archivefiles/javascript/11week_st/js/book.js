// 1. 생성자 함수를 이용한 Book 객체 정의하기
function Book(title, author, volume, price) {
    this.title = title;
    this.author = author;
    this.volume = volume;
    this.price = price;
}

// 2. 인스턴스 생성하기
let html = new Book('웹 표준 1', 'kim', '608', '25,000');

// 3. 여러 인스턴스 생성 및 배열에 담기
let css = new Book('웹 표준 2', 'lee', '368', '20,000');
let javascript = new Book('웹 표준 3', 'hong', '768', '30,000');

// 4. bookList 배열 만들고 위에서 만든 객체 저장
let bookList = [html, css, javascript];

// 책 제목 출력하기
document.write("<h1>책 제목으로 살펴보기</h1>");
for (let i = 0; i < bookList.length; i++) {
    document.write("<p>" + bookList[i].title + "</p>");
}

// 책 가격 출력하기
document.write("<h1>책 가격으로 살펴보기</h1>");
for (let i = 0; i < bookList.length; i++) {
    document.write("<p>" + bookList[i].price + "</p>");
}
