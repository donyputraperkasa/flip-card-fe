"use client";

import { Gamepad2, Settings, Sparkles, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import RegisterPage from "@/component/RegisterPage";
import LoginPage from "@/component/LoginPage";
import Modal from "@/component/Modal";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-blue-300 flex flex-col items-center justify-center px-4 py-10 text-center">

      <div className="flex flex-col items-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 drop-shadow-2xl mb-4 tracking-wide">
          MEDIA BELAJAR INTERAKTIF
        </h1>

        <Sparkles className="w-12 h-12 text-white drop-shadow-xl mb-3" />
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 tracking-wide">
          Flip Card Game
        </h1>

      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
        <button
          onClick={() => { setShowLogin(true); setShowRegister(false); }}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition text-lg sm:text-xl"
        >
          <LogIn className="w-6 h-6" />
          Login
        </button>

        <button
          onClick={() => { setShowRegister(true); setShowLogin(false); }}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 transition text-lg sm:text-xl"
        >
          <UserPlus className="w-6 h-6" />
          Register
        </button>
      </div>

      <p className="text-gray-800 mt-12 opacity-60 text-sm sm:text-base">
        Dibuat oleh <span className="font-semibold">Dony Putra Perkasa</span> untuk pengalaman belajar yang lebih kreatif 🎓
      </p>

      <Modal open={showLogin} onClose={() => setShowLogin(false)}>
        <LoginPage
          onClose={() => setShowLogin(false)}
          onSuccess={() => { setShowLogin(false); window.location.href = "/admin"; }}
          onSwitchToRegister={() => { setShowLogin(false); setShowRegister(true); }}
        />
      </Modal>

      <Modal open={showRegister} onClose={() => setShowRegister(false)}>
        <RegisterPage
          onClose={() => setShowRegister(false)}
          onSuccess={() => { setShowRegister(false); window.location.href = "/admin"; }}
          onSwitchToLogin={() => { setShowRegister(false); setShowLogin(true); }}
        />
      </Modal>
    </div>
  );
}