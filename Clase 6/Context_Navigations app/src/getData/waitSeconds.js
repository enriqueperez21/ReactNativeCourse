export const waitSeconds = async(setMessage) =>{
    const saludoUsuario = "Martin"
    const userData = {
        name: "Enrique",
        email: "luis.perez35@epn.edu.ec",
        pokemons: ["pikachu", "charmander"]
    }
    setTimeout(()=>{
        console.log("Dato traido")
        setMessage(userData)
    }, 4000)
}