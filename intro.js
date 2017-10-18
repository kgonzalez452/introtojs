//Exercise 1

var op1= 22 + 2; //Addition problem that equals 24
var op2= 26 - 2; //Subtraction problem that equals 24
var op3= 6 * 4; //Multiplication problem that equals 24
var op4= 48 / 2; //Division problem that equals 24

console.log(op1)
console.log(op2)
console.log(op3)
console.log(op4)

// console.log(op2)

// Exercise 2
//Practice Modulus 

for(var i=0; i< 10; i++){
    if(i%4 == 0){
        console.log("i is currently "+ i);
    }
}

var ope1 = 6 % 3;
var ope2 = 10 % 3;
var ope3 = 5 % 3;

// console.log(/* A operation */ !== /*Another operation*/)

console.log(ope1 !== ope2)
console.log(ope2 == ope3)

// Exercise 3

// var increment = 4;
// increment = increment +1;
// increment = increment +6;
// increment = * 2;
// console.log(increment)

// Exercise 4

// console.log("Test Grades as follows: \n \t Student 1: 96 \n \t Comment: \"None\"");

// var line1 = "Test Grades as follows \n"
// var line2 = "\t Student 1: 96 \n"
// var line3 = "\t Comment: \"None\""

// console.log(line1 + line2 + line3);

// var numbers=[0,1,2,3,4,5,6,7,8,9];

// console.log(numbers[2] + numbers[4]);

//Practice accessing object values
// var student ={
//     test1: 99, 
//     test2: 98,
//     test3: 97,
//     test4: 96,
// }

// var info ={
//     firstName: "Kevin",
//     lastName: "Gonzalez",
//     favoriteColor: "Purple",
//     age: "21",
//     feeling: "Hungry"
// }

// console.log("Kevin is feeling"+info.feeling)

// var num = 1;
// for(num < 10){
// if (num%2 == 0){
//     console.log(num);
// }
// num++;
// }


for(var numb=1; numb<=10; numb++){
    if (numb%2 == 1){
        console.log(numb);
    }
}
