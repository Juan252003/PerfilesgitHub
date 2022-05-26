const API = "https://api.github.com/users/";

    //se cortola funcion y se pego en el methods

const ella = Vue.createApp({
    data() {
        return {
            busqueda: null,
            result: null,
            error: null
        }
    },
    methods: {

        //la palabra funciont no es necesaria, porque se usa un metodo
        async Buscar(){
            //depende del error
            this.result = this.error = null
            try {
                const response = await fetch(API + this.busqueda)
                if(!response.ok) throw new Error("Usuario no Encontrado")
                //ahora quiero traer la info en formato json
                const data = await response.json()
                console.log(data)
                this.result = data //cambiar true por data

            } catch (error) {
                this.error = error  
                //tan pronto como termine el proceso limpia haciendo vacia la busqueda  
            }finally {
                this.busqueda = null
            }
        }   
    },
}) //Montamos esta informacion en el div app