"use client";

import { Gamepad2, Settings, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-blue-300 flex flex-col items-center justify-center p-10 text-center">

      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-600 drop-shadow-2xl mb-4 tracking-wide">
          MEDIA BELAJAR INTERAKTIF
        </h1>

        <Sparkles className="w-12 h-12 text-white drop-shadow-xl mb-3" />
        <h1 className="text-6xl font-extrabold text-white drop-shadow-2xl mb-4 tracking-wide">
          Flip Card Game
        </h1>

      </div>

      <div className="flex gap-6 mt-6">
        <button
          onClick={() => {
            if (!isLoggedIn) setShowLogin(true);
            else window.location.href = "/game";
          }}
          className="flex items-center gap-2 bg-purple-600 text-white px-7 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition text-xl"
        >
          <Gamepad2 className="w-6 h-6" />
          Main Game
        </button>

        <button
          onClick={() => {
            if (!isLoggedIn) setShowLogin(true);
            else window.location.href = "/admin/questions";
          }}
          className="flex items-center gap-2 bg-white text-purple-700 px-7 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition text-xl"
        >
          <Settings className="w-6 h-6" />
          Kelola Soal
        </button>
        <button
          onClick={() => setShowLogin(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition text-xl"
        >
          Login
        </button>
      </div>

      <p className="text-gray-800 mt-12 opacity-60">
        Dibuat oleh <span className="font-semibold">Dony Putra Perkasa</span> untuk pengalaman belajar yang lebih kreatif 🎓
      </p>

      {showLogin && (
        <div onClick={() => setShowLogin(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Login</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: panggil API login nanti
                setIsLoggedIn(true);
                setShowLogin(false);
              }}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => setShowLogin(false)}
                className="w-full bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg"
              >
                Batal
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}