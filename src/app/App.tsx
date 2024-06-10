import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
