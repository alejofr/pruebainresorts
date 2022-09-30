export interface Camisa {
    id?: number;
    nombre: string;
    talla: string;
    color: string;
    precio: string | number;
    cantidad: string | number;
    idPokemon: number | string;
    pokemon: string;
}

export interface CamisaForm {
    nombre: string;
    talla: string;
    color: string;
    precio: string | number;
    cantidad: string | number;
    idPokemon: number | string;
}