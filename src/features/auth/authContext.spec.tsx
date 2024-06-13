import "reflect-metadata";

import { fireEvent, render, screen } from "@testing-library/react";
import { useAuth, AuthProvider } from "./authContext";

const user = "USER";

const ConsumerComponent = () => {
    const auth = useAuth();
    return (
        <>
            <button data-testid="login" onClick={() => auth.login(user)}>
                Login
            </button>
            <button data-testid="logout" onClick={() => auth.logout()}>
                Logout
            </button>
            <span data-testid="text">
                {auth.isAuthenticated ? auth.user : "No authenticated user"}
            </span>
        </>
    );
};

describe("AuthContext", () => {
    it.only("ConsumerComponent shows default text", () => {
        render(
            <AuthProvider>
                <ConsumerComponent />
            </AuthProvider>,
        );

        const noUserAuthText = screen.getByTestId("text");

        expect(noUserAuthText).toHaveTextContent("No authenticated user");
    });

    it.only("ConsumerComponent should render user name after login", () => {
        render(
            <AuthProvider>
                <ConsumerComponent />
            </AuthProvider>,
        );

        const loginButton = screen.getByTestId("login");
        const userAuthText = screen.getByTestId("text");

        expect(loginButton).toHaveTextContent("Login");
        fireEvent.click(loginButton);
        expect(userAuthText).toHaveTextContent(user);
    });

    it.only("ConsumerComponent should render default text after logout", () => {
        render(
            <AuthProvider>
                <ConsumerComponent />
            </AuthProvider>,
        );

        const loginButton = screen.getByTestId("login");
        const logoutButton = screen.getByTestId("logout");
        const userAuthText = screen.getByTestId("text");

        expect(loginButton).toHaveTextContent("Login");
        fireEvent.click(loginButton);
        expect(userAuthText).toHaveTextContent(user);
        fireEvent.click(logoutButton);
        expect(userAuthText).toHaveTextContent("No authenticated user");
    });
});
