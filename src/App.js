import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Class from "./Components/Pages/Class/Class";
import SerchStudent from "./Components/Pages/Search-Student/SearchStudent";
import AllStudents from "./Components/Pages/All-Students/AllStudents";
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<Class />} />
        <Route path="/search-student" element={<SerchStudent />} />
        <Route path="/all-students" element={<AllStudents />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
