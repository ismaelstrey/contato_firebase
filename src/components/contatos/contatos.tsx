import React from 'react';
import Card from './card';

const Contatos: React.FC = () => {
  return (
    <div className='flex flex-col bg-yellow-100 w-full h-full rounded shadow shadow-slate-500 m-4 p-4'>
        <input type="text" name="buscar" placeholder='Buscar' className='border border-slate-700 rounded-sm h-7 p-2 m-4 shadow shadow-slate-500'/>
        <main className='flex flex-col h-full w-full min-h-[300px] '>
     <Card/>
        </main>
    </div>
  )
}

export default Contatos;