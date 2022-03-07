// let count=0;
// while(count<10){
//     console.log(count);
//     count++;
// }

// let secret="BabyHippo";
// let guess=prompt("enter secret code...");
// while(guess!=secret){
//     guess=prompt("enter secret code...");
// }
// console.log("congrats! you guess the secret code")

// let input=prompt("Hey, say something!");
// while(true){
//     input=prompt(input);
//     if(input.toLowerCase()==='stop copy me')break;
// }
// console.log("ok, you win!")

// for(let i=0;i<=1000;i++){
//     console.log(i);
//     if(i===100)break;
// }

let maximum=parseInt(prompt("Enter the maximum number!"));
while(!maximum){
    maximum=parseInt(prompt("Enter the valid number!"));
}

const targetNum=Math.floor(Math.random()*maximum)+1;
let attempts=1;

let guess=parseInt(prompt("Enter your first guess"));
while(parseInt(guess)!==targetNum){
    if(guess==='q')break;
    attempts++;
    if(guess<targetNum){
        guess=prompt("too low, enter your guess again");
    }else{
        guess=prompt("too high, enter your guess again");
    }
}
if(guess==='q'){
    console.log('You quit!');
}else{
    console.log('Congrats, You win!');
    console.log(`Your got it! you have ${attempts} guesses`)
}