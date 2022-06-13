const nombre = document.querySelector(".nombre")
const apellido = document.querySelector(".apellido")
const numero = document.querySelector(".numero")
const ubicaciones = document.querySelector ("ubicacion")
const ciudad = document.querySelector ("ciudad")
const dirrecion = document.querySelector ("direccion")
const local= window.localStorage 

const listadodetareas = document.querySelector (".listado")
const agregardatos = document.querySelector(".agregar-tarea")
const eliminar = document.querySelector ("eliminar-tarea")



 agregardatos.onclick = () =>{

    let contacto = {
        id: Math.random (1,100),
        nombre:nombre.value,
        apellido: apellido.value,
        numero: numero.value,
    
    }
    console.log (contacto)
 }

 const guardarcontacto = ( local , contacto) =>{
    local.setItem( contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
   

}

 function eliminar.onclick (local, id) { 
    contacto= document.getElementById(id);
    if (contacto) {		alert ("El elemento selecionado no existe"); 	} 
    else { 		padre = contacto.parentNode; 		padre.removeChild(contacto); 	}
    }
 
const imprimir = (local) => {
     document.write (contacto)
}