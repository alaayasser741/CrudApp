import React, { Component } from "react";
function ListCourse (props) {
        return (
            <>
                <li>{props.details.name}</li>
            </>
        );
    
}

export default ListCourse;