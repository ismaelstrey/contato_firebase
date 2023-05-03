"use client";
import React, { FormEvent, ReactElement, useContext, useState } from "react";
import { ContatoContext } from "@/context/ContatoContext";
import { ContatoContextInterface } from "@/types/contatoTypes";

const Formulario: React.FC = (): ReactElement => {
  const { gravar } = useContext(
    ContatoContext
  ) as unknown as ContatoContextInterface;
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState(undefined);
  const [observacoes, setObservacoes] = useState("");

  const gravarData = (event: FormEvent) => {
    event.preventDefault();
    const dados = {
      nome,
      email,
      telefone,
      observacoes,
    };
    gravar(dados);
    setNome("");
    setEmail("");
    setTelefone(undefined);
    setObservacoes("");
  };
  return (
    <div className="flex shadow shadow-slate-500 m-4 p-4 bg-green-300">
      <form className="flex flex-col gap-2" onSubmit={gravarData}>
        <input
          type="text"
          value={nome}
          name="nome"
          placeholder="Nome"
          className="border border-slate-700 rounded-sm h-7 p-2"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          value={email}
          name="email"
          placeholder="E-Mail"
          className="border border-slate-700 rounded-sm h-7 p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tell"
          value={telefone}
          name="telefone"
          placeholder="Telefone"
          className="border border-slate-700 rounded-sm h-7 p-2"
          onChange={(e) => setTelefone(e.target.value)}
        />
        <textarea
          name="Observação"
          value={observacoes}
          id="Observacao"
          cols={30}
          rows={7}
          className="border border-slate-700 rounded-sm p-2"
          onChange={(e) => setObservacoes(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 rounded-sm h-7 text-white text-md"
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
