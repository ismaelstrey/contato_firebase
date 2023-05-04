import React, { useEffect, useState } from "react";
import { database } from "@/services/firebase";
import {ContatoContextInterface, ContatoInterface } from "@/types/contatoTypes";

export const ContatoContext = React.createContext<ContatoContextInterface | any>([]);

function ContatoProvider(props: { children: React.ReactNode }) {
  const [contato, setContato] = useState<ContatoContextInterface[]>([]);
  const [contatos, setContatos] = useState<ContatoInterface[]>();

  const gravar = async(contatoData: ContatoInterface) => {
    const ref = await database.ref("contatos");
    ref.push(contatoData);
    setContato([]);
  };
  useEffect(()=>{
    const refContatos =  database.ref("contatos");
    refContatos.on('value', resultado => {
      const resultadoContatos = Object.entries<ContatoInterface>(resultado.val() ?? {}).map(([chave,valor])=>{
        return {
          'chave': chave,
          'nome': valor.nome,
          'email': valor.email,
          'telefone': valor.telefone,
          'observacao': valor.observacao,
        }
      })
      setContatos(resultadoContatos)
     
    })
  },[])
//  console.log(contatos)
  return (
    <ContatoContext.Provider value={{contatos, gravar }}>
      {props.children}
    </ContatoContext.Provider>
  );
}

export default ContatoProvider
