import "reflect-metadata";

import { renderHook, act } from "@testing-library/react-hooks";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { container } from "tsyringe";
import AuthService from "../authService";
import { useAuth } from "./useAuth";
import { BehaviorSubject } from "rxjs";

vi.mock("../authService");

describe("useAuth", () => {
    let authServiceMock: AuthService;
    let authStateSubject: BehaviorSubject<{
        isAuthenticated: boolean;
        user: string | null;
    }>;

    beforeEach(() => {
        authStateSubject = new BehaviorSubject<{
            isAuthenticated: boolean;
            user: string | null;
        }>({
            isAuthenticated: false,
            user: null,
        });

        authServiceMock = {
            getAuthState: vi
                .fn()
                .mockReturnValue(authStateSubject.asObservable()),
            login: vi.fn((user: string) => {
                authStateSubject.next({ isAuthenticated: true, user });
            }),
            logout: vi.fn(() => {
                authStateSubject.next({ isAuthenticated: false, user: null });
            }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any;

        container.registerInstance(AuthService, authServiceMock);
    });

    it("should initialize with a null user", async () => {
        const { result } = renderHook(() => useAuth());

        expect(result.current.authState.user).toBeNull();
        expect(result.current.authState.isAuthenticated).toBe(false);
    });

    it("should login a user", async () => {
        const { result } = renderHook(() => useAuth());

        act(() => {
            result.current.login("testUser");
        });

        expect(authServiceMock.login).toHaveBeenCalledWith("testUser");
        expect(result.current.authState.user).toBe("testUser");
        expect(result.current.authState.isAuthenticated).toBe(true);
    });

    it("should logout a user", async () => {
        const { result } = renderHook(() => useAuth());

        act(() => {
            result.current.logout();
        });

        expect(authServiceMock.logout).toHaveBeenCalled();
        expect(result.current.authState.user).toBeNull();
        expect(result.current.authState.isAuthenticated).toBe(false);
    });
});
