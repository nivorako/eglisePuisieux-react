import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

export default class Bouton extends React.Component {
    render(){
        return (
            <ButtonGroup className="mt-2">
                <Button variant="secondary">Accueil</Button>
                <Button variant="secondary">Accueil</Button>
                <Button>Accueil</Button>
            </ButtonGroup>
        
        )
    }
};