// let random=Math.random();
// if(random<0.5){
//     console.log("your number is less than 0.5!");
// }else{
//     console.log("your number is large or equal than 0.5!");
// }
// console.log(random);



// let dayOfWeek=prompt('Enter a day').toLowerCase();
// if(dayOfWeek==='monday'){
//     console.log("Monday");
// }else if(dayOfWeek==='saturday'){
//     console.log("Saturday");
// }else if(dayOfWeek==='friday'){
//     console.log("Friday");
// }else{
//     console.log("other days");
// }

// let age=65;
// if(age<5){
//     console.log("age is < 5");
// }else if(age<10){
//     console.log("age is between 5~10");
// }else if(age<65){
//     console.log("age is between 10~65");
// }else{
//     console.log("age > 65")
// }

const password=prompt("please enter a new password");
if(password.length>=6){
    if(password.indexOf(" ")===-1){
        console.log("password is valid!");
    }else{
        console.log("password should not contain space");
    }
}else{
    console.log("password is too short, its length must >= 6 characters");
}
