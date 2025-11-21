"use client";

import { useEffect, useState } from "react";
import AdminHeader from "@/component/AdminHeader";
import AddQuestion from "@/component/AddQuestion";
import QuestionCard from "@/component/QuestionCard";
import EditQuestionModal from "@/component/EditQuestionModal";

const API = process.env.NEXT_PUBLIC_API_URL;

<style jsx global>{`
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .animate-fadeIn {
        animation: fadeIn 0.2s ease-out;
    }

    @keyframes scaleIn {
        from { transform: scale(0.85); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    .animate-scaleIn {
        animation: scaleIn 0.25s ease-out;
    }
`}</style>

export default function AdminQuestionsPage() {
    const [questions, setQuestions] = useState<any[]>([]);
    const [editData, setEditData] = useState<any>(null);

    async function fetchQuestions() {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${API}/questions`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            console.log("Fetched questions:", data);

            if (Array.isArray(data)) {
                setQuestions(
                    data.map((q) => ({
                        ...q,
                        duration: Number(q.duration ?? 45)
                    }))
                );
            } else {
                setQuestions([]);
            }
        } catch (e) {
            setQuestions([]);
        }
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    async function deleteQuestion(id: number) {
        const confirmDelete = confirm("Bener nihh di hapuss ??");
        if (!confirmDelete) return;

        const res = await fetch(`${API}/questions/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        if (!res.ok) {
            alert("Gagal menghapus soal!");
            return;
        }

        // Hapus dari state TANPA perlu fetch ulang
        setQuestions(prev => prev.filter(q => q.id !== id));
    }

    /* ---------------------- EDIT FUNCTION ---------------------- */

    function openEditModal(item: any) {
        setEditData(item);
    }

    function closeEditModal() {
        setEditData(null);
    }

    /* ------------------------------------------------------------- */

    return (
        <div className="flex flex-col items-center justify-start mb-10 bg-gradient-to-br from-purple-100 to-blue-100 py-10 pb-32">
            <div className="w-full max-w-4xl">
                <AdminHeader />

                <AddQuestion onSubmit={(data) => {
                    const fd = new FormData();
                    fd.append("question", data.soal);
                    fd.append("answer", data.jawaban);
                    fd.append("duration", String(data.duration));
                    if (data.gambar) fd.append("file", data.gambar as any);
                    fetch(`${API}/questions`, {
                        method: "POST",
                        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                        body: fd,
                    })
                        .then(res => res.json())
                        .then(created => {
                            console.log("Created question:", created);
                            fetchQuestions();
                        });
                }} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Array.isArray(questions) &&
                        questions.map((q: any, idx: number) => {
                            console.log("Question duration:", q.duration, "for ID:", q.id);
                            return (
                                <div key={`${q?.id ?? 'q'}-${idx}`}>
                                    <QuestionCard
                                        soal={q.question}
                                        jawaban={q.answer}
                                        gambar={q.imageUrl ? `${API}/uploads/${q.imageUrl}` : undefined}
                                        onEdit={() =>
                                            openEditModal({
                                                id: q.id,
                                                soal: q.question,
                                                jawaban: q.answer,
                                                gambar: q.imageUrl ? `${API}/uploads/${q.imageUrl}` : "",
                                                duration: q.duration
                                            })
                                        }
                                        onDelete={() => deleteQuestion(q.id)}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <EditQuestionModal
                open={!!editData}
                data={editData}
                onClose={closeEditModal}
                onSave={async (updated) => {
                    const payload: any = {
                        question: updated.soal,
                        answer: updated.jawaban,
                        duration: updated.duration,
                    };

                    // Jika gambar baru (File) dikirim
                    if (updated.gambar instanceof File) {
                        const fd = new FormData();
                        fd.append("question", updated.soal);
                        fd.append("answer", updated.jawaban);
                        fd.append("file", updated.gambar);
                        fd.append("duration", String(updated.duration));

                        await fetch(`${API}/questions/${updated.id}`, {
                            method: "PATCH",
                            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                            body: fd,
                        });
                    } 
                    // Jika tidak ada perubahan gambar → kirim JSON biasa
                    else {
                        payload.imageUrl = updated.gambar?.split("/").pop() || null;

                        console.log("Updated question payload:", payload);

                        await fetch(`${API}/questions/${updated.id}`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                            },
                            body: JSON.stringify(payload),
                        });
                    }

                    fetchQuestions();
                    closeEditModal();
                }}
            />
        </div>
    );
}