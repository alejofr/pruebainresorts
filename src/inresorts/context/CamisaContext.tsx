import { createContext } from 'react';
import { Camisa } from '../interfaces';

type CamisaContextProps = {
    isLoading: Boolean;
    camisas: Camisa[] | null;
    saveCamisa: ({ nombre, talla, color, precio, cantidad, idPokemon, pokemon }: Camisa) => void;
    destroyCamisa: (id: number) => void;
    getCamisaId: (id: string | number) => Camisa | undefined;
    updateCamisa: (form: Camisa) => void;
}

export const CamisasContext = createContext({} as CamisaContextProps);