import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [accessToken, setAccessToken] = useState(null);

    return (
        <AuthContext.Provider value={{user, setUser, accessToken, setAccessToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;