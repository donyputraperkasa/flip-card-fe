"use client";

import { useState, useEffect } from "react";

interface EditQuestionModalProps {
    open: boolean;
    data: {
        id: number;
        soal: string;
        jawaban: string;
        gambar?: File | string | null;
    } | null;
    onClose: () => void;
    onSave: (updated: {
        id: number;
        soal: string;
        jawaban: string;
        gambar?: File | string | null;
    }) => void;
}

export default function EditQuestionModal({
    open,
    data,
    onClose,
    onSave
}: EditQuestionModalProps) {

    const [soal, setSoal] = useState("");
    const [jawaban, setJawaban] = useState("");
    const [gambar, setGambar] = useState<File | string | null>(null);

    useEffect(() => {
        if (data) {
            setSoal(data.soal);
            setJawaban(data.jawaban);
            setGambar(data.gambar || "");
        }
    }, [data]);

    if (!open || !data) return null;

    const handleSave = () => {
        onSave({
            id: data.id,
            soal,
            jawaban,
            gambar: gambar || ""
        });
    };

    return (
        <div 
            className="fixed inset-0 bg-black/50 flex justify-center items-center animate-fadeIn"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-2xl p-8 w-[90%] max-w-md border-2 border-purple-300 shadow-xl animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-6 text-purple-800">✏️ Edit Soal</h2>

                <input
                    type="text"
                    value={soal ?? ""}
                    onChange={(e) => setSoal(e.target.value)}
                    className="border border-purple-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition"
                    placeholder="Edit soal"
                />

                <input
                    type="text"
                    value={jawaban ?? ""}
                    onChange={(e) => setJawaban(e.target.value)}
                    className="border border-purple-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition"
                    placeholder="Edit jawaban"
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setGambar(e.target.files?.[0] || null)}
                    className="border border-purple-300 p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition"
                />

                <div className="flex justify-end gap-3 mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition shadow"
                    >
                        Batal
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow"
                    >
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    );
}
