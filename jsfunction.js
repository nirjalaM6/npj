// // let i=0;
// // do{
// //     console.log(i);
// //     i++;
// // }while (i<0);

// // console.log(i);
// // let j=0;
// // while (j<0)
// // {
// //      console.log(j);
// //     j++;
// // }
// // let i=1;
// // for(i=1; i<=5;i++)
// // {
// //     if (i===3){
// //     continue;
// //     }
// //     console.log(i);
// // }
// // console.log(i);
// for(let j=10; j>=1; j--){
//     console.log(j);
// }

// Variable ko scope 



/*
***** 5 5
****. 4 4
***.  3 3
**.   2 2
*.    1 1

i= 5 , i >=1 i -- 
j= 0, j < i , j++ , b = 
*/
/*

function myFunction (a){
    
for (let i=a-1; i>=0; i--) i= 5 , i = 4
{
   let b="*";
   for(let j = 0 ; j < i; j++){
     b=b+"*";
   }
   console.log(b);
}
}



function checkGrade(grade){
    if (grade<2 && grade >0){
        console.log("Your grade is E");
    }
    else if (grade <2.5 && grade>=2){
        console.log("Your grade is D");
    }
     else if (grade <3 && grade>=2.5){
        console.log("Your grade is C");
    }
     else if (grade <3.5 && grade>=3){
        console.log("Your grade is B");
    }
     else if (grade <3.8 && grade>=3.5){
        console.log("Your grade is A");
    }
     else if (grade <=4 && grade>=3.8){
        console.log("Your grade is A+");
    }
    else if (grade >4 || grade <0){
        console.log("invalid grade");
    }
}
checkGrade(3.8)


let value=myFunction(5);

// Write a function that takes a number n as input and prints out the numbers from 1 to n, but for multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz". However, skip printing the numbers divisible by both 3 and 5 (i.e., print nothing instead).

var userInput=prompt("Please enter the number you want to print: ");
var number=parseInt(userInput);
let value=printNumber(number)


function printNumber(numberr)
{
    console.log("The numbers are: ");
    let line=""
    for (let i=1; i<=numberr;i++)
    {
        if(i%3==0  && i%5!=0){
            line+=" fizz ";
             continue;
        }
        if(i%5==0 && i%3!=0){
            line+=" buzz "
            continue;
        }
        if(i%3==0 && i%5==0){
            line+= " FizzBuzz ";
            continue;
        }
        line+=i+" ";
        
    }
    console.log(line);
}
//Write a function that takes a number n as input and prints all prime numbers from 2 to n. Use a nested loop and the break statement to optimize the solution.
var userInput=prompt("Please enter the number you want to print: ");
var number=parseInt(userInput);
let value=printNumber(number)


function printNumber(numberr)
 {
   let line="";
     for(let i=2; i<=numberr;i++)
     {
        let prime=true;
         for(let j=2; j<=Math.sqrt(i); j++)
         {
             if (i<=1){
                 prime=false;
                 break; 
             }
             else if (i%j==0){
                 prime=false;
                 break;
             }
           else {
               prime=true
           }
         }
         if (prime){
             line+=i + " ";
         }
         
     }
console.log(line)
}

//Write a program that generates a random number between 1 and 100 and asks the user to guess it. Provide feedback to the user after each guess. If the guess is correct, print "Congratulations! You guessed the number". If the guess is too high, print "Too high, try again". If the guess is too low, print "Too low, try again". Allow the user to continue guessing until they guess correctly or enter "quit" to end the game.
//Write a program that prompts the user to enter a password. If the password is less than 8 characters, print "Password too short". If the password contains at least one digit and one uppercase letter, print "Password is strong". If not, print "Password is weak"

var userInput=prompt("Please enter the number you want to print: ");
let value=printNumber(userInput)
function printNumber(password){
    if (password.length<8){
        console.log("Password too short");
    }
    else{

    for(let i= 0; i<=password.length;i++)
     {
           if (password.charAt(i) == password.charAt(i).toUpperCase() && isNaN(parseInt(password.charAt(i)))) {
               console.log("password is weak");
     }
     else 
     {
         console.log("password is strong");
     }
    }
    }
}
function myFunction(number){
    let line="";
    for (let i=number; i>=1;i--){
       line="";
        for(let j=number; j>5-i; j--){
            line+=j;
        }
       console.log(line);
    }
     
}
let value=myFunction(5);
function myFunction(name){
    let count=0;
   // let r="";   
    while(name[count]!==undefined)
        count++;
   
    return count;
    }

console.log(myFunction("suraj"));
let listFruits=["apple", "banana"];
let fruitsName="apple"
let value =checkInArray(listFruits,fruitsName );
console.log("There is mango in the list: " + value );

function checkInArray(fruits, name){
    for(let i=0;i<=fruits.length; i++){
        if (fruits[i]==name){
             return true;
        }
    }
    return false;
}
*/
let classlist=[["Nirjala","Suraj","Surabi"], ["yamu","Manka","Mandira"]];
let value=printAllName(classlist);
console.log(value);
function printAllName(className){
    let line=""
    for (let i = 0;i<className.length; i++)
    {
        for(let j=0; j<className[i].length;  j++){
            line +=" "+ className[i][j];
        }
        line +="\n"
    }
    return line;
}
