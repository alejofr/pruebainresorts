import { FC, useReducer, useEffect } from 'react';
import { CamisasContext, camisasReducer } from './';
import { Camisa } from '../interfaces';


export interface CamisasState {
    isLoading: Boolean;
    camisas: Camisa[] | null;
}

const AUTH_INITIAL_STATE: CamisasState = {
    isLoading: false,
    camisas: null
}

type CamisasProviderProp = {
    children: JSX.Element | JSX.Element[]
}

export const CamisasProvider:FC<CamisasProviderProp> = ({children}) => {
    const [state, dispatch] = useReducer(camisasReducer, AUTH_INITIAL_STATE);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const camisas = window.localStorage.getItem('camisas');

        if( camisas != null ){
            const data: Camisa[] = JSON.parse(camisas);
            dispatch({type: 'add', payload: data})
        }
    }
    
    const saveCamisa = ({ nombre, talla, color, precio, cantidad, idPokemon, pokemon }: Camisa)  => {
        dispatch({type: 'loading'});
        let id: number = 0;
        const camisas = window.localStorage.getItem('camisas');
        let arreglo : Camisa[] = [];

        if( camisas != null ){
            const data: Camisa[] = JSON.parse(camisas);
            id = data.length;

            arreglo = [
                ...data
            ];
        }  
        
        arreglo.push({
            id: id + 1,
            nombre, 
            talla, 
            color, 
            precio, 
            cantidad, 
            idPokemon, 
            pokemon
        });

        localStorage.setItem('camisas', JSON.stringify(arreglo));
        dispatch({ type: 'add', payload: arreglo });
    }

    const destroyCamisa = (id: number) => {
        dispatch({type: 'loading'});
        const camisas = window.localStorage.getItem('camisas');
        let arreglo: Camisa[] = [];

        if( camisas != null ){
            const data: Camisa[] = JSON.parse(camisas);
            
            for (let i = 0; i < data.length; i++) {
                if( data[i].id != id ){
                    arreglo.push(data[i]);
                }
            }

        }

        for (let i = 0; i < arreglo.length; i++) {
            arreglo[i].id = i + 1;
        }

        localStorage.setItem('camisas', JSON.stringify(arreglo));
        dispatch({ type: 'add', payload: arreglo });
    }

    const getCamisaId = ( id: string | number ) => {
        const camisas = window.localStorage.getItem('camisas');
        let camisa: Camisa = {
            id: undefined,
            nombre: '',
            talla: '',
            color: '',
            precio: '',
            cantidad: '',
            idPokemon: '',
            pokemon: '',
        };
      

        if( camisas != null ){
            const data: Camisa[] = JSON.parse(camisas);
            
            for (let i = 0; i < data.length; i++) {
                if( data[i].id === id ){
                    camisa = data[i];
                    return camisa;
                }
            }

        }

        

        return;
    }

    const updateCamisa = (form: Camisa) => {
        dispatch({type: 'loading'});
        const camisas = window.localStorage.getItem('camisas');
        let arreglo: Camisa[] = [];
        const { id, nombre, talla, color, precio, cantidad, idPokemon, pokemon } = form;

        if( camisas != null ){
            const data: Camisa[] = JSON.parse(camisas);
            
            for (let i = 0; i < data.length; i++) {
                if( data[i].id === id ){
                    data[i] = {
                        id: data[i].id,
                        nombre, 
                        talla, 
                        color, 
                        precio, 
                        cantidad, 
                        idPokemon, 
                        pokemon
                    };
                }

                arreglo.push(data[i]);
            }

        }

        localStorage.setItem('camisas', JSON.stringify(arreglo));
        dispatch({ type: 'add', payload: arreglo });
    }

    return (
        <CamisasContext.Provider
            value={{
                ...state,
                saveCamisa,
                destroyCamisa,
                getCamisaId,
                updateCamisa
            }}
        >
            {children}
        </CamisasContext.Provider>
    )
}