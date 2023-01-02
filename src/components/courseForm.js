import React from "react";

function CourseForm(props) {
  return (
    <form onSubmit={props.addCourse}>
      <input
        type="text"
        onChange={props.updateCourse}
        placeholder="Enter Course Name..."
        value={props.current}
      />
      <button>Add Course</button>
    </form>
  );
}

export default CourseForm;
