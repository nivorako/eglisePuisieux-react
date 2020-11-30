import React from 'react'
import LogoEglise from  './LogoEglise.jpg'

const logoStyle = {
    padding:"20px",
    height:"200px"
};
export default class Logo extends React.Component {
    render(){
        return <img src={LogoEglise} style={logoStyle}/>
    }
};