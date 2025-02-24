let str="sv university"
console.log(str.length);
console.log(str[str.length-1]);

str[0]="p"// its cannot change becase striing is immutale

let arr =[1,2,3, "abs",1.2,true,null,undefined,""]
arr[3]="xyz" // your change element like this store in array
arr[3][0]="x"// you channot chnage string

arr.push("push");
arr[4]="push"
arr.pop()
console.log(arr);
//object

//object literal
//new key word        //
//constructor

let svuClass = ["Praveen", "B.tech", 3, "Ranit", "B.tech", 3]
const obj = {
    Praveen:{class: "B.Tech", year: 3, RN: 84, subjects: ["DBMS","NM", "CN", "FS"]},
    Ainadri:{class: "B.Tech", year: 3, RN: 81, subjects: ["DBMS","NM", "CN", "FS"]},
    Soumya:{class: "B.Tech", year: 3, RN: 80, subjects: ["DBMS","NM", "CN", "FS"]},
    1:"SVU"

}

obj["1"]= "Ainadri"

console.log(obj)

delete obj[1]

console.log(obj)

delete obj["Praveen"]

console.log(obj)

// console.log(obj.Praveen.subjects[0])

obj.Virat = {class: "BCC1", year: 45, RN: 50, subjects: ["DBMS","NM", "CN", "FS"]}

console.log(obj)

obj.Virat = {class: "ICC", year: 45, RN: 50, subjects: ["DBMS","NM", "CN", "FS"]}

console.log(obj)

let name= "Preet"
let Class = "BCC1"
let sub = "FS"

const newObj = {name, Class, sub}

console.log(newObj)