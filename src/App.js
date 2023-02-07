import React, { Component } from "react";
import "./App.css";
import CourseForm from "./components/Form/form";
import ListCourse from "./components/List/list";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>Add Course</h1>
        <CourseForm />
        <ListCourse />
      </div>
    );
  }
}

export default App;
