import Produto from "./Produto";

export default interface Categoria{
    id: number;
    nome: string;
    descricao: string;    
    Produto?: Produto | null;
    
}