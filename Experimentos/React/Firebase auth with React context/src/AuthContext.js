import { createContext } from 'react';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, authLoading, authError] = useAuthState(auth);
  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
  };
  const logout = () => {
    auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, authLoading, authError, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;