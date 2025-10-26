import { Input, Form, Button, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../schemas/authSchema";
import registerApi from "../../services/authService";
import { useState } from "react";
import { set } from "zod";

export default function RegisterPage() {

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            dateOfBirth: "",
            gender: ""
        }, resolver: zodResolver(registerSchema)
    });

    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    async function handleRegister(formData) {
        setIsLoading(true)
        const data = await registerApi(formData)
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
            <h1 className="text-center text-3xl font-bold mb-1">Register Page</h1>
            <Form onSubmit={handleSubmit(handleRegister)}>
                <Input
                    label="Name"
                    type="text"
                    variant="flat"
                    size="sm"
                    {...register("name")}
                    errorMessage={errors.name?.message}
                    isInvalid={Boolean(errors.name)}
                />

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

                <Input
                    label="Confirm Password"
                    type="password"
                    variant="flat"
                    size="sm"
                    {...register("rePassword")}
                    errorMessage={errors.rePassword?.message}
                    isInvalid={Boolean(errors.rePassword)}
                />

                <Input
                    label="Date of Birth"
                    type="date"
                    variant="flat"
                    size="sm"
                    {...register("dateOfBirth")}
                    errorMessage={errors.dateOfBirth?.message}
                    isInvalid={Boolean(errors.dateOfBirth)}
                />

                <Select
                    label="Gender"
                    placeholder="Select your Gender"
                    {...register("gender")}
                    errorMessage={errors.gender?.message}
                    isInvalid={Boolean(errors.gender)}
                >
                    <SelectItem key="male" value="male">
                        Male
                    </SelectItem>
                    <SelectItem key="female" value="female">
                        Female
                    </SelectItem>
                </Select>
                <Button type="submit" className="w-full" isLoading={isLoading}>Submit</Button>
                {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
                {successMsg && <p className="text-green-500 text-center">{successMsg}</p>}
            </Form>
        </div>
    );
}
