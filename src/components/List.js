import { observer } from "mobx-react";
import Task from "./Task";

function List({ store }) {
    let key=0;
    return (
        <div>
            {
                store.taskCount === 0
                    ? <h1 className="form">No Tasks Available</h1>
                    : store.todos.map(task => 
                        <Task 
                            todo={task}
                            deleteHandler={() => store.deleteTask(task.title)}
                            key={key++} />)
            }
        </div>
    );
}

export default observer(List);