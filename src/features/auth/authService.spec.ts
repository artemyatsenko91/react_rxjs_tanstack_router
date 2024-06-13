import "reflect-metadata";
import { describe, it, expect, beforeEach } from "vitest";
import { container } from "tsyringe";
import AuthService, { AuthState } from "./authService";
import { firstValueFrom } from "rxjs";

describe("AuthService", () => {
    let authService: AuthService;

    beforeEach(() => {
        authService = container.resolve(AuthService);

        vi.spyOn(authService, "login");
        vi.spyOn(authService, "logout");
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    const getUser = async (): Promise<AuthState> => {
        const authState$ = authService.getAuthState();
        const stateUser = await firstValueFrom(authState$);
        return stateUser;
    };

    it("should initialize with a null user", async () => {
        const user = await getUser();
        expect(user.user).toBeNull();
        expect(user.isAuthenticated).toBe(false);
    });

    it("should login a user", async () => {
        const user = "testUser";
        authService.login(user);

        const userState = await getUser();

        expect(userState.user).toBe(user);
        expect(userState.isAuthenticated).toBe(true);
        expect(authService.login).toHaveBeenCalledTimes(1);
    });

    it("should logout a user", async () => {
        authService.logout();
        const user = await getUser();

        expect(user.user).toBeNull();
        expect(user.isAuthenticated).toBe(false);
        expect(authService.logout).toHaveBeenCalledTimes(1);
    });
});
