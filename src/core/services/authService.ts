import { injectable } from "tsyringe";
import { BehaviorSubject } from "rxjs";

interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
}

@injectable()
class AuthService {
    private authState = new BehaviorSubject<AuthState>({
        isAuthenticated: false,
        user: null,
    });

    login(user: string) {
        this.authState.next({ isAuthenticated: true, user });
    }

    logout() {
        this.authState.next({ isAuthenticated: false, user: null });
    }

    getAuthState() {
        return this.authState.asObservable();
    }
}

export default AuthService;
