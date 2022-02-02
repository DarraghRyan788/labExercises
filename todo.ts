import {myInterface} from './ToDoInterface';

class Todo implements myInterface{
    tasks:Array<string>=[];

    addTask(task:string):number{
        tasks.push(task);
        console.log("Item: " + task+" has been added to the array");
        return tasks.length;
     }

    listAllTasks():void{
        console.log("Start All the items in Array:")
        tasks.forEach(function(task){
            console.log(task);
        })
        console.log("End: All items in Array");
    }

    deleteTask(task:string):number{
        let index:number = this.tasks.indexOf(task);
        if(index > -1){
            tasks.splice(index,1);
            console.log("__________Task Removed__________");
            console.log("Task " +task+ " removed from the list.");
        }else {
            console.log("Task: " +task+ " not found in array.")
        }
        return tasks.length;
    }
}

let myTask = new Todo();
myTask.addTask("q1");
myTask.addTask("q2");

myTask.listAllTasks();

myTask.deleteTask("q2");
myTask.deleteTask("q5");