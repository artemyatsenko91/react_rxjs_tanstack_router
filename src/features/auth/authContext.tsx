import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import SessionService from "../../core/services/sessionService";
import { container } from "tsyringe";
import AuthService, { AuthState } from "./authService";

export interface AuthContext extends AuthState {
    login: (username: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const sessionService = container.resolve(SessionService);
    const authService = container.resolve(AuthService);

    const [user, setUser] = useState<AuthState>({
        isAuthenticated: false,
        user: sessionService.getSession(),
    });

    const login = useCallback(async (username: string) => {
        authService.login(username);
        setUser({
            isAuthenticated: true,
            user: username,
        });
    }, []);

    const logout = useCallback(async () => {
        authService.logout();
        setUser({
            isAuthenticated: false,
            user: null,
        });
    }, []);

    useEffect(() => {
        const authStateSubscription = authService
            .getAuthState()
            .subscribe((state) => setUser(state));

        return () => authStateSubscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ ...user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
