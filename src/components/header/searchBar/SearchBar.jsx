import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import styles from "./SearchBar.module.css";

export default function SearchBar(){
    const [ searchBarActive, setSearchBarActive ] = useState(false);

    function handleSearchBarStatus(){
        setSearchBarActive(!searchBarActive);
        console.log("asd");
    }


    return (
        <Formik
            initialValues={{search: ""}}
            onSubmit = {values => console.log(values)}
        >
            <Form>
                <div id={styles.inputSearchContainer} onClick={handleSearchBarStatus} onBlur={handleSearchBarStatus}>
                    { searchBarActive ? null : <i className="fas fa-search" id={styles.searchIcon}></i> }
                    <Field name="search" id={styles.input} placeholder="Buscar usuario" autoComplete="off"></Field>
                </div>
            </Form>
        </Formik>
    );
}

