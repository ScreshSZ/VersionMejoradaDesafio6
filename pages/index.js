import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardPokemons from '../components/CardPokemons';


const Home = () => {

  const [pokemones, setPokemones] = useState([]);

  const obtenerPokemones = async () => {
    try{
const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=50&limit=50");
    const datos = respuesta.data.results
    setPokemones(datos)
    }catch(e){
      console.log(e)
    }
    
    
  }

  useEffect(() => {
    obtenerPokemones();
  }, [])


  return (
    <div>
      
      <h1>Hola soy pagina Home</h1>
      {pokemones.map((item, index) => (
        <CardPokemons
          key={index}
          name={item.name}
        />
      ))}
    </div>
  )
}

export default Home