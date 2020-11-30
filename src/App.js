import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoForm from './components/ToDoForm';
import List from './components/List';
import Bouton from './components/Bouton'
import Logo from './components/Logo'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { todos : [] }
  }
  onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos : newTodoList });
  }
  render(){
    return (
        <div className="Container App">      
            <header className="Container App-header">
                <div className='row'>
                    <div className='col-2'>
                        <Logo />
                    </div>
                    <div className='col'>
                        <div>
                            <h2>FIANGONANA PROTESTANTA MALAGASY</h2>
                            <h3>Orimbaton ny Finoana</h3>
                        </div>
                    </div>
                    
                </div>
                <div className='row d-flex justify-content-center'>
                    <div>
                        <Bouton /> 
                    </div>
                </div>  
            </header>
            
            <div className="App-intro">
                <ToDoForm onNewTodo={this.onNewTodo.bind(this)}/>
                <List todos={this.state.todos}/>
            </div>
        </div>
    );
  }
}

export default App;
