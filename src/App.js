import React, { Component } from "react";
import "./App.css";
import CourseForm from "./components/Form/form";
import ListCourse from "./components/List/list";
class App extends Component {
  state = {
    courses :[
      {name:'HTML'},
      {name:'CSS'},
      {name:'React'}
    ]
  };
  render() {
    let {courses} = this.state;
    let coursesList = courses.map((course,index) =>{
      return(
        <ListCourse details={course} key={index}/>
      )
    })
    return (
      <div className="App">
        <h1>Add Course</h1>
        <CourseForm />
        <ul>
        {coursesList}
        </ul>
      </div>
    );
  }
}

export default App;
