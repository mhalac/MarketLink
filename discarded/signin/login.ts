export async function login(e: React.SyntheticEvent) {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const header = new Headers();
    const response = await fetch("http://localhost:3000/api/login", {
        method: 'POST',
        headers: header,
        body: data,
    });
    return response;
}