import React from "react";
import PropTypes from "prop-types";
import "./StudentList.css";
import Student from "./Student";
const StudentList = ({ studentData, onUpdateStudent }) => {
  const componentClass = "student-list";
  const studentComponents = studentData.map((student) => {
    return (
      <li key={student.id}>
        <Student
          name={student.nameData}
          email={student.emailData}
          id={student.id}
          isPresent={student.present}
          onUpdateStudent={onUpdateStudent}
        />
      </li>
    );
  });
  return (
    <article>
      <h2 className="student-list__header yellow-big">Student List</h2>
      <ul className={componentClass}>{studentComponents}</ul>
    </article>
  );
};
StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      present: PropTypes.bool,
      onUpdateStudent: PropTypes.func.isRequired,
    })
  ).isRequired,
};
export default StudentList;