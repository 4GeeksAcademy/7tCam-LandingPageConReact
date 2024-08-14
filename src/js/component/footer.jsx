import React from "react";
function Footer () {
    return(
    <nav className="w-100 p-3 bg-dark">
    <div className="container-fluid d-flex justify-content-center ">
        <span className="navbar-brand mb-0 h1 text-white">CopyRight © Your Website 2019</span>
    </div>
    </nav>

    )
    
}
export default Footer;
 

// En react(archivos con la extension:jsx) las funciones o en general
/*  1) de class a className
    2) la para nonmbrar a una funcion se utiliza el nombre asignado en PascalCase 
    3) para react parametros<>(equivalente a)props 
    4) Una funcion en react se llama asi: <NameDeLaFuncion/> 
    5) Un compoonente en react se le llamra con los sgts pasos:
     exportando y depues se importa 
    6) ejemplo de una funcion en react:
    
    A)importamos :
    import react ...
    B)declaramos las funciones :*/

    // function Saludar/*NombreDeLaFuncion*/ {nombre,apellido/*props o propiedades*/}={props o el name que queramos //objeto y espacio de memoria 
    // que guardara los props de nombre y apellido}) {
    //     return(
    //         <h1>Hola {props.nombre//accediendo a la props nombre, ya que "props(puede ser culaquier name pero generamente es props)" 
    //  es un objeto con proiedades nombre y apellidos}</h1> (h1 y toda esa line es un codigo html)
    //     )
    // }
    // <saludar nombre = "Luis"/>(la funcion se va llamar en elemento "Home")
    // <saludar nombre = "Luis" apellido="gomez"/>(la funcion se va llamar en elemento "Home", si quiero anadir mas props lo que se debe
    // hacer es separar por espacios como los atributos en html) 
    // C)exportamos :
    // export default name del elemeto(solo si quisieramos exportar un componente del elemento()
    

// function Footer() {
//     return(






//     )
    
// }