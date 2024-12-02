import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RequireAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notification from "./pages/Notification";
import ProgramNews from "./pages/ProgramNews";
import Registration from "./pages/Registration";
import AdminLogin from "./pages/adminPages/AdminLogin";
import AdminPanel from "./pages/adminPages/AdminPanel";
import EditMember from "./pages/adminComponents/EditMember";
import EditNotice from "./pages/adminComponents/EditNotice";
import EditNews from "./pages/adminComponents/EditNews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/programnews" element={<ProgramNews />} />
        <Route path="/registration" element={<Registration />} />

        {/* Admin Routes */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        {/* Protected Routes */}
        <Route
          path="/adminpanel"
          element={
            <RequireAuth>
              <AdminPanel />
            </RequireAuth>
          }
        />
        <Route
          path="/editmember"
          element={
            <RequireAuth>
              <EditMember />
            </RequireAuth>
          }
        />
        <Route
          path="/editnotice"
          element={
            <RequireAuth>
              <EditNotice />
            </RequireAuth>
          }
        />
        <Route
          path="/editnews"
          element={
            <RequireAuth>
              <EditNews />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
