import React from "react";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
    props
) => {
    return <input {...props} className="px-4 py-2 border rounded" />;
};

export default Input;
