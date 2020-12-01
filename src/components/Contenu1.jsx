import React from 'react'
import './Contenu1.css'

class Contenu1 extends React.Component {
    render(){
        return(
            <div className="contenu1">
                <div className="row">
                    <div className='col entete'>
                        <h2>Ce dimanche 22 Novembre</h2>
                        <p>Rejoignez nous</p>
                        <p>Tel:........Allo!!!</p>
                    </div>
                </div>
                <div className="row">
                    <div className='col d-flex justify-content-end'>
                        <p>Salamo 23;</p>
                        <p>Ezekiela 34-11-17;</p>
                    </div>
                    <div className='col'>
                        <p>Korintiana;</p>
                        <p>Marka 13-33-37;</p>
                    </div>
                </div>
                <div className="row">
                    <div className='col d-flex justify-content-center'>
                        <h2>Reflexion du jour</h2>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <h2>Pericope</h2>
                    </div>
                    <div className='col'>
                        <h2>Edito du pasteur</h2>
                    </div>
                </div>
            </div>
        );
    }
};

export default Contenu1;