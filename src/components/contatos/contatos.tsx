import React, { useContext } from "react";
import Card from "./card";
import { ContatoInterface } from "@/types/contatoTypes";
import { ContatoContext } from "@/context/ContatoContext";

const Contatos: React.FC = () => {
  const { contatos } = useContext(ContatoContext);

  const RendeCard: React.FC = () =>
    contatos.map((contato:ContatoInterface) => (
      <Card
        key={contato.chave}
        chave={contato.chave}
        nome={contato.nome}
        email={contato.email}
        telefone={contato.telefone}
        observacao={contato.observacao}
      />
    ));

  return (
    <div className="flex flex-col bg-yellow-100 w-full h-full rounded shadow shadow-slate-500 m-4 p-4">
      <input
        type="text"
        name="buscar"
        placeholder="Buscar"
        className="border border-slate-700 rounded-sm h-7 p-2 m-4 shadow shadow-slate-500"
      />
      <main className="flex flex-col h-full w-full min-h-[300px] gap-2">
        {contatos && <RendeCard />}
      </main>
    </div>
  );
};

export default Contatos;
