"use client";

import { Calculator } from "lucide-react";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/30 shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
                <Calculator className="w-8 h-8 text-purple-700 mr-3" />
                <h1 className="text-2xl font-extrabold text-purple-700">
                    Belajar Matematika
                </h1>
            </div>
        </div>
    );
}