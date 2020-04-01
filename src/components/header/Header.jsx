import React from "react";

import styles from "./Header.module.css"
import SearchBar from "./searchBar/SearchBar";

export default function Header(){

    return(
        <div className="row no-gutters">
            <div className="col-12 d-flex align-items-center" id={styles.headerContainer}>
                <SearchBar/>
            </div>
        </div>
    );

}