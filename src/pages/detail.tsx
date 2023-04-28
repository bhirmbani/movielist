import { Navbar } from "@/components";
import { MovieDetailModule } from "@/modules";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Detail() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <Navbar />
      <MovieDetailModule />
    </main>
  );
}
