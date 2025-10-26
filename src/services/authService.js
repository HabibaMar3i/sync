import axios from "axios";

export async function registerApi(formData){
    try {
        const { data } = await axios.post("https://linked-posts.routemisr.com/users/signup", formData)
        return { message: data.message || "Registration successful" }      
    } catch (error) {
        return { error: error.response?.data?.error || "Registration failed" }
    }
}

export async function loginApi(formData){
    try {
        const { data } = await axios.post("https://linked-posts.routemisr.com/users/signin", formData)
        return { message: data.message || "Login successful" }      
    } catch (error) {
        return { error: error.response?.data?.error || "Login failed" }
    }
}