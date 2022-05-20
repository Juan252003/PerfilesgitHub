const API = "https://api.github.com/users/";

    //se cortola funcion y se pego en el methods

const app = Vue.createApp({
    data() {
        return {
            busqueda: null,
            result: null
        }
    },
    methods: {

        //la palabra funciont no es necesaria, porque se usa un metodo
        async Buscar(){
            const response = await fetch(API + this.busqueda)
            //ahora quiero traer la info en formato json
            const data = await response.json()
            console.log(data)
            this.result = true
        }   
    },
}) //Montamos esta informacion en el div app