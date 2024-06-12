import "reflect-metadata";
import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            className="box-border w-full text-white shadow-blackA4 hover:bg-blue-800 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-blue-500 px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
        >
            {children}
        </button>
    );
};

export default Button;
