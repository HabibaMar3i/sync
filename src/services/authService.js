import axios from "axios";

export default async function registerApi(formData){
    try {
        const { data } = await axios.post("https://linked-posts.routemisr.com/users/signup", formData)
        return { message: data.message }      
    } catch (error) {
        return { error: error.response?.data?.error }
    }
}