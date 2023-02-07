import React, { Component } from "react";
class ListCourse extends Component {
    state = {}
    render() {
        return (
            <>
                <li>{this.props.details.name}</li>
            </>
        );
    }
}

export default ListCourse;