import { useEffect, useMemo, useState } from "react";
import { container } from "tsyringe";
import AuthService from "../authService";

export const useAuth = () => {
    const [authState, setAuthState] = useState<{
        isAuthenticated: boolean;
        user: string | null;
    }>({
        isAuthenticated: false,
        user: null,
    });
    const authService = useMemo(() => container.resolve(AuthService), []);

    useEffect(() => {
        const subscription = authService.getAuthState().subscribe(setAuthState);
        return () => subscription.unsubscribe();
    }, [authService]);

    return {
        authState,
        login: (user: string) => authService.login(user),
        logout: () => authService.logout(),
    };
};
