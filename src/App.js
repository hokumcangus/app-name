import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  const studentData = [
    {
        nameData: 'Ada',
        emailData: 'ada@dev.org'
    },
    {
        nameData: 'Soo-ah',
        emailData: 'sooah@dev.org'
    },
    {
        nameData: 'Chrissy',
        emailData: 'chrissy@dev.org'
    }
  ];
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hokus class</h1>
      </header>
      <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList students={studentData}></StudentList>

    </main>
    </div>
  );
}

export default App;                                                                                                                      