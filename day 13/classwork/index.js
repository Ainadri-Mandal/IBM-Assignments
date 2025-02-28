//map returns array and for each returns undefined

//foreach higher order function

let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9,"Ainadri" ,10, 11, 12,"Soumya", 13, 14, 15, 16, "Rupsa", ];

// let output = arr.forEach((el, index)=>{
//     console.log(el, index);                  //you can never return in forEach as it shows undefined
// })

// console.log(output);
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i], i)
// }

//===================== MAP==========================

// let output = arr.map((el, index)=>{
//     return el**2;
// })

// console.log(output);

//=======================Filter=======================

// let output= arr.filter((el, index)=>{
//     return typeof el === 'string';
// })

// let output= arr.filter((el, index)=>{
//     return typeof el !== 'string' && el % 2===0;
// }).map((el,index)=>{
//       return  el**2;
// })

// console.log(output);

//==============Reduce==================
// arr1 = [1, 2, 3, 4, 5, 6, 7]
// let output = arr1.reduce((acc, el)=>{ //with accumulator 100
//     return acc+ el;
// },100)

// let output = arr1.reduce((acc, el)=>{ //without accumulator 
//     return acc+ el;
// })
// console.log(output)

//==================using them combined==================
// arr2= [2, 5, 3, 7, 9, 15, 24]
// let output1 = arr2.reduce((acc, el)=>{
//     return acc * el;
// }).filter((el, index)=>{
//     return el %2 ===0 ; 
// }).map((el, index)=>{
//     return el * 3;
// })

// console.log(output1);

let ans = arr.sort((a,b)=>{ //ascending    for descending its a-b
    return b-a;                   //best for no. sorting
})

console.log(ans);

let data = [
    {name: "watch", price:2000, rating: 3},
    {name: "phone", price:19999, rating: 5},
    {name: "shoe", price:1200, rating: 5},
    {name: "car", price:100000, rating: 5},
    {name: "earphone", price:1900, rating: 4.5}
]

// let ans1 = data.sort((a,b)=>{
//     if(a.value < b.value){
//         return 1;
//     }
// });

// console.log(ans1)                         //best sorting for no. sorting 

data.sort((a,b)=>{
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
})

console.log(data);

data.sort((a,b)=> a.name.localeCompare(b.name));     //for text sorting this is inbuilt sorting 
                                                    // function for case sensitivite
console.log(data);





