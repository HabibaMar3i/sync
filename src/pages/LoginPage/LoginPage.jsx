import { Input, Form, Button, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../../schemas/authSchema";
import { loginApi } from "../../services/authService";
import { useState } from "react";

export default function loginPage() {

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }, resolver: zodResolver(loginSchema)
    });

    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    async function handleLogin(formData) {
        setIsLoading(true)
        const data = await loginApi(formData)
        setIsLoading(false)
        if (data?.error) {
            setErrorMsg(data.error)
            setSuccessMsg("")
        } else {
            setSuccessMsg(data.message)
            setErrorMsg("")
        }
    }

    return (
        <div className="max-w-2xl m-auto flex flex-col gap-3">
            <h1 className="text-center text-3xl font-bold mb-1">login Page</h1>
            <Form onSubmit={handleSubmit(handleLogin)}>
                <Input
                    label="Email"
                    type="email"
                    variant="flat"
                    size="sm"
                    {...register("email")}
                    errorMessage={errors.email?.message}
                    isInvalid={Boolean(errors.email)}
                />

                <Input
                    label="Password"
                    type="password"
                    variant="flat"
                    size="sm"
                    {...register("password")}
                    errorMessage={errors.password?.message}
                    isInvalid={Boolean(errors.password)}
                />

                <Button type="submit" className="w-full" isLoading={isLoading}>Submit</Button>
                {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
                {successMsg && <p className="text-green-500 text-center">{successMsg}</p>}
            </Form>
        </div>
    );
}
