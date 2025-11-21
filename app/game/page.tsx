"use client";

import { useState, useEffect } from "react";
import { Gamepad2 } from "lucide-react";
import Navbar from "@/component/Navbar";
import { useAuth } from "@/lib/hooks/useAuth";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function GamePage() {
    const { token } = useAuth();
    const [questions, setQuestions] = useState<any[]>([]);
    const [opened, setOpened] = useState<number[]>([]);
    const [showAnswer, setShowAnswer] = useState<number[]>([]);
    const [selectedCard, setSelectedCard] = useState<any | null>(null);
    const [timer, setTimer] = useState(40);

useEffect(() => {
    if (!token) return;

    fetch(`${API}/questions`, {
        headers: { Authorization: `Bearer ${token}` },
    })
        .then((res) => res.json())
        .then((data) => {
            const list = Array.isArray(data)
                ? data
                : Array.isArray(data?.data)
                ? data.data
                : [];

            setQuestions(
                list.map((q: any) => {
                    console.log("duration dari BE:", q.duration);
                    return {
                        ...q,
                        // duration: Number(q.duration ?? 50) //sepertinya disini dehh <---
                        duration: Number(q.duration ?? 45),
                    };
                })
            );
        });
}, [token]);

    useEffect(() => {
        if (!selectedCard) return;
        
        setTimer(selectedCard.duration);

        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [selectedCard]);

    function flipCard(id: number) {
        if (!opened.includes(id)) {
            setOpened([...opened, id]);
        }
    }

    function revealAnswer(id: number) {
        if (!showAnswer.includes(id)) {
            setShowAnswer([...showAnswer, id]);
        }
    }

    return (
        <div className="min-h-screen px-6 py-10 pb-32">
            <div className="w-full">
                <Navbar />
            </div>
            <div className="max-w-6xl mx-auto flex justify-end mb-6 mt-12">
                <a
                    href="/admin"
                    className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 shadow-lg hover:scale-105 transition transform"
                >
                    ← Kembali
                </a>
            </div>

            {/* GRID */}
            <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

                {(Array.isArray(questions) ? questions : []).map((q: any, index: number) => {
                    const isOpen = opened.includes(q.id);
                    const isAnswerShown = showAnswer.includes(q.id);

                    return (
                        <div
                            key={q.id}
                            className="w-full h-100 perspective cursor-pointer transition-transform duration-300 hover:scale-105"
                            onClick={() => {
                                flipCard(q.id);
                                setSelectedCard({
                                    ...q,
                                    duration: Number(q.duration),
                                });
                            }}
                        >
                            <div
                                className={`relative w-full h-full transform-style-preserve-3d 
                                duration-[900ms] 
                                ${isOpen ? "rotate-y-180" : ""}
                                ease-[cubic-bezier(.68,-0.55,.27,1.55)]
                                `}
                            >
                                {/* FRONT */}
                                <div
                                    className="
                                        absolute inset-0 
                                        bg-gradient-to-br from-yellow-300 to-amber-400
                                        backdrop-blur-xl 
                                        border-4 border-white/70 
                                        rounded-2xl 
                                        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                                        flex items-center justify-center 
                                        text-8xl font-extrabold text-purple-900 drop-shadow-lg
                                        backface-hidden
                                        transition-all
                                    "
                                >
                                    {index + 1}
                                </div>

                                {/* BACK */}
                                <div
                                    className="
                                        absolute inset-0 rotate-y-180
                                        bg-gradient-to-br from-purple-500/90 to-purple-700/90
                                        rounded-2xl 
                                        p-6 
                                        text-white 
                                        shadow-[0_12px_40px_rgba(80,0,190,0.45)]
                                        border border-white/20
                                        backface-hidden 
                                        flex flex-col
                                        transition-all
                                    "
                                >
                                    <p className="text-2xl font-bold mb-3">
                                        Soal:
                                    </p>

                                    <div className="flex-1 overflow-auto pr-2 space-y-4 flex flex-col min-h-0">

                                        <p
                                            className={`break-words whitespace-pre-line transition-all mt-2
                                                ${isOpen ? "text-2xl font-bold" : "text-lg"}
                                            `}
                                        >
                                            {q.question}
                                        </p>

                                        {q.imageUrl && (
                                            <img
                                                src={`${API}/uploads/${q.imageUrl}`}
                                                className="w-full max-h-32 object-contain rounded-lg shadow mx-auto"
                                                alt="gambar soal"
                                            />
                                        )}


                                        {isAnswerShown && (
                                            <p className="mt-5 text-yellow-300 text-3xl font-extrabold break-words drop-shadow-md tracking-wide">
                                                Jawaban: {q.answer}
                                            </p>
                                        )}
                                    </div>

                                    {!isAnswerShown && isOpen && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                revealAnswer(q.id);
                                            }}
                                            className="mt-4 px-4 py-2 bg-white/30 hover:bg-white/40 
                                                text-white font-semibold rounded-md backdrop-blur-md transition"
                                        >
                                            Tampilkan Jawaban
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedCard && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-6"
                        onClick={() => setSelectedCard(null)}>
                    
                    <div
                        className="bg-white rounded-2xl w-full max-w-3xl p-6 shadow-xl transform scale-100 transition"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-4xl font-extrabold mb-4 text-purple-700 flex items-center justify-between w-full">
                            <span>Soal:</span>
                            <span className="text-red-600 text-3xl font-bold">{timer}s</span>
                        </h2>

                        <p className="text-2xl whitespace-pre-line mb-4 font-semibold">
                            {selectedCard.question}
                        </p>

                        {selectedCard.imageUrl && (
                            <img
                                src={`${API}/uploads/${selectedCard.imageUrl}`}
                                className="w-full max-h-80 object-contain rounded-lg shadow mb-4"
                                alt="gambar soal"
                            />
                        )}

                        {!showAnswer.includes(selectedCard.id) ? (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowAnswer([...showAnswer, selectedCard.id]);
                                }}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg mb-4"
                            >
                                Tampilkan Jawaban
                            </button>
                        ) : (
                            <p className="text-4xl font-black text-yellow-600 mb-6 drop-shadow-lg tracking-wide">
                                Jawaban: {selectedCard.answer}
                            </p>
                        )}

                        <button
                            onClick={() => setSelectedCard(null)}
                            className="w-full bg-gray-700 hover:bg-black text-white font-semibold py-2 rounded-lg"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}