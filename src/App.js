import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Bouton from './components/Bouton'
import Logo from './components/Logo'
import TextHeader from './components/TextHead'
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
            <header className="Container App-header d-flex flex-column justify-content-around">
                <div className='row'>
                    <div className='col-3 d-flex justify-content-start'>
                        <Logo />
                    </div>
                    <div className='col d-flex  align-items-center justify-content-start'>
                        <TextHeader />
                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div>
                        <Bouton /> 
                    </div>
                </div>  
            </header>
            <div className="App-contenu">ici</div>
        </div>
    );
  }
}

export default App;
