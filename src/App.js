import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './Todo.css'


const tasks = [
  {name: "", id: 1, completed: false}
]


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tasks
    }
  }
  toggleItem = (event, itemId) => {
    event.preventDefault();

    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === itemId) {
          return {
            ...item, 
            completed: !item.completed
          } 
        } else {
          return item
        }
      })
    })
  }

  completedTask = event => {
    event.preventDefault();

    this.setState({
      tasks: this.state.tasks.filter(item => {
        return !item.completed
      })
    })
  }

  addTask = (event, taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    }

    this.setState({
      tasks: [newTask, ...this.state.tasks]
    })
  }


render() {
  return (
    <div className="container">
    <h2>Welcome to your Todo App!</h2>
    <div className="todo">
      <TodoForm 
        addTodo={this.addTask}
        tasks={this.state.tasks}
        />
    </div>
    <div className="todo-container">
        <TodoList
          tasks= {this.state.tasks}
          toggleItem= {this.toggleItem} 
          completedTask= {this.completedTask} 
        />
    </div>
    </div>
);
}
}

export default App;