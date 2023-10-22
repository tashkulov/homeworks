
 /// 1 задание

 //prototype
// for(let i =0;i<=50;i++){
//     if(i%2===0 ){

//         continue
//     }if(i%3===0){
//         continue
//     }
//     if(i%5===0){
//         continue
//     }
//     if()
//     if(i%1===0 & i%i===0){
//     console.log(i)}
// }

for (let i = 2; i <= 50; i++) {
    let truthress = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            truthress = false;
            break;
        }
    }

    if (truthress) {
        console.log(i);
    }
}


// //2 задание
let a=prompt('Enter the number')
for(let i=0 ;i<=a;i++){
    if(i%3===0 & i%5===0){
        console.log(i)

    }
}

// //3 задание
let zero=1
for(let i =10;i>=zero;i--){
    console.log(i)
}

//4 задание
let aa=prompt('Enter the number')
let sum =0;
for(let i=0 ;i<=aa;i++){
    sum+=i
}
console.log('Total sum is = '+sum)


//5 задание
let b=7
for(let i=1;i<=10;i++){
    const res=i*b
    console.log(`${b} x ${i} = ${res}` )
}


let firstInput = prompt('Сколько чисел вы хотите ввести?: ');
let totalSum = 0;

for (let i = 1; i <= firstInput; i++) {
    let mainInput = parseInt(prompt(`Введите число ${i}:`));
    let sum = 0;

    for (let j = 1; j <= mainInput; j++) {
        sum += j;
    }

    totalSum += sum;
}
console.log(`Общая сумма всех чисел: ${totalSum}`);


     //7 задание
const height = prompt("Введите высоту пирамиды:")
let row = "";
let d='*'

for (let i = 1; i <= height; i++) {
    row += d;
    console.log(row);
}
