// lib/hooks/useAuth.ts
"use client";

import { useEffect, useState } from "react";
import { getToken } from "../auth/auth";
import { useRouter } from "next/navigation";

export function useAuth() {
    const [token, setToken] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const t = getToken();
        if (!t) {
        router.push("/login");
        } else {
        setToken(t);
        const email = localStorage.getItem("user_email");
        setUserEmail(email);
        }
    }, []);

  return { token, userEmail }; // null jika belum siap
}