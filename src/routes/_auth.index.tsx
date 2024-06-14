import { createFileRoute } from "@tanstack/react-router";

export const Home = () => {
    return (
        <div>
            <h1>hello world</h1>
        </div>
    );
};

export const Route = createFileRoute("/_auth/")({
    component: Home,
});
