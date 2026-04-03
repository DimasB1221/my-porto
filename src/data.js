import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools18 from "/assets/tools/vite.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1500",
  },
];

import Proyek1 from "/assets/proyek/Project-1.webp";
import Proyek2 from "/assets/proyek/Project-2.webp";
import Proyek3 from "/assets/proyek/Project-3.webp";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Chill Movies Streaming Platform",
    subtitle: "A modern movie streaming platform with a dedicated admin dashboard.",
    fullDescription:
      "A comprehensive movie streaming web application engineered for a seamless viewing experience. Features a dedicated admin dashboard for effortless content management. The platform leverages TanStack Query for highly efficient server-state data fetching and Redux for robust global state management. Seamlessly integrated with Supabase acting as a Backend-as-a-Service (BaaS) for authentication and database management to ensure high performance and scalability.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/DimasB1221/Chill-Movies-2.git",
    demo: "https://chill-movies-2.vercel.app",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "VideoBelajar E-Learning Platform",
    subtitle:
      "An interactive educational platform designed for seamless video course delivery.",
    fullDescription:
      "An interactive online learning platform tailored to deliver high-quality educational video content effectively. Utilizing TanStack Query for optimized asynchronous data fetching and caching, the application guarantees a smooth, lag-free user browsing experience. The backend architecture is powered entirely by Supabase as a BaaS, providing secure authentication and robust data storage for tracking student progress across all devices.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/DimasB1221/VideoBelajar-react-inter-2.git",
    demo: "https://videobelajar-blond.vercel.app",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Productivity Task Manager",
    subtitle:
      "A sleek and intuitive task management application built to boost daily productivity.",
    fullDescription:
      "A sleek and intuitive task management application designed to help users organize their routines and boost personal productivity. The app allows users to seamlessly add, edit, track, and complete their daily tasks within a clean, user-friendly interface. This project highlights strong frontend state management capabilities and modern UI/UX principles to create a highly functional everyday utility.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/DimasB1221/To-do-list.git",
    dad: "300",
  },
];
