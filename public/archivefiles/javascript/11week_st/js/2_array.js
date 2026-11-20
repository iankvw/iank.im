//let myArray = new Array();
//let numbers1 = ['one', 'two', 'three', 'four'];
//let numbers2 = new Array('one', 'two', 'three', 'four');
let seasons = ['봄', '여름', '가을', '겨울'];
seasons.length;  // 4

for (let i = 0; i < seasons.length; i++) {
	console.log(seasons[i]); // 봄 / 여름 / 가을 / 겨울
}

let triple = [3, 6, 9];
for (let i = 0; i < triple.length; i++) {
	console.log(triple[i]); // 3 / 6 / 9
}

let nums = ["1", "2", "3"];
let chars = ["a", "b", "c", "d"];
let num1 = nums.concat(chars);
let num2 = chars.concat(nums);
console.log(num1); // [ '1', '2', '3', 'a', 'b', 'c', 'd' ]
console.log(num2); // [ 'a', 'b', 'c', 'd', '1', '2', '3' ]
console.log(num1.join()); // 1,2,3,a,b,c,d
console.log(num1.join("-")); // 1-2-3-a-b-c-d
nums.push("4", "5");
console.log(nums); // [ '1', '2', '3', '4', '5' ]
nums.unshift("0");
console.log(nums); // [ '0', '1', '2', '3', '4', '5' ]
let study = ["html", "css", "javascript"];
study.pop();
console.log(study); // [ 'html', 'css' ]
study.shift();
console.log(study); // [ 'css' ]

let numbers = [0, 1, 2, 3, 4, 5];
numbers.splice(2);
console.log(numbers); // [ 0, 1 ]

let study1 = ["html", "css", "web", "javascript"];
study1.splice(2, 1);
console.log(study1); // [ 'html', 'css', 'javascript' ]

study1.splice(2, 1, "js");
console.log(study1); // [ 'html', 'css', 'js' ]

let colors = ["red", "green", "blue", "white", "black"];
let col = colors.slice(2);
console.log(colors); // [ 'red', 'green', 'blue', 'white', 'black' ]
console.log(col); // [ 'blue', 'white', 'black' ]

let colors2 = colors.slice(1, 4);
console.log(colors2); // [ 'green', 'blue', 'white' ]
console.log(colors); // [ 'red', 'green', 'blue', 'white', 'black' ]
