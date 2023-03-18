import React, { useState, useCallback, createContext} from "react";

const AuthContext = createContext(null);

export default function ({children}){
    const [user, setUser] = useState('');
    const login = useCallback((name) => {
        setUser(name);
    }, []);

    const logout = useCallback(() => {
        setUser('');
    }, []);

    return (
        <AuthContext.Provider value={{user, login, logout, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
