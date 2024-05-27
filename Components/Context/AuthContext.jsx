import { useContext, createContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
  // signOut,
  // onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../GoogleAuthentication/GoogleConfig";
const AuthContext = createContext({
  token: "",
  isloggedin: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const initilatoken = localStorage.getItem("Auth");
  const [token, settoken] = useState(initilatoken);
  const Googlesignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const isloggedin = !!token;

  const loginHandler = (token) => {
    settoken(token);
    localStorage.setItem("Auth", token);
  };
  const logoutHandler = () => {
    settoken(null);
    localStorage.removeItem("Auth");
  };
  return (
    <AuthContext.Provider
      value={{ Googlesignin, isloggedin, loginHandler, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
