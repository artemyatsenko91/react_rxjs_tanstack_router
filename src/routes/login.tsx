import {
    createFileRoute,
    redirect,
    useNavigate,
    useRouter,
} from "@tanstack/react-router";
import { z } from "zod";

import { useAuth } from "../features/auth/authContext";
import LoginForm from "../features/auth/components/LoginForm";

export const LoginPage = () => {
    const auth = useAuth();
    const router = useRouter();
    const navigate = useNavigate();

    const search = Route.useSearch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const fieldValue = data.get("username");

            if (!fieldValue) return;
            const username = fieldValue.toString();

            await auth.login(username);
            await router.invalidate();
            await navigate({ to: search.redirect });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Error logging in: ", error);
        }
    };

    return (
        <div>
            <h1>Form</h1>
            <LoginForm handleSubmit={handleSubmit} />
        </div>
    );
};

export const Route = createFileRoute("/login")({
    validateSearch: z.object({
        redirect: z.string().optional().catch(""),
    }),
    beforeLoad: ({ context, search }) => {
        if (context.auth.isAuthenticated) {
            throw redirect({ to: search.redirect });
        }
    },
    component: LoginPage,
});
