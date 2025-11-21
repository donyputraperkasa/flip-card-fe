"use client";

import { Heart, ExternalLink, School } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full mt-20 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-inner">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">

            {/* Left Side */}
            <div className="flex items-center gap-2 text-lg font-semibold">
            <School className="w-6 h-6" />
            <span>Flip Card Learning Game</span>
            </div>

            {/* Center */}
            <div className="text-sm opacity-80 mt-3 sm:mt-0">
                created by : 
                <span className="font-semibold"> mas-dony</span>
            </div>

            {/* Right Side */}
            <a
            href="https://belajarmatematika-two.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 text-sm hover:opacity-90 transition"
            >
            <ExternalLink className="w-5 h-5" />
            belajarmatematika
            </a>

        </div>
        </footer>
    );
}