// Type untuk data question
export interface Question {
    id: number;
    question: string;
    answer: string;
    imageUrl?: string | null;
    createdAt: string;
}

// Type untuk user setelah login
export interface User {
    id: number;
    email: string;
}

// Response dari login
export interface LoginResponse {
    access_token: string;
}