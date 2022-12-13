/* eslint-disable no-unused-vars */
import React from "react";
import "./StudentList.css";
import Student from "./Student";
import PropTypes from "prop-types";

const StudentList = (props) => {
  const studentComponents = props.students.map((student, index) => {
    return (
      <li key={index}>
        <Student name={student.nameData} email={student.emailData}></Student>
      </li>
    );
  });

  return (
    <section>
      <h2>Student List</h2>
      <ul>{studentComponents}</ul>
    </section>
  );
};
StudentList.propTypes = {
  studentData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }))
};
export default StudentList;
