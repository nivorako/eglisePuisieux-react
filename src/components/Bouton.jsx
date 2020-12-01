import React from 'react'
import './Bouton.css'

export default class Bouton extends React.Component {
    render(){
        return (
            <div>
                <div className="row headerButton">   
                    <a className="col" href="#">Accueil</a>
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
                    <a className="col" href="#">vie de l'église</a>     
                    <a className="col" href="#">Contact</a>     
                </div> 
            </div>
        )
    }
};