import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./pages/Register";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import PlacementSubmission from "./pages/PlacementSubmission";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/placement" element={<PlacementSubmission />} />
          <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;