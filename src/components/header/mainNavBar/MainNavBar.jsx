import React from "react";

import styles from "./MainNavBar.module.css";



export default function MainNavBar(){

    return(
        <ul className="d-flex" id={styles.mainNavBarList}>
            <li><i className="fas fa-home"></i></li>
            <li><i className="fas fa-users"></i></li>
        </ul>

    );

}
