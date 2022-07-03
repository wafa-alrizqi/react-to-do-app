import React, { Component } from 'react'
import TodoList from './todoList'

export default class todoApp extends Component {
  constructor(){
    super();
    this.state={
      item:"",
      todoItems:[]
    }
  }
  TodoItem = (event) =>{
    this.setState({item:event.target.value})
  }

  addTodo = () =>{
    if(this.state.item!==''){
      let newTodoItems=[...this.state.todoItems,this.state.item];
      this.setState({todoItems:newTodoItems, item:""}) 
    }
  }

  render(){
  return (
  <div className='home'>
    <h3>#My-Todo-List </h3>
    <input type="text" placeholder="Enter Task .." onChange={this.TodoItem} value={this.state.item}/>
    <button onClick={this.addTodo}>Add</button>
    <TodoList items={this.state.todoItems} />
  </div>
  );
  }
}
