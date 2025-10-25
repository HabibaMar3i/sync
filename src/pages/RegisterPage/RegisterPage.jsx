import { Input, Form, Button, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
    const genderOptions = ["Male", "Female"];

    function handleRegister(formData){
        alert("Register Success")
        console.log(formData);
        
    }

    const {handleSubmit, register} = useForm()

    return (
        <div className="max-w-2xl m-auto flex flex-col gap-3">
            <h1 className="text-center text-3xl font-bold mb-1">Register Page</h1>
            <Form onSubmit={handleSubmit(handleRegister)}>
                <Input label="Name" type="text" variant="flat" size="sm" {...register("name")}/>
                <Input label="Email" type="email" variant="flat" size="sm" {...register("email")}/>
                <Input label="Password" type="password" variant="flat" size="sm" {...register("password")}/>
                <Input label="Confirm Password" type="password" variant="flat" size="sm" {...register("rePassword")}/>
                <Input label="Date of Birth" type="date" variant="flat" size="sm" {...register("dateOfBirth")}/>
                <Select
                    items={genderOptions}
                    label="Gender"
                    placeholder="Select your Gender"
                    {...register("gender")}
                >
                    {genderOptions.map((gender) => (
                        <SelectItem key={gender} value={gender}>
                            {gender}
                        </SelectItem>
                    ))}
                </Select>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
