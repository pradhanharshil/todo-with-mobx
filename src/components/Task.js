import { observer } from "mobx-react";


function Task({ todo, deleteHandler }) {
    const style = {
        textDecoration: todo.status ? "line-through" : "none"
    };

    return (
        <div className="card w-50 m-auto mt-1">
            <div className="card-body text-lg-start flex-row">
                <h3 style={style}>{todo.title}</h3>
                <div>
                    <button
                        className="btn btn-danger m-1"
                        children="Delete"
                        onClick={deleteHandler} />
                    <button
                        className="btn btn-primary m-1"
                        children="Mark"
                        onClick={() => todo.toggle()} />
                </div>
            </div>
        </div>
    );
}

export default observer(Task);