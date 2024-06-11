import { injectable } from "tsyringe";

interface SessionData {
    user: string | null;
}

const SESSION_KEY = "sessionData";

@injectable()
class SessionService {
    private sessionData: SessionData;

    constructor() {
        const savedSessionData = localStorage.getItem(SESSION_KEY);
        this.sessionData = savedSessionData
            ? JSON.parse(savedSessionData)
            : { user: null };
    }

    setSession(data: SessionData) {
        this.sessionData = data;
        localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    }

    getSession(): SessionData {
        return this.sessionData;
    }

    clearSession() {
        this.sessionData = { user: null };
        localStorage.removeItem(SESSION_KEY);
    }
}

export default SessionService;
