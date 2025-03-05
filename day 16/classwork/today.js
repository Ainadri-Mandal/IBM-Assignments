// //Asynchronous behaviour

// // set timeout setIntravel,  
// //microtask,macrotack

// let name="Subhankar"
// console.log(name);

// let surname="Saha"
// console.log(surname);

// setTimeout(()=>{
//     console.log("1st dealy");
    
// },2000)

// setTimeout(()=>{
//     console.log("2nd dealy");
// },3000)
// setTimeout(()=>{
//     console.log("3nd dealy");
// },1000)

// let myPromise= new Promise ((resolve,reject)=>{
//     let flag=true;
//     if(flag){
//         resolve("promise resolve succssfully")
//     }
//     else {
//         reject("promise rejected")

//     }
// })

// console.log(myPromise);


// queueMicrotask(()=>console.log("queue Microtask"))
// console.log(name,surname);
async function fetchdata(){
    try{
        let data= await fetch ("https://fakestoreapi.com/products")
    let ans = await data.json();
    console.log(ans);
    }catch(error){
        console.log(error);
        
    }
}
fetchdata()