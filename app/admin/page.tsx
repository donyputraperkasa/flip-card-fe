"use client";

import { GraduationCap, BookOpenCheck, Gamepad2, ArrowLeft } from "lucide-react";
import { useAuth } from "@/lib/hooks/useAuth";

export default function AdminHome() {
    const { userEmail } = useAuth();
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 flex flex-col items-center px-4 py-10">

            {/* NAVBAR */}
            <div className="w-full bg-white/40 backdrop-blur-md border-b border-white/30 shadow-lg rounded-xl py-4 mb-10">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-purple-800 flex items-center justify-center gap-3">
                    <GraduationCap className="w-8 h-8 text-purple-700" />
                    Admin Dashboard
                </h1>
                <p className="text-center text-purple-700 font-semibold mt-1">
                    {userEmail}
                </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-base sm:text-lg text-purple-900 opacity-80 max-w-2xl text-center mb-10 px-2">
                Selamat datang di halaman admin.  
                Dari sini Anda dapat mengelola soal untuk game flip-card, menambahkan soal baru,
                mengedit konten, dan mengatur media pembelajaran.
            </p>

            {/* MENU CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl px-2">

                {/* Main Game */}
                <a
                    href="/game"
                    className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-blue-300 hover:shadow-2xl hover:-translate-y-1 transition transform flex flex-col"
                >
                    <Gamepad2 className="w-14 h-14 text-blue-700 mb-4" />
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">
                        Main Game
                    </h2>
                    <p className="text-blue-700 opacity-80">
                        Uji game flip-card dengan soal yang sudah dibuat.
                    </p>
                </a>

                {/* Kelola Soal */}
                <a
                    href="/admin/questions"
                    className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 border border-purple-300 hover:shadow-2xl hover:-translate-y-1 transition transform flex flex-col"
                >
                    <BookOpenCheck className="w-14 h-14 text-purple-700 mb-4" />
                    <h2 className="text-xl sm:text-2xl font-bold text-purple-800 mb-2">
                        Kelola Soal
                    </h2>
                    <p className="text-purple-700 opacity-80">
                        Tambah, edit, hapus, dan kelola semua soal flip-card.
                    </p>
                </a>

            </div>

            {/* BACK TO HOME */}
            <button
                onClick={() => window.location.href = "/"}
                className="mt-14 mb-30 sm:mb-10 bg-gradient-to-r from-red-600 to-red-700 text-white px-5 sm:px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition flex items-center gap-2 text-sm sm:text-base"
            >
                <ArrowLeft className="w-5 h-5" />
                Logout
            </button>
        </div>
    );
}