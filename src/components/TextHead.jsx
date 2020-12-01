import React from 'react'
import './TextHead.css'

class TextHeader extends React.Component {
    render(){
        return (
            <div className='textHead'>        
                    <h1 style={{fontSize:"2em"}}>FIANGONANA PROTESTANTA MALAGASY</h1>
                    <h3 style={{textAlign:"center"}}>Orimbaton ny Finoana</h3>
            </div>
        );
    }
};

export default TextHeader;