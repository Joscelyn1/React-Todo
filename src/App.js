import React from "react";

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

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
