const readline = require('readline')
const input = readline.createInterface(process.stdin)

console.log("Загадано число в диапазоне от 0 до 100")

let rnd = Math.floor(Math.random()*(100+1)) // случайное число

input.on('line', (data) =>
{
    if (data>rnd) {console.log("Больше")}
    if (data<rnd) {console.log("Меньше")}
    if (data==rnd) {console.log("Отгадано число " + rnd)}
})
