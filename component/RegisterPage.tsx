"use client";

import { useState } from "react";

export default function RegisterPage({ onSuccess, onClose, onSwitchToLogin }: { onSuccess?: () => void; onClose?: () => void; onSwitchToLogin?: () => void }) {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setMessage("");

        if (form.password !== form.confirmPassword) {
        setMessage("Password dan Konfirmasi Password harus sama.");
        return;
        }

        try {
        setLoading(true);

        const API = process.env.NEXT_PUBLIC_API_URL;

        const response = await fetch(`${API}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: form.email,
                password: form.password,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            setMessage(data.message || "Kayaknya ada kesalahan dehhh 🗿");
        } else {
            setMessage("Yaaayyy berhasil 🥳 !! Silakan login.");
            setForm({ email: "", password: "", confirmPassword: "" });

            // Hapus token lama biar tidak auto-login ke akun sebelumnya
            if (typeof window !== "undefined") {
                localStorage.removeItem("token");
            }

            // Tutup modal register, lalu buka modal login
            onClose?.();
            onSwitchToLogin?.();
        }
        } catch (err) {
        setMessage("Gagal terhubung ke server.");
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <div className="w-full animate-fadeIn">
                <h2 className="text-3xl font-bold text-purple-700 mb-6">
                    Bikin akun dulu kakaaa
                </h2>

                {message && (
                <p className="mb-4 text-red-600 font-medium">
                    {message}
                </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-semibold text-left text-purple-700">Email</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="Masukkan email mu yaa :)"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-gray-700 border-2 border-purple-400 rounded-lg p-2 focus:border-purple-600 focus:outline-none placeholder:text-gray-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-left text-purple-700">Password</label>
                    <input
                    type="password"
                    name="password"
                    placeholder="jangan lupa password-nya"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-gray-700 border-2 border-purple-400 rounded-lg p-2 focus:border-purple-600 focus:outline-none placeholder:text-gray-500"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold text-left text-purple-700">Konfirmasi Password</label>
                    <input
                    type="password"
                    name="confirmPassword"
                    placeholder="hayooo tadi passwordnya apa"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-gray-700 border-2 border-purple-400 rounded-lg p-2 focus:border-purple-600 focus:outline-none placeholder:text-gray-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-lg font-semibold transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {loading ? "Memproses..." : "Daftar"}
                </button>
                <button
                    type="button"
                    onClick={() => onClose?.()}
                    className="w-full py-2 rounded-lg border bg-gray-200 border-gray-400 text-gray-700 hover:bg-gray-100 transition"
                >
                    Close
                </button>
                <p
                    className="text-center text-sm text-blue-600 cursor-pointer hover:underline mt-2"
                    onClick={() => { onClose?.(); onSwitchToLogin?.(); }}
                >
                    Sudah punya akun? Login
                </p>
                </form>
            </div>
        </div>
    );
}