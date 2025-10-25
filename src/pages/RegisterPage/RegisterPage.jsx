import { Input, Form, Button, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

export default function RegisterPage() {
    const genderOptions = ["Male", "Female"];

    const schema = zod.object({
        name: zod.string()
            .nonempty("Please enter your name")
            .min(3, { message: "Name must be at least 3 characters" })
            .max(20, { message: "Name must be at most 20 characters" })
            .regex(/^[a-zA-Z\s]+$/, { message: "Name must contain only letters and spaces" }),

        email: zod.string()
            .nonempty("Please enter your email")
            .email({ message: "Please enter a valid email" }),

        password: zod.string()
            .nonempty("Please enter your password")
            .min(8, { message: "Password must be at least 8 characters" })
            .max(20, { message: "Password must be at most 20 characters" })
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, { message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character" }),

        rePassword: zod.string()
            .nonempty("Please confirm your password"),

        dateOfBirth: zod.coerce.date()
            .refine((date) => !Number.isNaN(date?.getTime?.()), {
                message: "Please enter your date of birth"
            })
            .refine((date) => {
                const today = new Date();
                const age = today.getFullYear() - date.getFullYear();
                return age >= 18;
            }, {
                message: "You must be at least 18 years old"
            }),

        gender: zod.string()
            .nonempty("Please select your gender")
    }).refine((data) => data.password === data.rePassword, {
        message: "Passwords do not match",
        path: ["rePassword"]
    })

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
        }, resolver: zodResolver(schema)
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
