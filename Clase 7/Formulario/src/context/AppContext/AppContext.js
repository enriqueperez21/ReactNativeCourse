import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const useApp = ()=>{
    return useContext(AppContext)
}

export const AppProvider = ({children}) =>{
    const [userInfo, setUserInfo] = useState()
    const [loggin, setLoggin] = useState(false)

    const loginComplete = (data)=>{
        setUserInfo({...data})
        setLoggin(true)
    }

    useEffect(()=>{
        
    },[])
    
    return(
        <AppContext.Provider value={{userInfo, loggin, loginComplete}}>
            {children}
        </AppContext.Provider>
    )
}