import { useState } from 'react';
import { pokeApi } from '../helpers';
import { PokemonList, SmallPokemon, PokemonFull } from '../interfaces';


export const usePokemon = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<{ ok: boolean, message?: string }>();

    const [ data, setData ] = useState<SmallPokemon[]>([]);
    const [ pokemonId, setPokemonId ] = useState<PokemonFull>();

    const resetLoading = () => setTimeout(() => {
        setLoading(false);
    }, 2000);

    const getDatos = async() => {
        setLoading(true);

        try {
            const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=12');
            const pokemons: SmallPokemon[] = data.results.map(( poke, i ) => ({
                ...poke,
                id: i + 1,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
            }));
            
            setData(pokemons);
            setResponse({ok: true});
            resetLoading();
        } catch (error) {
            setResponse({
                ok: false,
                message: 'Ha ocurrido un error en mostrar la informacion'
            });
            resetLoading();
        }
    }

    const getPokemon = async(id?: number | string) => {
        setLoading(true);

        try {
            const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${id}`);

            setPokemonId(data);
            setResponse({ok: true});
            resetLoading();
        } catch (error) {
            setResponse({
                ok: false,
                message: 'Ha ocurrido un error en mostrar la informacion'
            });
            resetLoading();
        }
    }

    return {
        loading,
        data,
        pokemonId,
        getDatos,
        getPokemon,
        response
    }
}
