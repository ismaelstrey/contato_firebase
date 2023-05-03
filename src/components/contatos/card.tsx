import React from 'react';

// import { Container } from './styles';

const Card: React.FC = () => {
  return (
    <div className='flex bg-yellow-200 border border-yellow-950 p-2 shadow-md shadow-gray-700 hover:shadow-green-500 cursor-pointer justify-between'>
    <div> <p>João joaquim barbosa</p>
      <p>(51)98175-4701</p>
      <p>ismaelstrey@hotmail.com</p>
      <p>Trabalho</p></div>
      <span className='flex gap-4'>
          <a href="" className='text-blue-500'>Editar</a>
          <a href=""className='text-red-500'>Excluir</a>
      </span>
     </div>
  );
}

export default Card;