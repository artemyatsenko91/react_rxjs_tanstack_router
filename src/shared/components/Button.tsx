import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    ...props
}) => {
    return (
        <button {...props} className="px-4 py-2 bg-blue-500 text-white rounded">
            {children}
        </button>
    );
};

export default Button;
