import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";

import StudentDashboard from "./pages/StudentDashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/verify" element={<VerifyEmail />} />

         <Route path="/student" element={<StudentDashboard />} />

       <Route path="/volunteer" element={<VolunteerDashboard />} />

       <Route path="/faculty" element={<FacultyDashboard />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;