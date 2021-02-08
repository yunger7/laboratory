import { createContext } from 'react';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, authLoading, authError] = useAuthState(auth);

  return (
    <AuthContext.Provider value={{ user, authLoading, authError }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;