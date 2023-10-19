//инкременты и декременты(простфиксные и префиксные)
//инкременты -увеличение на 1
//декременты -уменьшение на 1

// let i =0
// i++ //инкременты (постфикные)1
// i-- //декременты (постфикные)0
// ++i //инкременты (петфикные)1
// --i //инкременты (петфикные)1
// console.log(i++)
// console.log(i)


//циклы -есть 5 видов

// for


//1 task
// let line = '';

// for (let i = 1; i <= 5; i++) {
//     line += '2';
//     console.log(line);
// }

//2 task

// let gen=[line,line2]
//  let line = '# # #'
//  let line2= ' # # #'

//  for (let i = 0; i < 6; i++) {
//     if(gen%2==0){
//         console.log(line)
//     }
//  }
// let array1=[1,2,3,4,5]
 
// for(let i=0;i<array1.length;i++){
//     console.log(array1[i])
// }

// const arr2=[0,1,2,3,4,5,6,7,8,9,10]
// for (let i =0;i<arr2.length;i++){
//     if(!arr2[i]){
//         continue
//     }
//     if (i%2===0) {
//         console.log(arr2[i])
        
//     }
// }
 
// for of


// const arr=[1,2,3,4,5]
// for(let item of arr){
//     // console.log(item)
//     if(item%2===0){
//         console('devides to 2 ' + item)
//     }
// }

//for in
// const obj={
//     name:'nuris',
//     age:21,
//     lang:'kg'
// }

// for(const key in obj){
//     console.log(`${key}:${obj[key]}`)
// }

//task 2 
// const obj={
//     1:10,
//     2:20,
//     3:30,
//     4:40,
// }
// let sum=0
// for(const key in obj){
//     sum+=+key+obj[key]
// }
// console.log(sum)

// task 3
// const obj={
//     1:'Korea',
//     2:"Kyrgyzstan",
//     3:"Dubai",
//     4:'Singapur',
//     5:'Oslo'
// }

// for(const key in obj){
//     if(obj[key].length>=8){
//         console.log(obj[key])
//     }
// }
// console.log(`${obj[2]}
// ${obj[4]}`)

//while
// let i =0
// while(i<10){
//     console.log(i)
//     i++
// }

//do while
// let i =0
// do{
//     console.log(i)
//     i++
// }while(i<10)




//task1 

// Нужно написать цикл, который перебирает числа от 4 до 37 и выполняет следующие действия:

// Если число кратно 2, но не кратно 4, то прибавляет его к результату;
// Если число кратно 3, то отнимает его от результата;
// Если число кратно 4, то умножает его на результат;
// Если число кратно 5, то просто выводит в консоль это число и не изменяет результат (даже если число подпадает под условия выше);
// Если число не попадает под условия выше, то пропускает его.
// Число должно попадать только под одно условие. Если число пападает под несколько условий - выполнится должно первое из них.


// let result =0
// let startNum=4
// for(let i = startNum;i<=37;i++){
//     if(i%5==0){
//         console.log(i)
//         continue;
//     } if(i%4===0){
//         result*=i
//         // console.log(i)

//         continue
//     } if(i%3===0){
//         result-=i
//         // console.log(i)

//         continue
//     } if(i%2===0 && i % 4 !== 0){
//         result+=i
//         // console.log(i)
//         continue;
//     }
// }
//  console.log(result)

//task2 

// let sum=100
// let result= 0
// for(let i=sum;i>0;i--){
//     result+=i
// }
// console.log(result)

//task 3

// let result=0
// for(let i =0;i<=100;i+=2){
//     console.log(i)
// }

// const arr = [3,6,1,234,456,765,13413,4564563,46545642]
// for(let i =0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         console.log(arr[i])
//     }
// }

// let palindrom = 'asddsa'
// let isValid = false

// for(let i = 0; i < palindrom.length / 2; i++) {
//     if(palindrom.length % 2 === 1) {
//         console.log('Не палиндром')
//         break;
//     }

//     if(palindrom[i] === palindrom[(palindrom.length - 1) - i]) {
//         isValid = true
//     } else {
//         isValid = false
//         break
//     }
// }

// if(isValid) {
//     console.log('Палиндром')
// } else {
//     console.log('Не палиндром')
// }

// let factorial=5
// let res=1
// for(let i =1;i<=factorial;i++){
//         res*=i

// }
// console.log(res)

const romanNum={
    I:1,
    V:5,
    X:10,
    L:50

}
let result=''
let num=25
for(const key in romanNum){
    while(num>=romanNum[key]){
        result+=key
        num-=romanNum[key]

    }
}

console.log(result)