console.log(this);

const obj = {
    name: "Ainadri Mandal",
    class: "B.Tech CSE",
    myFunction: function(){                  //when we define a function witin a object ot turns the function into method 
        console.log(this);                    //if we use arrow function this keyword doesnot work in the method
        console.log(this.name, this.class);
        console.log("I am method inside object")
    },
    subjects: ["DBMS","NM", "CN", "FS"],
    newObj:{
        1:12,
        myNewFunction:function(){
            console.log(this);
        }
    }   

}
console.log(obj);
obj.myFunction();
obj.newObj.myNewFunction()

/*---------------------------------------Conditions----------------------------------*/

let num1 = 20, num2 = 20;
if(num1<num2){
    console.log(`${num1} is less than ${num2}`);
}else if(num1>num2){
    console.log(`${num1} is not less than ${num2}`);
}else{
    console.log(`${num1} is equal to ${num2}`);
}

//let suppose you have one num as input you have to check if num is multiple of 3 then print "Frizz", 
// if num is multiple of 5 then print 5 then print "Buzz".
//  if num is multiple of 3 and 5 print "Frizz Buzz".

let num = 15;
if (num%3==0 && num%5!==0) {
    console.log("Frizz");
}else if(num%5==0 && num%3!==0){
    console.log("Buzz");
}
else if(num%5==0 && num%3 == 0){
    console.log("Frizz Buzz");
}

//For loop

// for(start; condition; increm/decrem){
//     logic
// }

let num3 = 10;
for(let i=0; i<=num3; i=i+2){
    console.log(i,num3)
}

let arr1 = [1, 2 ,3, 4, 5, 6, 7, 8,];

console.log(arr1);

for( let i=0; i<arr1.length; i++){
    console.log(arr1[i], i);
}

let str = "Ainadri Mandal";

for(let i=0; i<str.length; i++){
    console.log("a"+str[i], "b");
}