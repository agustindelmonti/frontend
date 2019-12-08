import React from "react";
import {Component} from "react";
import "../styles/interestcard.scss"

export default class InterestCard extends Component{

    render(){
        return(
            <button className="interestcard">
                {this.props.mytext}
                
            </button>

            
        )
    }

}