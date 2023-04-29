import { Inter } from "next/font/google";
import { Navbar } from "@/components";
import { MovieCardItemModule, MovieSearchModule } from "@/modules";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <Navbar />
      <div className="mt-12">
        <Image alt="home cinema" width={200} height={200} src="../assets/home_cinema.svg" />
      </div>
      <div className="flex flex-col w-full items-center flex-1 my-12">
        <MovieSearchModule />
      </div>

      <div className="bottom-[0%] max-w-[80%]">
        <MovieCardItemModule />
      </div>
    </main>
  );
}
