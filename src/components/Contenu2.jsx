import React from 'react'
import './Contenu2.css'

class Contenu2 extends React.Component {
    render(){
        return(
            <div className='contenu2 d-flex flex-column justify-content-between'>
                <div className='row section1'>
                    <a href="#" className='h4'>Qui nous sommes?</a>
                    <a href="#" className='h4'>Organisation</a> 
                    <a href="#" className='h4'>Ici Autre chose</a>
                </div>
                <div className='row section2'>
                    
                </div>
                <div className='row section3'>
                    <a href="#">Qui nous sommes?</a>
                    <a href="#">Organisation</a> 
                    <a href="#">Ici Autre chose</a>
                </div>
            </div>
        );
    }
};

export default Contenu2;