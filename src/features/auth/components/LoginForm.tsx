import React from "react";
import * as Form from "@radix-ui/react-form";
import Button from "../../../shared/components/Button";
import style from "./loginForm.module.css";

interface LoginForm {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const LoginForm: React.FC<LoginForm> = ({ handleSubmit }) => {
    return (
        <Form.Root className="w-[260px]" onSubmit={handleSubmit}>
            <Form.Field className="grid mb-[10px]" name="email">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] font-medium leading-[35px] text-black">
                        Name
                    </Form.Label>
                    <Form.Message
                        className="text-[13px] text-black opacity-[0.8]"
                        match="valueMissing"
                    >
                        Please enter your name
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className={style["login-form"]}
                        type="name"
                        name="username"
                        data-testid="username-input"
                        required
                    />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <Button type="submit" data-testid="sign_in-button">
                    Sign In
                </Button>
            </Form.Submit>
        </Form.Root>
    );
};

export default LoginForm;
