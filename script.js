console.log("Я загадал число от 1 до 10. Попробуй угадать его!")
SNum = Math.floor(Math.random()*10)+1
let P = 3

while (P > 0){
    UserNum = Number(prompt("Введите число"))
    if (UserNum < SNum){
        console.log("Секретное число больше")
        P--
        console.log("У вас осталось ", P, " п.!")
    } else if ((UserNum == SNum)){
        console.log("Вы угадали!")
        break
    } else{
        console.log("Секретное число меньше")
        P--
        console.log("У вас осталось ", P, " п.!")
    }
}