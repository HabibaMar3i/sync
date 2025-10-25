import { Input, Form, Button, Select, SelectItem } from "@heroui/react";

export default function RegisterPage() {
    const genderOptions = ["Male", "Female"];

    function handleRegister(){
        alert("Register Success")
    }

    return (
        <div className="max-w-2xl m-auto flex flex-col gap-3">
            <h1 className="text-center text-3xl font-bold mb-1">Register Page</h1>
            <Form onSubmit={handleRegister}>
                <Input label="Name" type="text" variant="flat" size="sm" />
                <Input label="Email" type="email" variant="flat" size="sm" />
                <Input label="Password" type="password" variant="flat" size="sm" />
                <Input label="Confirm Password" type="password" variant="flat" size="sm" />
                <Input label="Date of Birth" type="date" variant="flat" size="sm" />
                <Select
                    items={genderOptions}
                    label="Gender"
                    placeholder="Select your Gender"
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
