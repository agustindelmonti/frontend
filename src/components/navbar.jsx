import React from "react";
import {Component} from "react";
import "../styles/navbar.scss"

export default class NavBar extends Component{
    render(){
        return(
            
                <div className="header">
                    <header>
                        <input
                        type="search"
                        name="search-bar"
                        id="search-bar"
                        className="inputSearch"
                        placeholder="Buscar"
                        />
                        <button className="plus">+</button>
                        <img src="../assets/avatar.png" className="avatar"/> 
                    </header>
                    
                </div>
            
        )
    }

}

