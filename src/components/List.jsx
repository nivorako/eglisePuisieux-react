import React, { Component } from 'react';

class List extends Component{
  render(){
    return(
      <div className="liste">
        todos.length = {this.props.todos.length}
        {this.shwoTodo(this.props.todos)}
      </div>
    );
  }
  shwoTodo(todos){
    return(
      todos.map((todo) => {
        return(
        <div className="todo">{ todo.title }</div>
        )
      })
    );
  }
  
}

export default List;