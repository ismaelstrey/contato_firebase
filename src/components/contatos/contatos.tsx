import React, { FormEvent, FunctionComponent, useContext, useState } from "react";
import Card from "./card";
import { ContatoInterface } from "@/types/contatoTypes";
import { ContatoContext } from "@/context/ContatoContext";

const Contatos: React.FC = () => {
  const { contatos, deletar,editar, contato,atualizar } = useContext(ContatoContext);
  const [busca,setBusca] = useState<ContatoInterface[]>()

  function RendeCard(array: ContatoInterface[]) {
    return array?.map((contato: ContatoInterface) => (
      <Card
        key={contato.chave}
        chave={contato.chave}
        nome={contato.nome}
        email={contato.email}
        telefone={contato.telefone}
        observacao={contato.observacao} 
        deletar={deletar}
        editar={editar}
        atualizar={atualizar}
        />
    ));
  }

    const buscaContato = (ev: FormEvent) =>{
      const dados = new Array
      
      contatos?.map((contato: { nome: string; }) => {
        // @ts-ignore
        const regra = new RegExp(ev.target.value,'gi')
        if(regra.test(contato.nome)){
          dados.push(contato)
        }
      })
      setBusca(dados)
    }

  return (
    <div className="flex flex-col bg-yellow-100 w-full h-full rounded shadow shadow-slate-500 m-4 p-4">
      <input
      onChange={(e)=>buscaContato(e)}
        type="text"
        name="buscar"
        placeholder="Buscar"
        className="border border-slate-700 rounded-sm h-7 p-2 m-4 shadow shadow-slate-500"
      />
      <main className="flex flex-col h-full w-full min-h-[300px] gap-2">
        {
        !busca?
          contatos && RendeCard(contatos)
        :
          RendeCard(busca)
        }
      </main>
    </div>
  );
};

export default Contatos;
