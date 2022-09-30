import { Link } from 'react-router-dom';
import { ImageListItem, ImageListItemBar} from '@mui/material';
import { SmallPokemon } from '../interfaces';

export const PokemonCard = ({ id, name, img } : SmallPokemon) => {
  return (
    <Link to={`/pokemon/${ id }`}>
        <ImageListItem
            sx={{height: '100% !important'}}
        >    
            <img
            src={img}
            alt={name}
            loading="lazy"
            style={{objectFit: 'contain'}}
            />
            <ImageListItemBar
            title={name}
            subtitle={`#${id}`}
            />
        </ImageListItem>
    </Link>
  )
}
