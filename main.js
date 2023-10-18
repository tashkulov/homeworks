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

//task 3
const obj={
    1:'Korea',
    2:"Kyrgyzstan",
    3:"Dubai",
    4:'Singapur',
    5:'Oslo'
}

for(const key in obj){
    if(obj[key].length>=8){
        console.log(obj[key])
    }
}
// console.log(`${obj[2]}
// ${obj[4]}`)