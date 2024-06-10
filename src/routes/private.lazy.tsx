import "reflect-metadata";
import React from "react";
import {
    createLazyFileRoute,
    useLocation,
    Navigate,
} from "@tanstack/react-router";
import { useAuth } from "../features/auth/hooks/useAuth";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = () => {
    const { authState } = useAuth();
    const location = useLocation();

    if (!authState.isAuthenticated) {
        return <Navigate to="/form" state={{ from: location }} replace />;
    }

    return <>PrivateRout</>;
};

export default PrivateRoute;

export const Route = createLazyFileRoute("/private")({
    component: PrivateRoute,
});
