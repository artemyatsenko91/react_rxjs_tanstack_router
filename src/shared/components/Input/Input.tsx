import React, { forwardRef } from "react";
import style from "./input.module.css";

const Input = forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
    return <input {...props} ref={ref} className={style.input} />;
});

Input.displayName = "Input";

export default Input;
