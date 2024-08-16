import { redirect } from "next/dist/server/api-utils";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
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