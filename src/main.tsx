import "reflect-metadata";
import React from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import "./index.css";
import { routeTree } from "./routeTree.gen";
import { AuthProvider, useAuth } from "./features/auth/authContext";

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const router = createRouter({
    routeTree,
    context: {
        auth: undefined!,
    },
});

const InnerApp = () => {
    const auth = useAuth();
    return <RouterProvider router={router} context={{ auth }} />;
};

const App = () => {
    return (
        <AuthProvider>
            <InnerApp />
        </AuthProvider>
    );
};

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
} else {
    // eslint-disable-next-line no-console
    console.error("No container found with id 'app'");
}
