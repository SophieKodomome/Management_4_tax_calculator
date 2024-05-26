"use client";

import Image from "next/image";
import TaxForm from "./TaxForm";

export default function Home() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">IRSA Simulator</h1>
      </header>
      <main className="p-4">
        <TaxForm />
      </main>
    </div>
  );
}
