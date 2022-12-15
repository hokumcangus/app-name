import { useState } from "react";
import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import Post from "./components/Post";
const App = () => {
  const [studentData, setStudentData] = useState([
    {
      nameData: "Ada",
      emailData: "ada@dev.org",
      id: 1,
      present: true,
    },
    {
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
      id: 2,
      present: true,
    },
    {
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
      id: 3,
      present: false,
    },
  ]);
  const updateStudent = (studentToUpdate) => {
    const students = studentData.map((student) => {
      if (student.id === studentToUpdate.id) {
        return studentToUpdate;
      }
      return student;
    });
    setStudentData(students);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hoku's class</h1>
        <ClassInfo />
      </header>
      <main>
        <h1>Attendance</h1>
        <StudentList
          studentData={studentData}
          onUpdateStudent={updateStudent}
        />
        <Post />
      </main>
    </div>
  );
};
export default App;