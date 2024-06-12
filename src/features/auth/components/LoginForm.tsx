import React from "react";
import * as Form from "@radix-ui/react-form";
import Button from "../../../shared/components/Button";

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
                        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                        type="name"
                        name="username"
                        required
                    />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <Button type="submit">Sign In</Button>
            </Form.Submit>
        </Form.Root>
    );
};

export default LoginForm;
