//Lesson-2

//Task 1 start 

var letters = []
var sentence = 'Backend As A Service'
var arr = sentence.split(' ')
console.log(arr)
for (var i = 0; i < arr.length; i++) {
    letters.push(arr[i][0])
}
console.log(letters)
console.log(letters.join(' '))

//Task 1 end

//Task 2 Additional
var now = new Date()

function check(a) {
    if (typeof a === 'number') {
        console.log(now.toLocaleString())
    } else {
        console.log("Неверный тип данных")
    }
}
check(4)

//Task 2 Additional