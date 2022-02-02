let tasks: Array<string>=[];

function addTask(task:string):number{
   tasks.push(task);
   console.log("Item: " + task+" has been added to the array");
   return tasks.length;
}

function listAllTasks():void{
    console.log("Start All the items in Array:")
    tasks.forEach(function(task){
        console.log(task);
    })
    console.log("End: All items in Array");
}

function deleteTask(task:string):number{
    let index:number = tasks.indexOf(task);
    if(index > -1){
        tasks.splice(index,1);
        console.log("__________Task Removed__________");
        console.log("Task " +task+ " removed from the list.");
    }else {
        console.log("Task: " +task+ " not found in array.")
    }
    return tasks.length;
}

addTask("Part One");
addTask("Part Two");

listAllTasks();

deleteTask("Part Two");
deleteTask("Part Four");