const obtenerListadoEstudiantes = (rol) =>{

    const lista = ["felipe", "maria", "inti"];

    return new Promise ((resolve, reject)=>{
        if(rol === "profesor"){
            resolve(lista)
        }else{
            reject("no tienes permisos")
        }

    })
}


obtenerListadoEstudiantes("profesor").then(()=>console.log("promesa se resolvio"))