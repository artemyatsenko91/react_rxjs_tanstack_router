import {
    createFileRoute,
    redirect,
    useNavigate,
    useRouter,
} from "@tanstack/react-router";
import "reflect-metadata";
import { z } from "zod";

import { useAuth } from "../features/auth/authContext";
import LoginForm from "../features/auth/components/LoginForm";

export const Route = createFileRoute("/login")({
    validateSearch: z.object({
        redirect: z.string().optional().catch(""),
    }),
    beforeLoad: ({ context, search }) => {
        if (context.auth.isAuthenticated) {
            throw redirect({ to: search.redirect });
        }
    },
    component: Form,
});

function Form() {
    const auth = useAuth();
    const router = useRouter();
    const navigate = useNavigate();

    const search = Route.useSearch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log("first");
        try {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const fieldValue = data.get("username");
            console.log(fieldValue);
            if (!fieldValue) return;
            const username = fieldValue.toString();

            await auth.login(username);
            await router.invalidate();
            await navigate({ to: search.redirect });
        } catch (error) {
            console.error("Error logging in: ", error);
        }
    };

    return (
        <div>
            <h1>Form</h1>
            <LoginForm handleSubmit={handleSubmit} />
        </div>
    );
}
