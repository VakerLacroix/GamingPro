alert("Bienvenido GamingPro. ¿Listo para Comprar? EMPECEMOS");

const carrito = [];

function mostrarCategorias() {
    const categoriasProductos = productos.map(producto => producto.categoria);

    const categorias = prompt("¿Qué estás buscando?\n" + categoriasProductos.join('\n'));

    if (categorias) {
        if (categorias.toLowerCase() === "equipos") {
            mostrarCategoriaEquipos();
        } else if (categorias.toLowerCase() === "componentes") {
            mostrarCategoriaComponentes();
        } else {
            console.log("Selecciona una opcion válida. 'Equipos' o 'Componentes'.");
            mostrarCategorias()
        }
    }
}

function mostrarCategoriaEquipos() {
    const equipos = productos.find(producto => producto.categoria === "Equipos");

    if (equipos) {
        const subcategoriasEquipos = equipos.subcategorias.map(subcategoria => subcategoria.nombre);

        const TipoDeEquipos = prompt("Selecciona el tipo de Equipo:\n" + subcategoriasEquipos.join('\n'));

        if (TipoDeEquipos) {
            if (TipoDeEquipos.toLowerCase() === "desktops" || TipoDeEquipos.toLowerCase() === "desktop") {
                mostrarEquipos("desktops");
            } else if (TipoDeEquipos.toLowerCase() === "notebooks" || TipoDeEquipos.toLowerCase() === "notebook") {
                mostrarEquipos("notebooks");
            } else {
                console.log("Selecciana una opcion  válida. Por favor, selecciona 'Desktops' o 'Notebooks'.");
                mostrarCategoriaEquipos()
            }
        }
    }
}
function mostrarCategoriaEquipos() {
    const equipos = productos.find(producto => producto.categoria === "Equipos");

    if (equipos) {
        const subcategoriasEquipos = equipos.subcategorias.map(subcategoria => subcategoria.nombre);

        const TipoDeEquipos = prompt("Selecciona el tipo de Equipo que buscas:\n" + subcategoriasEquipos.join('\n'));

        if (TipoDeEquipos) {
            mostrarEquipos(TipoDeEquipos);
        }
    }
}
function mostrarEquipos(nombreEquipos) {
    const equipos = productos.find(producto => producto.categoria === "Equipos");

    if (equipos) {
        const subcategoriaEquipos = equipos.subcategorias.find(subcategoria => subcategoria.nombre.toLowerCase() === nombreEquipos);

        if (subcategoriaEquipos) {
            console.log("Modelos disponibles:");

            subcategoriaEquipos.productos.forEach(producto => {
                console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
            });

            const seleccionEquipos = prompt("Ingresa el ID del modelo que deseas agregar al carrito:");

            const productoSeleccionado = subcategoriaEquipos.productos.find(producto => producto.id.toString() === seleccionEquipos);

            if (productoSeleccionado) {
                agregarAlCarrito(productoSeleccionado);
            } else {
                console.log("ID de producto no válido.");
                mostrarDesktops()
            }
        }
    }
}
function mostrarCategoriaComponentes() {
    const componentes = productos.find(producto => producto.categoria === "Componentes");

    if (componentes) {
        const subcategoriasComponentes = componentes.subcategorias.map(subcategoria => subcategoria.nombre);

        const TipoDeComponentes = prompt("Selecciona el tipo de Componente:\n" + subcategoriasComponentes.join('\n'));

        if (TipoDeComponentes) {
            if (TipoDeComponentes.toLowerCase() === "procesadores") {
                MostrarComponentes("procesadores");
            } else if (TipoDeComponentes.toLowerCase() === "motherboards") {
                MostrarComponentes("motherboards");
            } else if (TipoDeComponentes.toLowerCase() === "refrigeracion") {
                MostrarComponentes("refrigeracion");
            } else if (TipoDeComponentes.toLowerCase() === "memorias ram") {
                MostrarComponentes("memoriasram");
            } else if (TipoDeComponentes.toLowerCase() === "placas de video") {
                MostrarComponentes("placasdevideo");
            } else if (TipoDeComponentes.toLowerCase() === "almacenamiento") {
                MostrarComponentes("almacenamiento");
            } else if (TipoDeComponentes.toLowerCase() === "fuentes") {
                MostrarComponentes("fuentes");
            } else if (TipoDeComponentes.toLowerCase() === "gabinetes") {
                MostrarComponentes("gabinetes");
            } else if (TipoDeComponentes.toLowerCase() === "perifericos") {
                MostrarComponentes("perifericos");
            } else if (TipoDeComponentes.toLowerCase() === "monitores") {
                MostrarComponentes("monitores");
            } else if (TipoDeComponentes.toLowerCase() === "estabilizadores") {
                MostrarComponentes("estabilizadores");
            } else if (TipoDeComponentes.toLowerCase() === "sistema operativo") {
                MostrarComponentes("sistemaoperativo");
            } else {
                console.log("Selección no válida. Por favor, selecciona un Componente'.");
                mostrarCategoriaComponentes()
            }
        }
    }
}

function mostrarCategoriaComponentes() {
    const componentes = productos.find(producto => producto.categoria === "Componentes");

    if (componentes) {
        const subcategoriasComponentes = componentes.subcategorias.map(subcategoria => subcategoria.nombre);

        const TipoDeComponentes = prompt("Selecciona el tipo de Componente:\n" + subcategoriasComponentes.join('\n'));

        if (TipoDeComponentes) {
            MostrarComponentes(TipoDeComponentes);
        }
    }
}

function MostrarComponentes(nombreComponente) {
    const componentes = productos.find(producto => producto.categoria === "Componentes");

    if (componentes) {
        const subcategoriaComponentes = componentes.subcategorias.find(subcategoria => subcategoria.nombre.toLowerCase() === nombreComponente);

        if (subcategoriaComponentes) {
            console.log("Modelos disponibles:");

            subcategoriaComponentes.productos.forEach(producto => {
                console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
            });

            const seleccionComponentes = prompt("Ingresa el ID del modelo que deseas agregar al carrito:");

            const productoSeleccionado = subcategoriaComponentes.productos.find(producto => producto.id.toString() === seleccionComponentes);

            if (productoSeleccionado) {
                agregarAlCarrito(productoSeleccionado);
            } else {
                console.log("ID de producto no válido.");
                MostrarComponentes(nombreComponente)
            }
        }
    }
}
function agregarAlCarrito(producto) {
    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    console.log(`"${producto.nombre}" se ha agregado al carrito.`);
    finalizarCompra();
}

function finalizarCompra() {
    const opciones = ["1)Seguir comprando","2)Finalizar compra"];
    const seleccion = prompt("Ingresa el numero correspondiente segun la opcion que desees\n" + opciones.join('\n'));

    if (seleccion) {
    } if (seleccion === "1" ){
        mostrarCategorias();
    } else if (seleccion === "2"){
        mostrarCarrito();  

    } else {
        console.log("Selección no válida. Por favor ingresa el numero correspondiente segun la opcion que desees");
        finalizarCompra()
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        console.log("Productos en el carrito:");

        let totalCarrito = 0;

        carrito.forEach(producto => {
            const subTotal = producto.precio * producto.cantidad;
            totalCarrito += subTotal;

            console.log(`Nombre: ${producto.nombre}`);
            console.log(`Precio: $${producto.precio}`);
            console.log(`Cantidad: ${producto.cantidad}`);
            console.log(`Subtotal: $${subTotal}`);
            console.log("----------");
        });

        console.log(`Total del carrito: $${totalCarrito}`);
    }
}

mostrarCategorias();