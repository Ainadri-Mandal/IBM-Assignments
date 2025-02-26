//QUESTION: Problem 1: Create a Student Management System (Using Objects)
const student = {
    name: "Ainadri Mandal",
    rollNumber: 81,
    marks: {
        Maths: 85,
        DBMS: 80,
        CN: 90,
        FS: 93,
    },
    getAverageMarks: function(){
        let totalMarks = 0;
        let totalSubjects = 0;

        for( let subject in this.marks){
            totalMarks += this.marks[subject];
            totalSubjects++;
        }
        return totalMarks / totalSubjects;
    },

    checkPassOrFail: function(){
        let avg = this.getAverageMarks();

        if (avg >40){
            return "Passed";
        }else{
            return "Failed";
        }
    }
};

console.log(student.getAverageMarks());
console.log(student.checkPassOrFail());

//Problem 2: Library System (Nested Objects & Methods)

const library = {
    books:{
        "Atomic Habits":{author:"James Charles", availableCopies: 3},
        "The Alchemist":{author: "Paulo Coelho", availableCopies: 4},
        "The Kite Runner":{author: "Khalid Hosseini", availableCopies: 2},
        "The Silent Patient":{author:"Alex Michaelides", availableCopies: 1},
    },

    borrowBook: function(bookName){
        if(this.books[bookName]){
            if(this.books[bookName].availableCopies > 0){
                this.books[bookName].availableCopies--;
                console.log(`You borrowed ${bookName}.`);
            }else{
                console.log(`Sorry ${bookName} is out of stock.`);
            }
        }else{
            console.log(`${bookName} book is not available in the Library.`);
        }
    },

    returnBook: function(bookName){
        if(this.books[bookName]){
            this.books[bookName].availableCopies++;
            console.log(`You have returned ${bookName} book succesfully!`);
        }else{
            console.log(`${bookName} doesnot belong in this Libarary.`);
        }
    }
};

library.borrowBook("The Alchemist");
console.log(library.books["The Alchemist"].availableCopies);

library.returnBook("The Alchemist");
console.log(library.books["The Alchemist"].availableCopies);

//Problem 3: Generate Multiplication Table (For Loop)

function generateTable(num, limit){
    for(let i=1; i<=limit; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

generateTable(5,10);

//Problem 4: FizzBuzz (If-Else Conditions)

function fizzBuzz(n){
    for( let i=1; i<=n; i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }else if(i % 3 ==0){
            console.log("Fizz");
        }else if(i % 5 == 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}

fizzBuzz(15);

//Problem 5: Reverse a String Without Using .reverse()

function reverseString(str){
    let reverse="";

    for(let i= str.length-1; i>=0; i--){
        reverse += str[i];
    }

    return reverse;
}

console.log(`The reverse of the string is`,reverseString("JavaScript"));

//Problem 6: Remove Duplicates from an Array

function removeDuplicates(arr){

    let uniqueArray= []
    for(let i=0; i<arr.length; i++){
        if(!uniqueArray.includes(arr[i])){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates([1,2,3,2,4,5,6,4,7,6,8]));

//Problem 7: Find the Longest Word in a Sentence

function longestWord(sentence){
    let words = sentence.split(" ");  
    let longest =  "";
    for(let i=0; i< words.length; i++){
        if(words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest;

}

console.log(`The longest word in the sentence is `, longestWord("Coding can be hard Sometimes"));

// Problem 9: Find the First Non-Repeating Character in a String

function firstUniqueCharacter(str){
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if(str.indexOf(char)=== str.lastIndexOf(char)){
            return char;
        }
    }
    return null;
}

console.log(`The first Unique character of the string is: `,firstUniqueCharacter("aabcddcbefb"));

