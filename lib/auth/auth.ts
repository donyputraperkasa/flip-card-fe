// lib/auth/auth.ts

export function saveToken(token: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
    }
}

export function getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
}

export async function getUserFromToken(token: string): Promise<any> {
    if (!token) return null;
    // Placeholder for decoding token or fetching user info from API
    // For example, decode JWT or call API endpoint
    try {
        const response = await fetch('/api/userinfo', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            return null;
        }
        const userInfo = await response.json();
        return userInfo;
    } catch (error) {
        return null;
    }
}

export function logout() {
    if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        window.location.href = "/";
    }
}

export function saveUser(email: string) {
    if (typeof window !== "undefined") {
        localStorage.setItem("user_email", email);
    }
}