import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState("");
    const { login, authState } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(username);
    };

    console.log(authState);

    return (
        <form
            onSubmit={handleSubmit}
            className="p-4 bg-white rounded shadow-md"
        >
            <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;
