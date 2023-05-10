import { ContatoContextInterface } from "@/types/contatoTypes";
import React, { FunctionComponent } from "react";

const Card: FunctionComponent<ContatoContextInterface> = (props) => {
  const { chave, deletar, editar,atualizar, nome, email, telefone, observacao } = props;
  const contato = {chave, nome, email, telefone, observacao }

  return (
    <div className="flex bg-yellow-200 border border-yellow-950 p-2 shadow-md shadow-gray-700 hover:shadow-green-500 cursor-pointer justify-between">
      <div>
        {" "}
        <p>{nome}</p>
        <p>{telefone}</p>
        <p>{email}</p>
        <p>{observacao}</p>
        <p>Trabalho</p>
      </div>
      <span className="flex gap-4">
        <button className="text-blue-500" onClick={() => editar(props)}>
          Editar
        </button>
        <button className="text-green-500" onClick={() => atualizar(contato)}>
          Atualizar
        </button>
        <button className="text-red-500" onClick={() => deletar(chave)}>
          Excluir
        </button>
      </span>
    </div>
  );
};

export default Card;
