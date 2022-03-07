// window.setTimeout(function () {
// put all your JS code from the lecture here
let toDoList = ["clean house", "walk with dog"];
let input = prompt("what would you want to do?");

while (input !== "quit" && input !== "q") {
  if (input === "new") {
    const newToDo = prompt("enter toDo item");
    toDoList.push(newToDo);
    console.log(`added toDo item: ${newToDo}`);
  } else if (input === "list") {
    console.log("**************");
    for (let toDo of toDoList) {
      console.log(toDoList.indexOf(toDo), toDo);
    }
    console.log("**************");
  } else if (input === "delete") {
    const index = parseInt(prompt("enter delete toDo item name"));
    if (!Number.isNaN(index)) {
      let deletedToDo = toDoList.splice(index, 1);
      console.log(`delete: ${deletedToDo[0]}`);
    } else {
      console.log("unknow index");
    }
  }
  input = prompt("what would you want to do?");
}
console.log("quit!");
// }, 500);
