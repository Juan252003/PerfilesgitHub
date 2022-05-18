const API = "https://api.github.com/users/";

async function Buscar(){
    const response = await fetch(API + 'Juan252003')
    //ahora quiero traer la info en formato json
    const data = await response.json()
    console.log(data)
}

const app = Vue.createApp({
    data() {
        return {
            message: 'Hola SENA!'
        }
    }
}) //Montamos esta informacion en el div app