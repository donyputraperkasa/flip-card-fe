"use client";

import { useState } from "react";

interface AddQuestionProps {
    onSubmit: (data: {
        soal: string;
        jawaban: string;
        gambar?: File;
    }) => void;
}

export default function AddQuestion({ onSubmit }: AddQuestionProps) {
    const [soal, setSoal] = useState("");
    const [jawaban, setJawaban] = useState("");
    const [gambar, setGambar] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ soal, jawaban, gambar: gambar || undefined });
        setSoal("");
        setJawaban("");
        setGambar(null);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg p-6 rounded-xl mb-10 w-full border border-purple-100"
        >
            <h2 className="text-xl font-bold mb-4 text-purple-700">➕ Tambah Soal Baruu</h2>

            <input
                type="text"
                placeholder="Masukkan soal"
                value={soal}
                onChange={(e) => setSoal(e.target.value)}
                className="border border-purple-300 p-3 w-full mb-4 rounded-lg 
                focus:ring-2 focus:ring-purple-400 outline-none transition"
                required
            />

            <input
                type="text"
                placeholder="Masukkan jawaban"
                value={jawaban}
                onChange={(e) => setJawaban(e.target.value)}
                className="border border-purple-300 p-3 w-full mb-4 rounded-lg 
                focus:ring-2 focus:ring-purple-400 outline-none transition"
                required
            />

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setGambar(e.target.files ? e.target.files[0] : null)}
                className="border border-purple-300 p-3 w-full mb-4 rounded-lg 
                focus:ring-2 focus:ring-purple-400 outline-none transition"
            />

            <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg 
                hover:bg-purple-700 shadow-md transition"
            >
                Simpan Soal
            </button>
        </form>
    );
}
