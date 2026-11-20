let woni = {
    name: '원이',
    group: '리센느',
    dance: function () {
        return `${this.name}가 춤을 춥니다.`
    }
}

console.log(woni)
console.log(woni.name)
console.log(woni['name'])

const key = 'name'
console.log(woni[key])


const nameKey = 'name'
const nameValue = '원이'

const groupKey = 'group'
const groupValue = '리센느'

const woni2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`
    }
}
console.log(woni2)
console.log(woni2.dance())


let ian = {
    name: '이언',
    univ: '성공회대',
    code: function () {
        return `${this.name}이가 코딩을 합니다.`
    }
}

console.log(ian)
let key2 = 'code'
console.log(ian[key2])


woni2['group'] = '자바스크립트'
console.log(woni2)

woni2['englishName'] = 'won i'
console.log(woni2)

delete woni2['englishName']
console.log(woni2)


const gildong = {
    name: '홍길동',
    group: "리센느"
}
console.log(Object.keys(gildong))
// gildong = {}

const skhu = {
    name: '성공회대학교',
    est: 1914,
    addr: "구로구 항동",
    intro: function () {
        return `${this.name}는 인권을 존중하는 학교입니다.`
    }
}
console.log(skhu)
skhu['tel'] = '02-2610-4114'
console.log(skhu)