"use client";

import { useState } from "react";
import { apiLogin } from "@/lib/auth/api";
import { saveToken } from "@/lib/auth/auth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
        const res = await apiLogin(email, password);
        saveToken(res.access_token);
        window.location.href = "/admin"; // redirect setelah login
        } catch (err) {
        setError("Email atau password salah");
        }

        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
        <form
            onSubmit={handleLogin}
            className="bg-white shadow p-6 rounded-xl w-full max-w-sm space-y-4"
        >
            <h1 className="text-xl font-bold text-center">Login</h1>

            {error && <p className="text-red-500">{error}</p>}

            <input
            type="email"
            placeholder="Email"
            className="border w-full p-2 rounded"
            onChange={(e) => setEmail(e.target.value)}
            />

            <input
            type="password"
            placeholder="Password"
            className="border w-full p-2 rounded"
            onChange={(e) => setPassword(e.target.value)}
            />

            <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white w-full py-2 rounded"
            >
            {loading ? "Loading..." : "Login"}
            </button>
        </form>
        </div>
    );
}