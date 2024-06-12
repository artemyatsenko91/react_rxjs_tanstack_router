import { injectable } from "tsyringe";

@injectable()
class SessionService {
    private readonly key = "tanstack.auth.user";

    setSession(user: string) {
        if (user) {
            localStorage.setItem(this.key, user);
        } else {
            localStorage.removeItem(this.key);
        }
    }

    getSession(): string | null {
        return localStorage.getItem(this.key);
    }

    clearSession() {
        localStorage.removeItem(this.key);
    }
}

export default SessionService;

export const useSessionService = new SessionService();
