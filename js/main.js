const API = "https://api.github.com/users/";

    //se cortola funcion y se pego en el methods

const ella = Vue.createApp({
    data() {
        return {
            busqueda: null,
            result: null,
            error: null,
            favoritos: new Map()
        }
    },

    created() {
        const FavoritosGuardados = JSON.parse(window.localStorage.getItem("misFavoritos"))
        
        if(FavoritosGuardados.length){
            //recreamos el map con un nuevo nombre
            //const favoritosnew = new Map(FavoritosGuardados.Map);
        }
        //console.log(FavoritosGuardados)

    },

    computed:{

        estadoFavorito(){
            return this.favoritos.has(this.result.id)
        },

        todosFavorito(){
            //pasamos la información a un array
            return Array.from(this.favoritos.values())
            //el metodo values()traera solo los valores sin las claves
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
        },//aqui cierra el metodo buscar
        
        addFavorito(){
            this.favoritos.set(this.result.id, this.result)
            this.actualizarStorage()
        },

        removerFavorito(){
            this.favoritos.delete(this.result.id)
            this.actualizarStorage()
        },

        actualizarStorage(){
            window.localStorage.setItem('misFavoritos', JSON.stringify(this.todosFavorito))
        }
    }
})