import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }


  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Todos</h1>

        <TodoList todos={todos}/>
        <TodoForm /> 

        <button>Clear</button>
      </div>
    );
  }
}

export default App;
