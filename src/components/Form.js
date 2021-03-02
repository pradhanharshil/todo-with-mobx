function Form({handler}) {
    return (
        <form className="form" onSubmit={handler}>
            <input 
                className="form-control mb-3 w-50"
                placeholder="Task" />
            <button 
                className="btn btn-success" 
                children="Add"/>
        </form>
    );
}

export default Form;