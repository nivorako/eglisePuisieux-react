import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Bouton from './components/Bouton'
import Logo from './components/Logo'
import TextHeader from './components/TextHead'
import Contenu1 from './components/Contenu1'
import './App.css';

class App extends Component {
  render(){
    return (
        <div className="App">      
            <header className=" App-header d-flex flex-column justify-content-around">
                <div className='row'>
                    <div className='col-2 d-flex justify-content-start'>
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
            <div className="App-contenu">
                <div className="row">
                    <div className='col'>
                        <Contenu1 />
                    </div>
                    <div className='col-4 App-contenu2'>
                        
                    </div>
                </div>
                <div className='nav'>
                    ici nav
                </div>
            </div>
            <div className="App-footer">
                ici footer
            </div>
        </div>
    );
  }
}

export default App;
