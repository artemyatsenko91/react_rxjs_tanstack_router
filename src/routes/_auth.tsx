import {
    createFileRoute,
    Outlet,
    redirect,
    useRouter,
} from "@tanstack/react-router";
import { useAuth } from "../features/auth/authContext";
import Button from "../shared/components/Button";

export const Route = createFileRoute("/_auth")({
    beforeLoad: ({ context, location }) => {
        if (!context.auth.isAuthenticated) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                },
            });
        }
    },
    component: AuthLayout,
});

function AuthLayout() {
    const router = useRouter();
    const navigate = Route.useNavigate();
    const auth = useAuth();

    const handleLogout = async () => {
        if (window.confirm("Are you sure you want to logout?")) {
            await auth.logout();
            router.invalidate().finally(() => {
                navigate({ to: "/" });
            });
        }
    };

    return (
        <div className="p-2 h-full">
            <h1>Authenticated Route</h1>
            <p>This route's content is only visible to authenticated users.</p>
            <div className="flex max-w-[200px] mb-4">
                <Button onClick={handleLogout}>Sign Out</Button>
            </div>

            <hr />
            <Outlet />
        </div>
    );
}
