import { useState } from "react";
import "./App.css";
import CourseForm from "./components/courseForm";
import CourseList from "./components/courseList";

function App() {
  const [courses, setCourses] = useState([
    { name: "HTML" },
    { name: "CSS" },
    { name: "JQuery" },
  ]);

  const [current, setCurrent] = useState("");

  // update course
  const updateCourse = (e) => {
    setCurrent(e.target.value);
  };

  // add course
  const addCourse = (e) => {
    if (current !== "") {
      e.preventDefault();
      courses.push({ name: current });
      setCurrent("");
    } else {
      e.preventDefault();
    }
  };

  // delete course
  const deleteCourse = (index) => {
    let inCourses = [...courses];
    inCourses.splice(index, 1);
    setCourses(inCourses);
  };

  // edit course
  const editCourse = (index, value) => {
    let inCourses = [...courses];
    let course = inCourses[index];
    course["name"] = value;
    setCourses(inCourses);
  };

  const courseList = courses.map((course, index) => {
    return (
      <CourseList
        course={course}
        key={index}
        index={index}
        deleteCourse={deleteCourse}
        editCourse={editCourse}
      />
    );
  });

  return (
    <section className="App">
      <h2>Add Courses</h2>

      <CourseForm
        updateCourse={updateCourse}
        addCourse={addCourse}
        current={current}
      />
      <ul>{courseList}</ul>
    </section>
  );
}

export default App;
