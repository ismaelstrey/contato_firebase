import { ContatoInterface } from '@/types/contatoTypes';
import React, { FunctionComponent } from 'react';

const Card: FunctionComponent<ContatoInterface> = (props) => {

  return (
    <div className='flex bg-yellow-200 border border-yellow-950 p-2 shadow-md shadow-gray-700 hover:shadow-green-500 cursor-pointer justify-between'>
    <div> <p>{props.nome}</p>
      <p>{props.telefone}</p>
      <p>{props.email}</p>
      <p>{props.observacao}</p>
      <p>Trabalho</p></div>
      <span className='flex gap-4'>
          <a href="" className='text-blue-500'>Editar</a>
          <a href=""className='text-red-500'>Excluir</a>
      </span>
     </div>
  );
}

export default Card;