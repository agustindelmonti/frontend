import React from "react";

import styles from "./SideNavBar.module.css";

export default function SideNavBar(){
    return(
        <ul className="d-flex align-items-center" id={styles.sideNavBarList}>
            <li><p>User's Name</p></li>
            <li><i className="fas fa-plus-circle"></i></li>
        </ul>
    );
}
