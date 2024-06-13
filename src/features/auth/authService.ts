import { injectable, inject } from "tsyringe";
import { BehaviorSubject } from "rxjs";
import SessionService from "../../core/services/sessionService";

export interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
}

@injectable()
class AuthService {
    private authState$ = new BehaviorSubject<AuthState>({
        isAuthenticated: false,
        user: null,
    });

    constructor(
        @inject(SessionService) private sessionService: SessionService,
    ) {
        const user = this.sessionService.getSession();
        if (user) {
            this.authState$.next({ isAuthenticated: true, user: user });
        }
    }

    login(user: string) {
        this.sessionService.setSession(user);
        this.authState$.next({ isAuthenticated: true, user });
    }

    logout() {
        this.sessionService.clearSession();
        this.authState$.next({ isAuthenticated: false, user: null });
    }

    getAuthState() {
        this.authState$.subscribe();
        return this.authState$.asObservable();
    }
}

export default AuthService;
