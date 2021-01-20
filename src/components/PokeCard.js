import React, {useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import './PokeCard.css';

export default function PokeTarjeta({nombre}) {
const [fotito, setFotito] = useState('');
const [types, setTypes] = useState([]);
const [pokeId,setPokeId] = useState([]);
const [pokePeso,setPokePeso] = useState([]);
const [pokeAltura,setPokeAltura] = useState([]);
const [open, setOpen] = React.useState(false);
const [pokeHabilidad, setPokeHabilidad] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
//esto me trae las fotitos de los pokemoncitos!!
useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(res => res.json())
        .then(data => 
           {
            //con esto consigo la dire de la foto de los pokemon
            const result = data.sprites.front_default;
            setFotito(result);
            //con esto, consigo el tipo de pokemon
            const tipoPokemon = data.types.map(p => p.type.name);
            //console.log(tipoPokemon);
            setTypes(tipoPokemon);
            //con esto, consigo el id  del pokemon
            const idPokemon = data.id;
            setPokeId(idPokemon);
            //setTypes(tipoPokemon);
            //con esto, consigo el peso  del pokemon
            const pesoPokemon = data.weight;
            setPokePeso(pesoPokemon);
            //con esto, consigo la altura del pokemon
            const alturaPokemon = data.height;
            setPokeAltura(alturaPokemon);
            //con esto, consigo la hablidad
            const habilidadPokemon = data.abilities.map(a => a.ability.name);
            //console.log(habilidadPokemon);
            setPokeHabilidad(habilidadPokemon);
           }
        )
        .catch(error => console.log('error'))
}, [nombre])

    return (
        <React.Fragment>
            <Link onClick={handleClickOpen} className='poke-links' >
            <Paper className='poke-tarjeta' key={nombre} elevation={5} >
                <p>{nombre}</p>
                <div className='poke-tipos'>
                    {types.map(tipo => (
                            <p>{tipo}</p>
                    ))}
                </div>
                <img src={fotito} alt='pokemon-avatar' />
            </Paper>
            </Link>
            <Dialog
            open={open}
            onClose={handleClose}
            >
                <DialogTitle >
                    <Grid container justify='center '>
                    <Grid item xs={12} ><Typography variant='h4' className='id-poke' >#{pokeId}</Typography></Grid>
                    <Grid item xs={12} ><Typography variant='h4' className='titulo-poke'>{nombre}</Typography></Grid>
                    </Grid>
                    <Divider />
                </DialogTitle>
                <DialogContent>
                <Grid container>
                    <Grid item xs={12} justify='center' align='center'><img src={fotito} alt='pokemon-p' /></Grid>
                    <Grid item xs={12}><Typography variant='h6' className='card-attr-title'>Type</Typography></Grid>
                    {
                            types.map(p => (
                            <Grid item xs={3}>
                                <Typography variant='body1' className='card-attr-text'  >{p}</Typography>
                            </Grid>
                            ))
                        }

                    <Grid item xs={12}><Typography variant='h6' className='card-attr-title' >Weight</Typography></Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1' className='card-attr-text'   >{pokePeso} kg</Typography>
                    </Grid>
                    <Grid item xs={12}><Typography variant='h6' className='card-attr-title' >Height</Typography></Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1' className='card-attr-text'  >{pokeAltura}0 cm</Typography>
                    </Grid>
                    <Grid item xs={12}><Typography variant='h6' className='card-attr-title' >Abilities</Typography></Grid>
                    
                        {
                            pokeHabilidad.map(p => (
                            <Grid item xs={3}>
                                <Typography variant='body1' className='card-attr-text'  >{p}</Typography>
                            </Grid>
                            ))
                        }
                        
                    
                </Grid>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
};
