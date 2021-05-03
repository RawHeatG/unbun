import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ user: null });

  const loginUser = (userDetails) => {
    setUser({ user: userDetails?.user });
  };

  return (
    <AuthContext.Provider value={{ user, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
