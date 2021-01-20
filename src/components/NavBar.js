import React from 'react';
import './navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';

 export default function NavBar() {
const [pokemonBuscado, setPokemonBuscado] = useState('');
const buscarPokemon = (e) => {
    setPokemonBuscado(e.target.value);
}

console.log(pokemonBuscado);

    return (
            <AppBar id='nav-bar'>
                <Typography id='nav-title'>Hi! I'm Pokédex</Typography>
            </AppBar>
    )
 }


 /*
  export default function NavBar() {
const [pokemonBuscado, setPokemonBuscado] = useState('');
const buscarPokemon = (e) => {
    setPokemonBuscado(e.target.value);
}

console.log(pokemonBuscado);

    return (
            <AppBar>
                <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Search..." onChange={buscarPokemon}/>
                </form>
            </AppBar>
    )
 }*/