import "reflect-metadata";

import { container } from "tsyringe";
import SessionService from "../services/sessionService";
import AuthService from "../../features/auth/authService";

describe("DI Container", () => {
    beforeEach(() => {
        container.registerSingleton(SessionService);
        container.registerSingleton(AuthService);
    });

    afterEach(() => {
        container.clearInstances();
    });

    it("should resolve SessionService as a singleton", () => {
        const sessionService1 = container.resolve(SessionService);
        const sessionService2 = container.resolve(SessionService);
        expect(sessionService1).toBe(sessionService2);
    });

    it("should resolve AuthService as a singleton", () => {
        const authService1 = container.resolve(AuthService);
        const authService2 = container.resolve(AuthService);
        expect(authService1).toBe(authService2);
    });
});
