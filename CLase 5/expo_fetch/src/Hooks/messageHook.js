import { useEffect, useState } from "react"
import { waitSeconds } from "../getData/waitSeconds"

export const useMessage = ()=>{
  const [message, setMessage] = useState()
  
  //Inicia al mostrar o cargar la pantalla
  useEffect(()=>{
    try {
      waitSeconds(setMessage) //Nunca espero la respuesta
    } catch (error) {
      console.log(error)
    }
  },[])

  return [message, setMessage]
}