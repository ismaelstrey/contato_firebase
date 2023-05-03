import React, { useState } from "react";
import { database } from "@/services/firebase";
import {ContatoContextInterface, ContatoInterface } from "@/types/contatoTypes";

export const ContatoContext = React.createContext<ContatoContextInterface | any>([]);

function ContatoProvider(props: { children: React.ReactNode }) {
  const [contato, setContato] = useState<ContatoContextInterface[]>([]);

  const gravar = async(contatoData: [ContatoInterface]) => {
    const ref = await database.ref("contatos");
    ref.push(contatoData);
    setContato([]);
  };

  return (
    <ContatoContext.Provider value={{ contato, gravar }}>
      {props.children}
    </ContatoContext.Provider>
  );
}

export default ContatoProvider
