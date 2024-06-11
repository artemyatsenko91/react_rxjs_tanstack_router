import React, { createContext, useContext } from "react";
import { container } from "tsyringe";
import AuthService from "./authService";

const authService = container.resolve(AuthService);

const AuthContext = createContext(authService);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <AuthContext.Provider value={authService}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
