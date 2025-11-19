import { GraduationCap, BookOpenCheck, Gamepad2, ArrowLeft } from "lucide-react";

export default function AdminHome() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 flex flex-col items-center p-10">

            {/* NAVBAR */}
            <div className="w-full bg-white/40 backdrop-blur-md border-b border-white/30 shadow-lg rounded-xl py-4 mb-10">
                <h1 className="text-3xl font-extrabold text-purple-800 flex items-center justify-center gap-3">
                    <GraduationCap className="w-8 h-8 text-purple-700" />
                    Admin Dashboard
                </h1>
            </div>

            {/* DESCRIPTION */}
            <p className="text-lg text-purple-900 opacity-80 max-w-2xl text-center mb-10">
                Selamat datang di halaman admin.  
                Dari sini Anda dapat mengelola soal untuk game flip-card, menambahkan soal baru,
                mengedit konten, dan mengatur media pembelajaran.
            </p>

            {/* MENU CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

                {/* Kelola Soal */}
                <a
                    href="/admin/questions"
                    className="bg-white shadow-xl rounded-2xl p-8 border border-purple-300 hover:shadow-2xl hover:-translate-y-1 transition transform flex flex-col"
                >
                    <BookOpenCheck className="w-14 h-14 text-purple-700 mb-4" />
                    <h2 className="text-2xl font-bold text-purple-800 mb-2">
                        Kelola Soal
                    </h2>
                    <p className="text-purple-700 opacity-80">
                        Tambah, edit, hapus, dan kelola semua soal flip-card.
                    </p>
                </a>

                {/* Main Game */}
                <a
                    href="/game"
                    className="bg-white shadow-xl rounded-2xl p-8 border border-blue-300 hover:shadow-2xl hover:-translate-y-1 transition transform flex flex-col"
                >
                    <Gamepad2 className="w-14 h-14 text-blue-700 mb-4" />
                    <h2 className="text-2xl font-bold text-blue-800 mb-2">
                        Main Game
                    </h2>
                    <p className="text-blue-700 opacity-80">
                        Uji game flip-card dengan soal yang sudah dibuat.
                    </p>
                </a>

            </div>

            {/* BACK TO HOME */}
            <a
                href="/"
                className="mt-14 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition flex items-center gap-2"
            >
                <ArrowLeft className="w-5 h-5" />
                Kembali ke Halaman Utama
            </a>
        </div>
    );
}