import {makeObservable, observable, action, computed} from "mobx";

class Todo {
    title = "";
    completed = false;

    constructor(title) {
        makeObservable(this, {
            title: observable,
            completed: observable,
            toggle: action,
            status: computed
        });
        this.title = title
    }

    get status() {
        return this.completed;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

export default Todo;