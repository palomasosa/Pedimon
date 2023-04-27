const botonCarro = document.getElementById("carroCompras");
const sidebar = document.getElementById("sidebar");
const botonCerrarSidebar = document.getElementById("cerrarSidebar");
const mensajeSinProductos = document.getElementById("mensajeSinProductos");
const pProductosAdded = document.getElementById("productos");
const cantidadCompras = document.getElementById("cantidadCompras");
// const botonComprarCards = document.querySelectorAll(".botonComprarCard")

// class producto {
//     constructor(nombre,precio){
//         this.nombre;
//         this.precio;
//     }

// };

let arrayProductosPintar = [];
let arrayProductosGuardar = [];
let cantidadClicks = 0;
 
botonCarro.addEventListener("click",abrirSidebar);
botonCerrarSidebar.addEventListener("click",cerrarSidebar);

function crearProducto(nombreActual,precioActual){
        const producto = {
            nombre: nombreActual,
            precio: precioActual
        };
        return producto;
};

function ocultarMensaje(){
    mensajeSinProductos.style.visibility = "hidden";
    mensajeSinProductos.style.display = "none";
};

function paintProduct(arrayProd){
    for (let index = 0; index < arrayProd.length; index++) {
        
        pProductosAdded.innerHTML = pProductosAdded.innerHTML + `${arrayProd[index].nombre} <spam>  .  .  .  </spam> ${arrayProd[index].precio} </br></br>`
        arrayProd.shift(0);
    };
};

function addToCart(e){
    const productName = e.parentElement.getElementsByTagName('h3')[0].innerText;
    const productPrice = e.parentElement.getElementsByTagName('p')[0].innerText;
    productoActual = crearProducto(productName,productPrice);
    arrayProductosPintar.push(productoActual);
    arrayProductosGuardar.push(productoActual);

    console.log(arrayProductosGuardar);
    ocultarMensaje();
    paintProduct(arrayProductosPintar);
    cantidadClicks = cantidadClicks + 1;
    cantidadCompras.innerHTML = `${cantidadClicks}`
};

``

function abrirSidebar(){

    sidebar.style.visibility = "visible";
};

function cerrarSidebar(){
    sidebar.style.visibility = "hidden";
}
