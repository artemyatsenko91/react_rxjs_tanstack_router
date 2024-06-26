/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

export default defineConfig({
    plugins: [react({ tsDecorators: true }), TanStackRouterVite()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./setupTests.ts",
        coverage: {
            provider: "v8",
        },
    },
});
