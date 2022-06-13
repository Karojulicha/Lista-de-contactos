const nombre = document.querySelector(".nombre")
const apellido = document.querySelector(".apellido")
const numerodecasa = document.querySelector(".numerodecasa")
const ubicaciones = document.querySelector ("ubicacion")
const ciudad = document.querySelector ("ciudad")
const dirreccion = document.querySelector ("direccion")
const telefono = document.querySelector ("telefono")

const local= window.localStorage 

const listadodetareas = document.querySelector (".listado")
const agregardatos = document.querySelector(".agregar-tarea")
const eliminar = document.querySelector ("eliminar-tarea")



 agregardatos.onclick = () =>{

    let contacto = {
        id: Math.random (1,100),
        nombre:nombre.value,
        apellido: apellido.value,
        numerodecasa: numerodecasa.value,
        telefono: telefono.value,
        ubicaciones: ubicaciones.value,
        ciudad: ciudad.value,
    
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