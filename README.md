# Flip Card Web Application

Flip Card is a web-based interactive learning platform built using **Next.js**.  
This application is designed to support educators in creating, managing, and presenting question cards that can be flipped to reveal answers. It serves as an engaging medium for students, particularly in mathematics and other subjects that benefit from visual and interactive learning.

---

## 1. Project Overview

The Flip Card application allows administrators or educators to upload questions, attach images, edit content, and manage a dynamic set of learning cards. Students can select questions, interact with flip animations, and view answers only when needed.

This project adopts a clean component-based architecture to support scalability and maintainability.

---

## 2. Technology Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI Components**
- **Axios** for backend integration
- **React Hooks** for handling logic and state

---

## 3. Features

### 3.1 Administrator / Educator
- Add new questions with optional images  
- Edit and update existing questions  
- Delete questions  
- Preview question cards before submission  
- Modal-based input interfaces  
- Organized folder structure for reusable components  

### 3.2 Student / User
- Select questions interactively  
- Flip cards to reveal answers  
- “Show Answer” control for better learning focus  
- Responsive layout for desktop and mobile  

---

## 4. Project Structure

```
flip-card-fe/
 ├── app/
 │   ├── page.tsx
 │   ├── questions/
 │   │   ├── QuestionCard.tsx
 │   │   ├── AddQuestionModal.tsx
 │   │   ├── EditQuestionModal.tsx
 │   │   └── api.ts
 ├── components/
 │   ├── ui/
 │   ├── modal/
 │   └── cards/
 └── public/
```

---

## 5. Getting Started

### 5.1 Installation
Clone the repository:
```bash
git clone https://github.com/your-username/flip-card-fe.git
cd flip-card-fe
```

Install dependencies:
```bash
npm install
```

### 5.2 Development Server
Run the development server:
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 6. Backend Integration

The application communicates with a backend service (NestJS + Prisma).  
Update the API base URL inside:

```
/app/questions/api.ts
```

Example:
```ts
const BASE_URL = "http://localhost:4000";
```

---

## 7. Deployment

This project can be deployed on:
- **Vercel (recommended)**
- Netlify
- Cloudflare Pages

To deploy using Vercel:
```bash
vercel
```

---

## 8. Contribution

Feedback and contributions are welcome.  
Please submit an issue or pull request on the repository if you wish to contribute.

---

## 9. License

This project is licensed under the **MIT License**, allowing both personal and educational use.# flip-card-fe
