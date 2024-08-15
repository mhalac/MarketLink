"use server"
export async function signup(e:Event,formData: FormData) {
    e.preventDefault();
    const response = await fetch("/api/auth/register",{
        method:'POST',
        body: JSON.stringify(formData),
    })
    return response;
}