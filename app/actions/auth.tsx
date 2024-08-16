
export async function signup(formData: FormData) {
    
    const response = await fetch("http://localhost:3000/api/auth/register", {
        method: 'POST',
        body: formData
    });
    return response;
}