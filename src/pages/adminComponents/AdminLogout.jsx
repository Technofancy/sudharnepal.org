import { useContext } from "react";
import { auth } from "../../../firebase.js";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch({ type: "LOGOUT" });
      navigate("/adminlogin");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white hover:text-black p-1 rounded"
    >
      Logout
    </button>
  );
};

export default AdminLogout;
