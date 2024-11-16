"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 bg-gray-200 text-center p-4">
      <h1 className="text-5xl font-extrabold text-blue-700">My Country App</h1>
      <p className="text-xl text-gray-600 max-w-md mx-auto mt-4">
        Discover countries around the world. Learn about flags, borders, and more!
      </p>
      <Link href="/countries">
        <button className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </Link>

      <footer className="absolute bottom-10 text-sm text-gray-500">
        <p>Made by Gabriel Cabral Melo</p>
      </footer>
    </div>
  );
}
