"use client";

import { useState } from "react";
import { apiLogin } from "@/lib/auth/api";
import { X } from "lucide-react";
import { saveToken, saveUser } from "@/lib/auth/auth";

export default function LoginPage({ onSuccess, onClose, onSwitchToRegister }: { onSuccess?: () => void; onClose?: () => void; onSwitchToRegister?: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] =useState(false);
    const [error, setError] =useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await apiLogin(email, password);
            // ambil token dari respon apapun bentuknya
            const token = res.token || res.access_token || res.accessToken;
            if (!token) {
                throw new Error("Token tidak ditemukan");
            }

            saveToken(token);
            saveUser(email);

            // window.location.href = "/admin";
            onSuccess?.();
        } catch (err) {
            console.error(err);
            setError("Email atau password salah!");
        }

        setLoading(false);
    }

    return (
        <div className="p-4">
            <div className="w-full animate-fadeIn">
                <form
                    onSubmit={handleLogin}
                    className="space-y-4"
                >
                <h2 className="text-3xl font-bold text-purple-700 mb-6">
                Login dulu kakaaa
                </h2>

                    {error && <p className="text-red-500 text-left">{error}</p>}
                    <label className="block mb-1 font-semibold text-left">Email</label>
                    <input
                        type="email"
                        placeholder="masukan email mu"
                        className="border w-full p-2 rounded"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="block mb-1 font-semibold text-left">Password</label>
                    <input
                        type="password"
                        placeholder="jangan lupa password-nya"
                        className="border w-full p-2 rounded"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-lg font-semibold transitio"
                    >
                        {loading ? "Loading..." : "Login"}
                    </button>
                    <button
                        type="button"
                        onClick={() => onClose?.()}
                        className="w-full py-2 rounded-lg border bg-gray-200 border-gray-400 text-gray-700 hover:bg-gray-100 transition"
                    >
                        Close
                    </button>
                    <p
                        className="text-center text-sm text-blue-600 cursor-pointer hover:underline"
                        onClick={() => { onClose?.(); onSwitchToRegister?.(); }}
                    >
                        Belum punya akun? Daftar
                    </p>
                </form>
            </div>
        </div>
    );
}