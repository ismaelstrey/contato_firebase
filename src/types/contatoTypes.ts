export interface ContatoInterface {
  nome: string;
  email: string;
  telefone: number | undefined;
  observacao: string;
}
export interface ContatoContextInterface extends ContatoInterface {
  contato: ContatoInterface[];
  gravar?: (contatoData: [ContatoInterface]) => void;
}