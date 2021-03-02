import { observable, action, makeObservable } from "mobx";
import Todo from "./Todo";

class TodoList {
    todos = [];
    constructor() {
        makeObservable(this, {
            todos: observable,
            addTask: action,
            deleteTask: action
        });
    }

    addTask(task) {
        this.todos.push(new Todo(task));
    }

    deleteTask(task) {
        const index = this.todos.findIndex(item => item.title === task);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

}

const store = new TodoList();
export default store;