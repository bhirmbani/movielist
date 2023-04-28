import { Inter } from "next/font/google";
import { Navbar } from "@/components";
import { MovieCardItemModule, MovieSearchModule } from "@/modules";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <Navbar />
      <div className="flex flex-col w-full items-center flex-1 my-12">
        <MovieSearchModule />
      </div>

      <div className="absolute top-[55%] max-w-[80%]">
        <MovieCardItemModule />
      </div>
    </main>
  );
}
