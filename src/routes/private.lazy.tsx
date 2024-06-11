import React, { useContext, useEffect, useState } from "react";
import { createLazyFileRoute, Navigate } from "@tanstack/react-router";
import AuthContext from "../features/auth/authContext";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = () => {
    const authService = useContext(AuthContext);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const subscription = authService
            .getAuthState()
            .subscribe((authState) => {
                setIsAuthenticated(authState.isAuthenticated);
                setLoading(false);
            });

        return () => subscription.unsubscribe();
    }, [authService]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/form" replace />;
    }

    return <>Private route</>;
};

export default PrivateRoute;

export const Route = createLazyFileRoute("/private")({
    component: PrivateRoute,
});
