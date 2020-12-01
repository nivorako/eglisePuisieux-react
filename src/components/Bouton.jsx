import React from 'react'
import './Bouton.css'

export default class Bouton extends React.Component {
    render(){
        return (
            <div>
                <div className="row headerButton">   
                    <a className="col " href="#">Accueil</a>
                    <div className='col dropdown'>
                        <a href="#">Sections</a>
                        <div className="dropdown-content">
                            <a href="#">Ecole du dimanche</a>
                            <a href="#">Jeunes chrétiens</a>
                            <a href="#">Femmes chrétiennes</a>
                            <a href="#">Hommes chrétiens</a>
                            <a href="#">Chorale</a>
                            <a href="#">Musique</a>
                        </div>
                    </div>
                    <a className="col" href="#">Historique</a>
                    <div className='col dropdown'>
                        <a href="#">Vie de l'église</a>
                        <div className="dropdown-content">
                            <a href="#">ConfCall Biblique</a>
                            <a href="#">Programme du dimanche</a>
                            <a href="#">Zavatra Hafa</a>
                        </div>
                    </div>
                    <a className="col" href="#">Contact</a>     
                </div> 
            </div>
        )
    }
};