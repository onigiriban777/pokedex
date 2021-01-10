import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import PokeTarjeta from './components/PokeCard';
import Pagination from './components/Pagination';
import './app.css';

function App() {
const [pokemon, setPokemon] = useState([]);
const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
const [nextPage, setNextPage] = useState();
const [prevPage, setPrevPage] = useState();
const [loading, setLoading] = useState(true);

// con este useeffect conseguimos el nombre y la dire de cara pokemon
useEffect(() => {
  setLoading(true);
  fetch(currentPage)
  .then(res => res.json())
  .then(data => 
    {
      setNextPage(data.next);
      setPrevPage(data.previous)
      const resultados = data.results.map(prueba => ({nombre: prueba.name, link: prueba.url}))
      setPokemon(resultados);
      setLoading(false);
    })
    .catch(error => console.log('error'))
}, [currentPage]);


//Botones para cambiar de pagina

  const nextPagePlease = () => {
    setCurrentPage(nextPage)
  }
  const prevPagePlease = () => {
    setCurrentPage(prevPage)
  }
  return (
    <div className="App">
      {loading ? <LinearProgress className='progreso' color="primary" /> :
      
      <React.Fragment>
        <Grid container className='tarjetitas' spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h1' className='titulo' >Pokedex</Typography>
          </Grid>
        {
          pokemon.map( p => 
            <Grid item xs={6} sm={3} md={3} lg={2}>
              <PokeTarjeta nombre={p.nombre} />
            </Grid>
            )
        }
          <Grid item xs={12}>
          <Pagination 
            gotoNextPage={ nextPage ? nextPagePlease : null}
            gotoPrevPage={prevPage ? prevPagePlease : null}
            />
          </Grid>
        </Grid>
      </React.Fragment>
      }
    </div>
  );
}

export default App;
