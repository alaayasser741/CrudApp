import React, { Component } from "react";
class ListCourse extends Component {
    state = {
        isEdit: false
    }
    renderCourse = () => {
        return (
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={() => { this.toggleState() }}>Edit Course</button>
                <button onClick={() => { this.props.deleteCourse(this.props.index) }}>Delete Course</button>
            </li>
        );
    }


    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.EditItem(this.props.index,this.input.value);
        this.toggleState();
    }
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input ref={(v) => { this.input = v }} defaultValue={this.props.details.name} type="text" />
                <button>Update</button>
            </form>
        );
    }

    toggleState = () => {
        let { isEdit } = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    render() {
        let { isEdit } = this.state
        return (
            <>
                {isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </>
        );
    }
}

export default ListCourse;