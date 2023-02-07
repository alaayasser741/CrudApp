import React, { Component } from "react";
import "./App.css";
import CourseForm from "./components/Form/form";
import ListCourse from "./components/List/list";
class App extends Component {
  state = {
    courses: [{ name: "HTML" }, { name: "CSS" }, { name: "React" }],
  };

    // Delete Function
  deleteCourse = (index) => {
    let { courses } = this.state;
    // courses.splice(index,1); //Other Way 
    let newCourses = courses.filter((course) => {
      return courses.indexOf(course) !== index;
    });
    this.setState({ courses:newCourses });
  };

    // Edit Function
    EditItem = (index,newValue)=>{
      let {courses} = this.state;
      let course = courses[index]
      course["name"] = newValue;
      this.setState({courses})
    }
  render() {
    const addCourse = (item) => {
      let courses = this.state.courses;
      courses.push(item);
      this.setState({ courses });
      console.log(courses);
    };
    let { courses } = this.state;
    let coursesList = courses.map((course, index) => {
      return (
        <ListCourse
          details={course}
          key={index}
          deleteCourse={this.deleteCourse}
          index={index}
          EditItem={this.EditItem}
        />
      );
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
