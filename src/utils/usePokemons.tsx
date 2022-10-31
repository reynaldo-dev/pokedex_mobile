import React, { useEffect, useState } from 'react'
const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=100'

export const usePokemons = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchPokemons = async () => {
        const res = await fetch(baseURL)
        const pokemons = await res.json()

        if (pokemons?.results.length > 0) {
            setData(pokemons.results)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, []);

    return { data, isLoading }
}
