import { Gamepad2, Settings, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-blue-300 flex flex-col items-center justify-center p-10 text-center">

      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-600 drop-shadow-2xl mb-4 tracking-wide">
          BELAJAR BERSAMA SMP BOPKRI WATES
        </h1>

        <Sparkles className="w-12 h-12 text-white drop-shadow-xl mb-3" />
        <h1 className="text-6xl font-extrabold text-white drop-shadow-2xl mb-4 tracking-wide">
          Flip Card Game
        </h1>

      </div>

      <div className="flex gap-6 mt-6">
        <a
          href="/game"
          className="flex items-center gap-2 bg-purple-600 text-white px-7 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition text-xl"
        >
          <Gamepad2 className="w-6 h-6" />
          Main Game
        </a>

        <a
          href="/admin/questions"
          className="flex items-center gap-2 bg-white text-purple-700 px-7 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition text-xl"
        >
          <Settings className="w-6 h-6" />
          Kelola Soal
        </a>
      </div>

      <p className="text-gray-800 mt-12 opacity-60">
        Dibuat oleh <span className="font-semibold">Dony Putra Perkasa</span> untuk pengalaman belajar yang lebih kreatif 🎓
      </p>
    </div>
  );
}