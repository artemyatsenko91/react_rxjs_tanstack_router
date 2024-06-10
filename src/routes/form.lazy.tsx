import "reflect-metadata";
import { createLazyFileRoute } from "@tanstack/react-router";
import LoginForm from "../features/auth/components/LoginForm";

const Form = () => {
    return (
        <div>
            <h1>Form</h1>
            <LoginForm />
        </div>
    );
};

export const Route = createLazyFileRoute("/form")({
    component: Form,
});
