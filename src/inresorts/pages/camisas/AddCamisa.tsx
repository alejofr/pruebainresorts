import { useContext } from 'react';
import { CamisasContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { FormCamisa } from '../../components';
import { CamisaForm, SmallPokemon } from '../../interfaces';


const camisa : CamisaForm = {
    nombre: '',
    talla: '',
    color: '',
    precio: '',
    cantidad: '',
    idPokemon: '',
}

export const AddCamisa = () => {

    const { saveCamisa } = useContext(CamisasContext);
    const navigate = useNavigate();

    const add = (form: CamisaForm, pokemon: SmallPokemon) => {
        const { nombre, talla, color, precio, cantidad, idPokemon } = form;
        const { name } = pokemon;

        saveCamisa({
            nombre,
            talla,
            color,
            precio,
            cantidad,
            idPokemon,
            pokemon: name
        });

        setTimeout(() => {
            navigate(-1);
        }, 2000);
    }

    return (
        <FormCamisa {...camisa} onSubmit={add} />
    )
}
