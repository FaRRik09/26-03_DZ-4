// let array = ['name', 'John', 'lastname', 'Black', 'age', '23']
// let object = {}
// for (let i = 0; i < array.length; i++) {
//     if(i%2===0){
//         object[array[i]]=array[i+1]
//     }
// }
// console.log(object)

var array = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, `uioo`]
var typeNull = []
var typeStr = []
var typeNum = []
var typeUndefined = []

for (var i = 0; i < array.length; i++){
    if (array[i] === null){
        typeNull.push(array[i])
    } else if (typeof array[i] === 'string') {
        typeStr.push(array[i])
    } else if (typeof array[i] === 'number') {
        typeNum.push(array[i])
    } else if (typeof array[i] === 'undefined') {
        typeUndefined.push(array[i])
    }
}

var allArray = []
allArray.push(typeNum, typeStr, typeNull, typeUndefined)
console.log(allArray)