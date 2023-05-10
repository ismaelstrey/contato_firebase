export type TiketInterface ={
  chave?: string;
  nome: string;
  email: string;
  telefone: number;
  observacao: string;
}
export interface ContatoContextInterface extends TiketInterface {
  contato?: TiketInterface;
  gravar?: (contatoData: [TiketInterface]) => void;
}
