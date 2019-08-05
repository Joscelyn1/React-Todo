import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm";

const toDoData = [
  {
    name: "do homework",
    id: 123,
    completed: false
  },
  {
    name: "wash car",
    id: 124,
    completed: false
  },
  {
    name: "pick up milk",
    id: 1235,
    completed: false
  },
  {
    name: "water the plants",
    id: 1246,
    completed: false
  },
  {
    name: "feed the dog",
    id: 1237,
    completed: false
  },
  {
    name: "study JavaScript",
    id: 1248,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: toDoData
    };
  }

  toggleItem = id => {
    this.setState({
      toDos: this.state.toDos.map(toDo => {
        if (toDo.id === id) {
          return {
            ...toDo,

            completed: !toDo.completed
          };
        } else {
          return toDo;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDos: [...this.state.toDos, newItem]
    });
  };

  clearToDos = () => {
    this.setState({
      toDos: this.state.toDos.filter(item => !item.completed)
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To-Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          clearToDos={this.clearToDos}
          toDos={this.state.toDos}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
