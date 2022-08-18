import Link from 'next/link'
import React from 'react'

const CardPokemons = ({name})=>{
    return(
        <>
        <ul>
        <Link href={`/${name}`}>{name}</Link>
        </ul>
        </>
    )
}

export default CardPokemons