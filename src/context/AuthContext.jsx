

import React, { createContext, useContext } from 'react'
import useAuth from '../components/hooks/useAuth';



export const AuthContext = createContext(null);

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

  // const [role, setRole] = useState(ROLES.USER);

  const data = useAuth();

  return (

    <AuthContext.Provider value={{ data }} >
      {children}
    </AuthContext.Provider>

  )
};

export default AuthProvider;
