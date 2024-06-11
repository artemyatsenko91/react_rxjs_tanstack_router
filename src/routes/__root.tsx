import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Button from "../shared/components/Button";

export const Route = createRootRoute({
    component: () => {
        return (
            <>
                <div className="p-2 grid grid-cols-4 gap-2 w-full">
                    <Link to="/" className="[&.active]:font-bold">
                        Home
                    </Link>
                    <Link to="/private" className="[&.active]:font-bold">
                        Private Route
                    </Link>
                    <Button className="justify-self-end"> Logout</Button>
                </div>
                <hr />
                <Outlet />
                <TanStackRouterDevtools />
            </>
        );
    },
});
