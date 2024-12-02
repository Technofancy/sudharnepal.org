import { createContext, useEffect, useReducer, useContext } from "react";
import {
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  // browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../../firebase";
import AuthReducer from "./AuthReducer";
import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  currentUser: null,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const preferredPersistence = browserLocalPersistence; // Use browserLocalPersistence if needed
        await setPersistence(auth, preferredPersistence);

        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch({ type: "LOGIN", payload: user });
          } else {
            dispatch({ type: "LOGOUT" });
          }
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error setting persistence:", error);
      }
    };

    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// RequireAuth Component
const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/adminlogin" />;
};

// AdminLogout Component
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
      className="bg-red-500 text-white p-2 rounded"
    >
      Logout
    </button>
  );
};

export { AuthContext, AuthContextProvider, RequireAuth, AdminLogout };
