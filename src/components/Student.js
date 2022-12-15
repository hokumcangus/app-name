import React from "react";
import "./StudentList.css";
import PropTypes from "prop-types";


const Student = ({ name, email, id, isPresent, onUpdateStudent }) => {
  if (isPresent) {
    console.log(`${name} is present!`);
  } else {
    console.log(`${name} is absent!`);
  }
  const updateAttendence = () => {
    onUpdateStudent({
      id,
      emailData: email,
      nameData: name,
      present: !isPresent,
    });
    console.log(`Updating Attendance for ${name}`);
  };
  const nameColor = isPresent ? "green" : "red";
  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {name}</li>
        <li>Email: {email}</li>
      </ul>
      <button onClick={updateAttendence}>Toggle if {name} is present</button>
    </div>
  );
};
Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool,
  onUpdateStudent: PropTypes.func.isRequired,
};
export default Student;