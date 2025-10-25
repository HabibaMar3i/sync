import { Input, Form, Button, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../../schemas/auth-schema";

export default function RegisterPage() {
    const genderOptions = ["Male", "Female"];

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


    function handleRegister(formData) {
        alert("Register Success");
        console.log(formData);
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
                    items={genderOptions}
                    label="Gender"
                    placeholder="Select your Gender"
                    {...register("gender")}
                    errorMessage={errors.gender?.message}
                    isInvalid={Boolean(errors.gender)}
                >
                    {genderOptions.map((gender) => (
                        <SelectItem key={gender} value={gender}>
                            {gender}
                        </SelectItem>
                    ))}
                </Select>
                <Button type="submit" className="w-full">Submit</Button>
            </Form>
        </div>
    );
}
