import React, { useEffect, useState } from 'react';


export const usePokemon = (url: string) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    const fetchPokemon = async () => {
        const res = await fetch(url)
        const pokemon = await res.json()

        if (pokemon) {
            setData(pokemon)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, []);

    return { data, isLoading }
}


