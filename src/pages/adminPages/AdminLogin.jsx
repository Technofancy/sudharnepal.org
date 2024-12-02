import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const AdminLogin = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch({ type: "LOGIN", payload: user });
        navigate("/adminpanel");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <form onSubmit={handleLogin} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-54 h-9 m-3"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-54 h-9 m-3"
        />
        <button
          type="submit"
          className="w-3/5 h-9 m-3 bg-purple-900 text-white font-bold cursor-pointer"
        >
          Login
        </button>
        {error && (
          <span className="text-3 text-red-500">Wrong email or password!</span>
        )}
      </form>
    </div>
  );
};

export default AdminLogin;
