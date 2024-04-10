import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  // Define your user interface here
}

interface AuthContextType {
  user: User | null;
  token: string;
  loginAction: (data: User) => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  const loginAction = (data: User) => {
    // Your login logic here
    console.log(data);
    console.log("run in login action");
    setUser(data);
    setToken("123");
    localStorage.setItem("site", "123");
    navigate("/");
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loginAction, logOut, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
