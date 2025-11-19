"use client";

import { Pencil, Trash2 } from "lucide-react";

interface QuestionCardProps {
    soal: string;
    jawaban: string;
    gambar?: string;
    onEdit: () => void;
    onDelete: () => void;
}

export default function QuestionCard({
    soal,
    jawaban,
    gambar,
    onEdit,
    onDelete
}: QuestionCardProps) {
    return (
        <div
            className="
                bg-white 
                shadow-lg 
                rounded-xl 
                p-5 
                border border-purple-200 
                hover:shadow-2xl 
                hover:scale-[1.02] 
                transition 
                flex flex-col gap-3
            "
        >
            <h3 className="text-lg font-bold text-purple-700">{soal}</h3>

            {gambar && (
                <img 
                    src={gambar} 
                    alt="Gambar soal" 
                    className="w-full h-40 object-cover rounded-lg border border-purple-100"
                />
            )}

            <details className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <summary className="cursor-pointer text-purple-700 font-semibold">
                    Tampilkan Jawaban
                </summary>
                <p className="mt-2 text-gray-700">{jawaban}</p>
            </details>

            <div className="flex justify-end gap-2 mt-3">
                <button
                    onClick={onEdit}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 shadow flex items-center gap-2"
                >
                    <Pencil size={18} />
                    Edit
                </button>

                <button
                    onClick={onDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow flex items-center gap-2"
                >
                    <Trash2 size={18} />
                    Hapus
                </button>
            </div>
        </div>
    );
}