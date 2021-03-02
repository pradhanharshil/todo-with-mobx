import { observable, computed, action, makeObservable } from "mobx";
import Todo from "./Todo";

class TodoList {
    todos = [];
    constructor() {
        makeObservable(this, {
            todos: observable,
            taskCount: computed,
            taskList: computed,
            addTask: action,
            deleteTask: action
        });
    }

    get taskCount() {
        return this.todos.length;
    }

    get taskList() {
        return this.todos;
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