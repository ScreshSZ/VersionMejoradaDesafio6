import React from 'react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Head from 'next/head'

const Detalles = () => {

    const router = useRouter()

    const { idPokemones } = router.query

    const [pokemones, setPokemones] = useState();

    const obtenerPokemones = async () => {
        try {
            const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemones}`);
            console.log(respuesta.data)
            setPokemones(respuesta.data)
        } catch (e) {
            console.log(e)
        }


    }

    useEffect(() => {
        obtenerPokemones();
    }, [])


    return pokemones && (
        <div className='contenedorDatos'>
            <div className='contenedorPropiedades'>
                <img src={pokemones.sprites.back_default}></img>
                <h1>Hola soy {pokemones.name}</h1>
                <h2>Hola mi especie es {pokemones.species.name}</h2>
                <h3>Ataque: {pokemones.stats[1].base_stat}</h3>
                <h3>Defensa: {pokemones.stats[2].base_stat}</h3>
                <h3>Ataque Especial: {pokemones.stats[3].base_stat}</h3>
                <h3>Defensa Especial: {pokemones.stats[4].base_stat}</h3>
            </div>
        </div>
    )
}

export default Detalles