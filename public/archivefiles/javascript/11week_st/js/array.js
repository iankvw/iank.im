//let myArray = new Array();
 //let numbers1 =['one', 'two', 'three', 'four'];
//let numbers2= new Array('one', 'two', 'three', 'four');
let seasons = ['봄','여름','가을','겨울']
seasons.length  // 4

for(let i=0 ; i<seasons.length ; i++){
	console.log(seasons[i]);
}

let triple = [3, 6, 9];
for(let i=0 ; i<triple.length ; i++){
	console.log(triple[i]);
}

let nums = ["1","2","3"];
let chars = ["a","b","c","d"];
let num1 = nums.concat(chars);
let num2 = chars.concat(nums);
document.write(`<br>  ${num1}`);
document.write(`<br>  ${num2}`);
num1.join() 
document.write(`<br>  ${num1.join("-")}`);
nums.push("4","5")   
document.write(`<br>  ${nums}`);
nums.unshift("0")
document.write(`<br>  ${nums}`);
let study = [ "html", "css", "javascript" ]; 
study.pop()  
document.write(`<br>  ${study}`); //html, css
study.shift()  
document.write(`<br>  ${study}`); //css

let numbers = [0,1,2,3,4,5]
numbers.splice(2) 
document.write(`<br>  ${numbers}`);  // 0 1

let study1=["html", "css", "web","javascript"]
study1.splice(2,1)  
document.write(`<br>  ${study1}`); //html,css,javascript

study1.splice(2,1,"js") 
document.write(`<br>  ${study1}`); //html,css,js

let colors = ["red","green","blue","white","black"]
col = colors.slice(2)  
document.write(`<br>  ${colors}`); //red,green,blue,white,black
document.write(`<br>  ${col}`);//blue,white,black

let colors2 = colors.slice(1,4)
document.write(`<br>  ${colors2}`);//green,blue,white
document.write(`<br>  ${colors}`);