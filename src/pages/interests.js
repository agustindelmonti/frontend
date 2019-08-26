import React from "react";
import Component from "react";
import InterestCard from "../components/interestcard.jsx";
import NavBar from "../components/navbar.jsx";
import categorias from "../data/nombres.json";
import "../styles/interest.scss"

class Interest extends React.Component{

    constructor(props){
        super(props);
        this.state = {nombres: categorias}
    }
    
    render(){
    return(
        <React.Fragment>
            <NavBar/>
            <div className="interestzone">
                <b><h1 className="headerinterest">Personaliza tus intereses</h1></b>
                {this.state.nombres.map(e => <InterestCard mytext={e.title}/>)}
            </div>

        </React.Fragment>

    );
}
}
export default Interest;