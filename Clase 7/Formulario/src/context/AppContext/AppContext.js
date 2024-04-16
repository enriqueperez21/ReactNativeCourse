import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const useApp = ()=>{
    return useContext(AppContext)
}

export const AppProvider = ({children}) =>{
    const [userInfo, setUserInfo] = useState("Enrique")
    const [pokemon, setPokemon] = useState()
    const [userCar, setUserCar] = useState()
    const [loggin, setLoggin] = useState(false)

    const loginComplete = ()=>{
        setUserInfo({name: "Enrique", email: "luis.perez@epn.edu.ec"})
        setLoggin(true)
    }
    const updateCar = (newData)=>{
        setUserCar({...userCar, newData})
    }

    const getPokemon =async(pokemonName)=>{
        const uri = "https://pokeapi.co/api/v2/pokemon/"+pokemonName
        const response1 = await fetch(uri)
        const responseJson = await response1.json()
        const pokemonType = responseJson.types[0].type.name
        return pokemonType
    }
    useEffect(()=>{
        const pokemonType = getPokemon("pikachu")
        setPokemon(pokemonType)
    },[])
    
    return(
        <AppContext.Provider value={{userInfo, pokemon, updateCar, loggin, loginComplete}}>
            {children}
        </AppContext.Provider>
    )
}