import "reflect-metadata";
import { describe, it, expect, beforeEach } from "vitest";
import { container } from "tsyringe";
import SessionService from "../../core/services/sessionService";

describe("AuthService", () => {
    let sessionService: SessionService;

    beforeEach(() => {
        sessionService = container.resolve(SessionService);
    });

    it("should be in localStorage", async () => {
        const user = "testUser";
        sessionService.setSession(user);

        const sessionUser = sessionService.getSession();

        expect(sessionUser).toBe(user);
    });

    it("shouldn't add empty user in localStorage", async () => {
        sessionService.setSession("");

        const sessionUser = sessionService.getSession();

        expect(sessionUser).toBeNull();
    });

    it("shouldn't be in localStorage", async () => {
        sessionService.clearSession();

        const sessionUser = sessionService.getSession();

        expect(sessionUser).toBeNull();
    });
});
