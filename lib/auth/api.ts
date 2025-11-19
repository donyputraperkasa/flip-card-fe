// lib/auth/api.ts
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiLogin(email: string, password: string) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Login gagal");

  return res.json(); // { access_token }
}

export async function apiGetQuestions(token: string) {
    const res = await fetch(`${API_URL}/questions`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    return res.json();
}