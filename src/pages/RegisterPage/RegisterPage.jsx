import { Input } from "@heroui/react";

export default function RegisterPage() {
    return (
        <div className="max-w-2xl m-auto flex flex-col gap-3">
                <h1 className="text-center text-3xl font-bold mb-1">Register Page</h1>
                <Input label="Name" type="text" variant="flat" size="sm"/>
                <Input label="Email" type="email" variant="flat" size="sm"/>
        </div>
    )
}
