import React from "react";

import styles from "./Header.module.css"
import SearchBar from "./searchBar/SearchBar";
import MainNavBar from "./mainNavBar/MainNavBar";
import SideNavBar from "./sideNavBar/SideNavBar";


export default function Header(){

    return(
        <div className="row no-gutters align-items-center" id={styles.headerContainer}>
            <div className="col-3 d-flex-justify-content-start">
                <SearchBar/>
            </div>
            <div className="col-6 d-flex justify-content-center">
                <MainNavBar/>
            </div>
            <div className="col-3 d-flex justify-content-end">
                <SideNavBar/>
            </div>
        </div>
    );

}