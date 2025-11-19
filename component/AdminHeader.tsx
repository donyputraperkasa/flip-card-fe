"use client";
import Link from "next/link";
import { NotebookPen } from "lucide-react";

export default function AdminHeader() {
    return (
        <div className="flex justify-between items-center mb-10">
            <h1 className="
                text-4xl font-extrabold 
                text-purple-700 
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]
                flex items-center gap-3
            ">
                <NotebookPen className="w-10 h-10" />
                Kelola Soal
            </h1>

            <Link 
                href="/admin"
                className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow"
            >
                Kembali
            </Link>
        </div>
    );
}
