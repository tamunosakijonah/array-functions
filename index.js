//question 1
//mutation arrays are arrays that change the original array e.g unshift(),splice(),sort(),push(),pop()
//mon-mutation arrays do not change the original array,instead they return a new array e.g slice(),concat(),map().filter(),

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

const items = [700,0,7,-12,70,-31,100,1] //input value
items.sort((a,b) =>{
    return a-b
})
console.log(items)
let result = items.pop()
console.log(result)


//question 5
ages=[5,10,15] //input value
const AgeTimesIndex =ages.map((age,index)=>{
    return age*index
})
console.log(AgeTimesIndex)