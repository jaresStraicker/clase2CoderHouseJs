// // let hola = "hola mundo";
// // console.log(hola);


// const productos = [{
//     id: 1,
//     nombre: 'ProductoA',
//     img:    "img/kaiak.fem.jpeg",
//     precio: 2000 
// },
// {
//     id: 2,
//     nombre: 'ProductoA',
//     precio: 2000 
// },
// {
//     id: 3,
//     nombre: 'ProductoA',
//     precio: 2000 
// },
// {
//     id: 4,
//     nombre: 'ProductoA',
//     precio: 2000 
// },
// {
//     id: 5,
//     nombre: 'ProductoA',
//     precio: 2000 
// },

// {
//     id: 6,
//     nombre: 'ProductoA',
//     precio: 2000 
// },


// {
//     id: 7,
//     nombre: 'ProductoA',
//     precio: 2000 
// },

// {
//     id: 8,
//     nombre: 'ProductoA',
//     precio: 2000 
// },

// {
//     id: 9,
//     nombre: 'ProductoA',
//     precio: 2000 
// },

// {
//     id: 10,
//     nombre: 'ProductoA',
//     precio: 2000 
// },



// ]

// for (i = 0; i< productos.length; i++){
//     console.log(productos[i].id);
//     console.log(productos[i].nombre);
//     console.log(productos[i].precio);
// }


const productos = [
    { id: 1, nombre: "Kaiak areo", precio: 19.99, descripcion: "fragancia exclusiva", img: "img/aereo.jpg" },
    { id: 2, nombre: "essencial", precio: 39.99, descripcion: "perfume essencial de tu vida", img: "img/essencial.jpg" },
    { id: 3, nombre: "vial", precio: 69.99, descripcion: "Vital para tu vida", img: "img/vital.jpg" }
];

let carrito;


if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
    carrito = [];
};

// Funcion para mostrar productos
function mostrarProductos() {
    const productosContainer = document.getElementById("productos-container");
    productosContainer.innerHTML = "";

    productos.forEach(producto => {
        const productoHijo = document.createElement("div"); //reamos el div dentro de productos-container
        productoHijo.classList.add("producto"); // le agregamos una clase llamada producto para luego dar estilos en css

        //concatenamos de esta manera como explico el profe lucas en la clase 7, es mas legible y nos permite añadir todo en in solo string. esto nos sirve para inyectar codigo al html con nodos y no solo texto plano

        productoHijo.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <ul>
                <li><h3>${producto.nombre}</h3></li>
                <li><p>Precio: $${producto.precio}</p></li>
                <li><p>${producto.descripcion}</p></li>
            </ul>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            `;//la etiueta button contiene la funcion agregarAlcarrito

            

        productosContainer.appendChild(productoHijo); // al producto-container padre le inyectamos su hijo productoHijo.
    });
}

// Funcion para agregar productos al carrito.


//el id parametro se lo pongo para cuando el usuario haga click, llama a la funcion y le pasa su identificador del producto.
function agregarAlCarrito(id) {
    const productoSeleccionado = productos.find(producto => producto.id === id);
    if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
        actualizarCarrito();
    }
}

// Funcion para actualizar el contador y mostrar los productos en el carrito
function actualizarCarrito() {
    const carritoContador = document.getElementById("carrito-count");
    carritoContador.textContent  = carrito.length ;

    const carritoSeccion = document.getElementById("carrito-seccion") || crearSeccionDeCarrito();
    const carritoLista = document.getElementById("carrito-lista");
    carritoLista.innerHTML = ""; // Limpiar la lista

    carrito.forEach(producto => {
        const item = document.createElement("li");
        item.innerHTML = `${producto.nombre} - $${producto.precio}`;
        carritoLista.appendChild(item);

        
    });
    //Guardamos en local storage.
    localStorage.setItem("carrito", JSON.stringify(carrito));
}



//aqui iria la funcion de mostrar carrito cuando se abra, pero no me da el tiempo lo entrego asi







// Funcion para crear el contenedor del carrito si no existe
function crearSeccionDeCarrito() {
    const seccionCarrito = document.createElement("div");
    seccionCarrito.id = "carrito-seccion";
    seccionCarrito.innerHTML = `
        <h2>Carrito de Compras</h2>
        <ul id="carrito-lista"></ul>
    `;
    document.body.appendChild(seccionCarrito);
    return seccionCarrito;
}

// Inicializar la visualización de productos y carrito
mostrarProductos();
actualizarCarrito();

//eventos


const carritoIcono = document.getElementById("carrito-icono")
carritoIcono.addEventListener("click", mostrarOcultarCarrito);







