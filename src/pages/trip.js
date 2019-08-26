import React from "react";
import NavBar from "../components/navbar.jsx";
import "../styles/trip.scss";
import InterestCard from "../components/interestcard.jsx";


export default class Trip extends React.Component{
    render(){
        return(
            <React.Fragment>
                <NavBar/>
                <div>
                    <div className="lateral">


                    </div>
                    <div className="head">
                        <input 
                        type="text" 
                        className="tripName" 
                        placeholder="Nombre del Viaje"

                    />
                    <div className="tags">
                        <h5>Tags:</h5>


                    </div>
                    <h3 className="destinoText">Destino</h3>
                    <input
                    type="text"
                    className="destinoSearch"
                    placeholder="Buenos Aires"
                    />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}