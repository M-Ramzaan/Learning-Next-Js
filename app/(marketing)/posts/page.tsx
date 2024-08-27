// "use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Post() {
  // const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="relative z-10 text-black text-3xl">Post</h1>
      </div>
      <Link href="/">Back to Home</Link>
      {/* only use router when you have to navigate via function`` */}
      {/* <button type="button" onClick={() => router.push("./")}>
        Back to Home
      </button> */}
    </main>
  );
}
