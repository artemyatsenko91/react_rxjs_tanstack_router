import "reflect-metadata";
import React from "react";
import { useAuth } from "../../features/auth/hooks/useAuth";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    ...props
}) => {
    const { logout } = useAuth();
    return (
        <button
            {...props}
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => logout()}
        >
            {children}
        </button>
    );
};

export default Button;
