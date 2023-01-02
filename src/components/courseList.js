import { Fragment, useRef, useState } from "react";

function CourseList(props) {
  const [isEdit, setIsEdit] = useState(false);
  const courseRef = useRef();
  const renderCourse = () => {
    return (
      <li>
        <span>{props.course.name}</span>
        <button
          onClick={() => {
            toggleState();
          }}
        >
          Edit Course
        </button>
        <button
          onClick={() => {
            props.deleteCourse(props.index);
          }}
        >
          Delete Course
        </button>
      </li>
    );
  };

  const toggleState = () => {
    setIsEdit(!isEdit);
  };

  const updateCourse = (e) => {
    e.preventDefault();
    props.editCourse(props.index, courseRef.current.value);
    toggleState();
  };

  const renderUpdateForm = () => {
    return (
      <form onSubmit={updateCourse}>
        <input type="text" ref={courseRef} defaultValue={props.course.name} />
        <button>Update Course</button>
      </form>
    );
  };
  return <Fragment>{isEdit ? renderUpdateForm() : renderCourse()}</Fragment>;
}

export default CourseList;
