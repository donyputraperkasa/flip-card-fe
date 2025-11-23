"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
    if (!open) return null;

    return (
        <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        >
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md animate-fadeIn relative"
        >
            <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-purple-300"
            >
                <X size={20} />
            </button>
            {children}
        </div>
        </div>
    );
}