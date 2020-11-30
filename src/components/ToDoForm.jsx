import React, { Component } from 'react';

class ToDoForm extends Component {
    onClick(e){
        e.preventDefault();
        const txt = this.todoTitle.value;
        this.props.onNewTodo({
            title:txt,
            done:false
        });
    }
    render(){
        return(
            <div className='form'>
                <input type='text' ref={(input) => this.todoTitle = input}/>
                <button onClick={this.onClick.bind(this)} >Ajouter</button>
            </div>
        );
    }
}

export default ToDoForm;