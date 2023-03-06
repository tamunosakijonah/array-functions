//question2
langues =['C#','Javascript','Ruby','PHP','Phyton']
addKolin = langues.push('kolin')
console.log(langues)
addJava = langues.splice(3,0,'Java')
console.log(addJava)
console.log(langues)
removeFirst= langues.shift()
console.log(removeFirst)
console.log(langues)
addfew = langues.unshift('Scaler','Swift')
console.log(addfew)
console.log(langues)
addTwo = langues.splice(3,1,'Go','Rust')
console.log(addTwo)
console.log(langues)

//question 3
let fruit = ['apple','mango','banana']
function changeFruit(fruit){
    fruit[2] = 'orange'
    return fruit
}
changeFruit()
//it will throw a type error '2' wasn't defined

//qustion 4



