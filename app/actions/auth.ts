
export async function signup(e: React.SyntheticEvent) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const response = await fetch("http://localhost:3000/api/register", {
        method: 'POST',
        body: data,
    });
    return response;
}