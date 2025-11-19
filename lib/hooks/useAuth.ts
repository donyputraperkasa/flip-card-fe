// lib/hooks/useAuth.ts
"use client";

import { useEffect, useState } from "react";
import { getToken } from "../auth/auth";
import { useRouter } from "next/navigation";

export function useAuth() {
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const t = getToken();
        if (!t) {
        router.push("/login");
        } else {
        setToken(t);
        }
    }, []);

  return token; // null jika belum siap
}