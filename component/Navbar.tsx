"use client";

import { Calculator, User } from "lucide-react";
import { useAuth } from "@/lib/hooks/useAuth";


export default function Navbar() {
    const { userEmail } = useAuth();

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-white/30 shadow">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Calculator className="w-8 h-8 text-purple-700 mr-3" />
                    <h1 className="text-2xl font-extrabold text-purple-700">
                        Belajar Matematika 
                    </h1>
                </div>
                <div className="flex items-center gap-2 text-purple-700 font-semibold">
                    <User className="w-5 h-5" />
                    <span>{userEmail}</span>
                </div>
            </div>
        </div>
    );
}