import './App.css';
import List from './components/List';
import Form from "./components/Form";
import store from "./store/TodoList";

function App() {
  const handler = e => {
    e.preventDefault();
    store.addTask(e.target[0].value);
  }
  return (
    <div className="App">
      <Form handler={handler} />
      <List store={store} />
    </div>
  );
}

export default App;
