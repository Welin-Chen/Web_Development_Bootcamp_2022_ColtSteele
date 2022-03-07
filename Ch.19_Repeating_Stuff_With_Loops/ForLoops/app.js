// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// Print out "Da ba dee da ba daa" 6 times, using a for loop
// for(let i=1;i<=6;i++){
//     console.log("Da ba dee da ba daa");
// }

// for(let i=1;i<=20;i+=2){
//     console.log(i);
// }

// for(let i=100;i>=0;i-=10){
//     console.log(i);
// }

// for(let i=10;i<=1000;i*=10){
//     console.log(i);
// }

// for(let i=20;i>=0;i++){
//     console.log(i);
// }


// let animals=['cat','dog','elephant','lion','tiger'];

// for(let i=0;i<animals.length;i++){
//     console.log(i,animals[i]);
// }

// for(let i=animals.length-1;i>=0;i--){
//     console.log(i,animals[i]);
// }

// for(let i=1;i<=10;i++){
//     console.log(`i is: ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(`    j is: ${j}`);
//     }
// }

const seatingChart=[
    ['1-1','1-2','1-3'],
    ['2-1','2-2','2-3','2-4'],
    ['3-1','3-2','3-3','3-4']
];

for(let i=0;i<seatingChart.length;i++){
    const row=seatingChart[i];
    console.log(`row ${i+1}:`)
    for(let j=0;j<row.length;j++){
        console.log(`    ${row[j]}`);
    }
}
