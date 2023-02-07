import React, { Component } from "react";
import "./App.css";
import CourseForm from "./components/Form/form";
import ListCourse from "./components/List/list";
class App extends Component {
  state = {
    courses: [{ name: "HTML" }, { name: "CSS" }, { name: "React" }],
  };
  render() {
    const addCourse = (item) => {
      let courses = this.state.courses;
      courses.push(item)
      this.setState({courses});
      console.log(courses);
    };
    let { courses } = this.state;
    let coursesList = courses.map((course, index) => {
      return <ListCourse details={course} key={index} />;
    });
    return (
      <div className="App">
        <h1>Add Course</h1>
        <CourseForm addCourse={addCourse} />
        <ul>{coursesList}</ul>
      </div>
    );
  }
}

export default App;
