let todo = [];
let req = prompt("Enter your choice add,delete,view,quit...");

while (true) {
  if (req == "quit") {
    console.log("Quiting app...");
    break;
  } else if (req == "add") {
    let task = prompt("Enter your task to add");
    todo.push(task);
    console.log("Task added sucessfully.");
  } else if (req == "view") {
    console.log("------Task List------");
    for (item of todo) {
      console.log(item);
    }
    console.log("------------");
  } else if (req == "delete") {
    let delTask = prompt("Enter your task to delete");
    for (let i = 0; i < todo.length; i++) {
      if (todo[i] === delTask) {
        todo.splice(i, 1);
        console.log("Task deleted sucessfully.");
      }
    }
  } else {
    console.log("Please Enter the right choice.");
  }

  req = prompt("Enter your choice add,delete,view,quit...");
}
