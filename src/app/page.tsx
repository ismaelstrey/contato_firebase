"use client";
import Contatos from "@/components/contatos/contatos";
import Formulario from "@/components/formulario/formulario";
import ContatoProvider from "@/context/ContatoContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ContatoProvider>
        <div className="z-10 w-full max-w-5xl items-center gap-2 font-mono text-sm lg:flex">
          <Formulario />
          <Contatos />
        </div>
      </ContatoProvider>
    </main>
  );
}
