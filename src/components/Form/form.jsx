import { Component } from "react"
import './form.css'
class CourseForm extends Component {
    state = {
        name: ""
    }
    render() {
        const handleChange = (e) => {
            this.setState({
                name: [e.target.value]
            })
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            this.props.addCourse(this.state);
            this.setState({
                name: "",
            })
        }
        return (
            <form className="AddForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={this.state.name} />
                <button type="submit">Add course</button>
            </form>
        );
    }
}
export default CourseForm;