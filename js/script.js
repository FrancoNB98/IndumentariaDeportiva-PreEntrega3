const productos = [
    {
        id: "1001",
        titulo: "Argentina Titular 2022",
        imagen: "./img/camiseta-seleccionarg-2022.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones",
        },
        precio: 18000,
    },
    {
        id: "1002",
        titulo: "Alemania Titular 2022",
        imagen: "./img/camiseta-seleccionGer-2022.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 18000,
    },
    {
        id: "1003",
        titulo: "Brasil Titular 2022",
        imagen: "./img/camiseta-seleccionBRA-2022.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 18000,
    },
    {
        id: "1004",
        titulo: "Estados Unidos Titular 2022",
        imagen: "./img/camiseta-seleccionUSA-2022.jpg" ,
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 18000,
    },
    {
        id: "1005",
        titulo: "Francia Titular 2022",
        imagen: "./img/camiseta-franco-titular-22.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 17000,
    },
    {
        id: "1006",
        titulo: "Holanda Titular 2022",
        imagen: "./img/camiseta-holanda-titular-22.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones"
        },
        precio: 17000,
    },
    {
        id: "1007",
        titulo: "Argentina Alternativa 2022",
        imagen: "./img/Argentina-suplente-2022.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones",
        },
        precio: 18000,
    },
    {
        id: "1008",
        titulo: "Uruguay Titular 2022",
        imagen: "./img/Uruguay-titular-2022.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones",
        },
        precio: 18000,
    },
    {
        id: "1009",
        titulo: "Bélgica Titular 2022",
        imagen: "./img/Bélgica-titular-2022.jpg",
        categoria: {
            nombre: "Selecciones",
            id: "selecciones",
        },
        precio: 18000,
    },
    {
        id: "1010",
        titulo: "Manchester U. Suplente 2022",
        imagen: "./img/camiseta-ManUnited-alternativa2022.jpg",
        categoria: {
            nombre: "Premier League",
            id: "premier-league"
        },
        precio: 18000,
    },
    {
        id: "1011",
        titulo: "Manchester City Titular 2022",
        imagen: "./img/camiseta-ManCity-titular2022.jpg",
        categoria: {
            nombre: "Premier League",
            id: "premier-league"
        },
        precio: 18000,
    },
    {
        id: "1012",
        titulo: "Arsenal Titular 2022",
        imagen: "./img/camiseta-Arse-titular2022.jpg",
        categoria: {
            nombre: "Premier League",
            id: "premier-league"
        },
        precio: 18000,
    },
    {
        id: "1013",
        titulo: "Liverpool Titular 22/23",
        imagen: "./img/camiseta-liverpool-titular-22-23.jpg",
        categoria: {
            nombre: "Premier League",
            id: "premier-league"
        },
        precio: 18000,
    },
    {
        id: "1014",
        titulo: "Tottenham Titular 22/23",
        imagen: "./img/camiseta-tottenham-titular-22-23.jpg",
        categoria: {
            nombre: "Premier League",
            id: "premier-league"
        },
        precio: 18000,
    },
    {
        id: "1015",
        titulo: "Brighton Titular 22/23",
        imagen: "./img/Brighton-titular22-23.jpg",
        categoria: {
            nombre: "Premier League",
            id: "premier-league"
        },
        precio: 18000,
    },
    {
        id: "1016",
        titulo: "Nottingham Alternativa 22/23",
        imagen: "./img/Nottingham-suplente22-23.jpg",
        categoria: {
            nombre: "Premier League",
            id: "premier-league"
        },
        precio: 18000,
    },
    {
        id: "1017",
        titulo: "Manchester U. Titular 22/23",
        imagen: "./img/ManchesterUnited-titular22-23.jpg",
        categoria: {
            nombre: "Premier League",
            id: "premier-league"
        },
        precio: 18000,
    },
    {
        id: "1018",
        titulo: "Argentina Suplente 2006",
        imagen: "./img/camiseta-Retro-seleccionarg-2006.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 12000,
    },
    {
        id: "1019",
        titulo: "Barcelona Titular 05/06",
        imagen: "./img/camiseta-Retro-Barcerlona-06.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 12000,
    },
    {
        id: "1020",
        titulo: "Boca Juniors Titular 2002",
        imagen: "./img/camiseta-retro-cabj-2002.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 12000,
    },
    {
        id: "1021",
        titulo: "Barcelona Alternativa 02/03",
        imagen: "./img/camiseta-retro-barcelona.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 12000,
    },
    {
        id: "1022",
        titulo: "Francia Alternativa 2006",
        imagen: "./img/camiseta-francia-alternativa-06.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 12000,
    },
    {
        id: "1023",
        titulo: "Boca Juniors Alternativa 1997",
        imagen: "./img/Boca-Juniors-suplente-1997.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 12000,
    },
    {
        id: "1024",
        titulo: "Inter Titular 2013/14",
        imagen: "./img/Inter-retro-titular-13-14.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 12500,
    },
    {
        id: "1025",
        titulo: "Milan Alternativa 06/07",
        imagen: "./img/Milan-retro-suplente06-07.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 12500,
    },
    {
        id: "1026",
        titulo: "España Alternativa 2010",
        imagen: "./img/España-retro-suplente-2010.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 12000,
    },
    {
        id: "1027",
        titulo: "Arsenal Titular 02/03",
        imagen: "./img/Arsenal-titular-02-03.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 12500,
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")


function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = ""

    productosElegidos.forEach(producto => {

        let div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        `

        contenedorProductos.append(div)
    })

    actualizarBotonesAgregar()
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
        } else{
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let prodcutosEnCarrito;
let prodcutosEnCarritoLS = localStorage.getItem("productos-en-carrito")


if(prodcutosEnCarritoLS) {
    productosEnCarrito = JSON.parse(prodcutosEnCarritoLS)
    actualizarNumero()
} else {
    productosEnCarrito = []
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++;
    }else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }
    actualizarNumero()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumero() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito
}