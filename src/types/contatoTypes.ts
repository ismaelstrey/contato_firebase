export type ContatoInterface ={
  chave: string;
  nome: string;
  email: string;
  telefone: number;
  observacao: string;
}
export interface ContatoContextInterface extends ContatoInterface {
  contato?: ContatoInterface;
  gravar?: (contatoData: [ContatoInterface]) => void;
  deletar: (chave:string) => void;
  editar: (contato:ContatoInterface) => void;
  atualizar: (contato:ContatoInterface) => void;
}
