let precio = 0;
let total = 0;
let noAgregar = "De Acuerdo, Continuemos con el siguiente componente";

alert("Bienvenido GamingPro, Arma tu PC ahora!");
alert("Elige la opcion numerica (1,2,3...) segun corresponda al articulo que desees. Comencemos!");

const ComprandoProcesadores = () => {
    let procesadores = 0;
    const procesadorBasicoI3 = 65000;
    const procesadorProfesionalI5 = 160000;
    const procesadorGamingI7 = 420000;
    let seguirComprandoProcesadores = true;

    do {
        procesadores = prompt("Procesador: 1)Basico I3 2)Profesional I5 3)Gaming I7 4)No agregar");

        switch (procesadores) {
            case "1":
                precio = procesadorBasicoI3;
                break;
            case "2":
                precio = procesadorProfesionalI5;
                break;
            case "3":
                precio = procesadorGamingI7;
                break;
            case "4":
                console.log(noAgregar);
                seguirComprandoProcesadores = false;
                precio = 0;
                break;
            default:
                alert("Opción incorrecta. Por favor, seleciona una opcion correcta.");
                continue;
        }

        total += precio;
        console.log(" Precio del procesador elegido es de: $" + precio)
        console.log(" Total de la compra: $" + total);

        seguirComprandoProcesadores = confirm("¿Continuemos con el siguiente componente?");
        if (!seguirComprandoProcesadores) {
            alert("¿Deseas agregar otro Procesador?")
        }
    } while (!seguirComprandoProcesadores);
}
ComprandoProcesadores();

const ComprandoMotherboards = () => {
    let motherboards = 0;
    const motherboardBasica = 68000;
    const motherboardProfesional = 121000;
    const motherboardGaming = 167000;
    let seguirComprandoMotherboards = true;

    do {
        motherboards = prompt("Motherboard: 1)Basica 2)Profesional 3)Gaming 4)No agregar");

        switch (motherboards) {
            case "1":
                precio = motherboardBasica;
                break;
            case "2":
                precio = motherboardProfesional;
                break;
            case "3":
                precio = motherboardGaming;
                break;
            case "4":
                console.log(noAgregar);
                seguirComprandoMotherboards = false;
                precio = 0;
                break;
            default:
                alert("Opción incorrecta. Por favor, seleciona una opcion correcta.");
                continue;
        }

        total += precio;
        console.log(" Precio de la motherboard elegida es de: $" + precio)
        console.log(" Total de la compra: $" + total);

        seguirComprandoMotherboards = confirm("Continuemos con el siguiente componente ");
        if (!seguirComprandoMotherboards) {
            alert("¿Deseas agregar otra Motherboard?")
        }

    } while (!seguirComprandoMotherboards);
}
ComprandoMotherboards();

const ComprandoRefigeracion = () => {
    let refrigeracion = 0;
    const refrigeracionBasica = 8500;
    const refrigeracionMedia = 24700;
    const refrigeracionFull = 62000;
    let seguirComprandoRefrigeracion = true;

    do {
        refrigeracion = prompt("Refrigeracion: 1)Basica 2)Media 3)Full 4)No agregar");

        switch (refrigeracion) {
            case "1":
                precio = refrigeracionBasica;
                break;
            case "2":
                precio = refrigeracionMedia;
                break;
            case "3":
                precio = refrigeracionFull;
                break;
            case "4":
                console.log(noAgregar);
                seguirComprandoRefrigeracion = false;
                precio = 0;
                break;
            default:
                alert("Opción incorrecta. Por favor, seleciona una opcion correcta.");
                continue;
        }

        total += precio;
        console.log(" Precio de la refrigeracion elegida es de: $" + precio)
        console.log(" Total de la compra: $" + total);

        seguirComprandoRefrigeracion = confirm("Continuemos con el siguiente componente");
        if (!seguirComprandoRefrigeracion) {
            alert("¿Deseas agregar otro componente de Refrigeracion?")
        }

    } while (!seguirComprandoRefrigeracion);
}
ComprandoRefigeracion();

const ComprandoMemoriaRam = () => {
    let MemoriasRam = 0;
    const memoriaRam8gb = 19500;
    const memoriaRam16gb = 29200;
    const memoriaRam32gb = 104000;
    let seguirComprandoMemoriaRam = true;

    do {
        MemoriasRam = prompt("Memoria Ram: 1) 8gb 2) 16gb 3) 32gb 4)No agregar");

        switch (MemoriasRam) {
            case "1":
                precio = memoriaRam8gb;
                break;
            case "2":
                precio = memoriaRam16gb;
                break;
            case "3":
                precio = memoriaRam32gb;
                break;
            case "4":
                console.log(noAgregar);
                seguirComprandoMemoriaRam = false;
                precio = 0;
                break;
            default:
                alert("Opción incorrecta. Por favor, seleciona una opcion correcta.");
                continue;
        }

        total += precio;
        console.log(" Precio de la Memoria Ram elegida es de: $" + precio)
        console.log(" Total de la compra: $" + total);

        seguirComprandoMemoriaRam = confirm("Continuemos con el siguiente componente ");
        if (!seguirComprandoMemoriaRam) {
            alert("¿Deseas agregar otra Memoria ram?")
        }

    } while (!seguirComprandoMemoriaRam);
}
ComprandoMemoriaRam();

const ComprandoPlacaDeVideo = () => {
    let PlacaDeVideo = 0;
    const placaVideoBasica = 97000;
    const placaVideoPro = 157000;
    const placaVideoGaming = 315000;
    let seguirComprandoPlacaDeVideo = true;

    do {
        PlacaDeVideo = prompt("Placa de Video: 1)Basica 2)Pro 3)Gaming 4)No agregar");

        switch (PlacaDeVideo) {
            case "1":
                precio = placaVideoBasica;
                break;
            case "2":
                precio = placaVideoPro;
                break;
            case "3":
                precio = placaVideoGaming;
                break;
            case "4":
                console.log(noAgregar);
                seguirComprandoPlacaDeVideo = false;
                precio = 0;
                break;
            default:
                alert("Opción incorrecta. Por favor, seleciona una opcion correcta.");
                continue;
        }

        total += precio;
        console.log(" Precio de la Placa de Video elegida es de: $" + precio)
        console.log(" Total de la compra: $" + total);

        seguirComprandoPlacaDeVideo = confirm("Continuemos con el siguiente componente ");
        if (!seguirComprandoPlacaDeVideo) {
            alert("¿Deseas agregar otra Placa de Video?")
        }

    } while (!seguirComprandoPlacaDeVideo);
}
ComprandoPlacaDeVideo();

const ComprandoAlmacenamiento = () => {
    let Almacenamiento = 0;
    const discosolido120gb = 16500;
    const discosolido480gb = 29300;
    const discosolido1Tb = 40700;
    let seguirComprandoAlmacenamiento = true;

    do {
        Almacenamiento = prompt("Disco Solido: 1)120gb 2)480gb 3)1tb 4)No agregar");

        switch (Almacenamiento) {
            case "1":
                precio = discosolido120gb;
                break;
            case "2":
                precio = discosolido480gb;
                break;
            case "3":
                precio = discosolido1Tb;
                break;
            case "4":
                console.log(noAgregar);
                seguirComprandoAlmacenamiento = false;
                precio = 0;
                break;
            default:
                alert("Opción incorrecta. Por favor, seleciona una opcion correcta.");
                continue;
        }

        total += precio;
        console.log(" Precio del disco de almacenamiento elegido es de: $" + precio)
        console.log(" Total de la compra: $" + total);

        seguirComprandoAlmacenamiento = confirm("Continuemos con el siguiente componente");
        if (!seguirComprandoAlmacenamiento) {
            alert("¿Deseas agregar otro Disco de Almacenamiento?")
        }

    } while (!seguirComprandoAlmacenamiento);
}
ComprandoAlmacenamiento();

const ComprandoFuentes = () => {
    let Fuentes = 0;
    const fuenteBasica = 31200;
    const fuentePro = 67500;
    const fuenteMaster = 133200;
    let seguirComprandoFuentes = true;

    do {
        Fuentes = prompt("Fuente de Poder: 1)Basica 2)Pro 3)Master 4)No agregar");

        switch (Fuentes) {
            case "1":
                precio = fuenteBasica;
                break;
            case "2":
                precio = fuentePro;
                break;
            case "3":
                precio = fuenteMaster;
                break;
            case "4":
                console.log(noAgregar);
                seguirComprandoFuentes = false;
                precio = 0;
                break;
            default:
                alert("Opción incorrecta. Por favor, seleciona una opcion correcta.");
                continue;
        }

        total += precio;
        console.log(" Precio de la Fuente de poder elegida es de: $" + precio)
        console.log(" Total de la compra: $" + total);

        seguirComprandoFuentes = confirm("Continuemos con el siguiente componente");
        if (!seguirComprandoFuentes) {
            alert("¿Deseas agregar otra Fuente de poder?")
        }

    } while (!seguirComprandoFuentes);
}
ComprandoFuentes();

const ComprandoGabinetes = () => {
    let Gabinetes = 0;
    const gabineteComun = 36300;
    const gabinetePro = 105300;
    const gabineteMaster = 216000;
    let seguirComprandoGabinetes = true;

    do {
        Gabinetes = prompt("Gabinete: 1)Basico 2)Pro 3)Master 4)No agregar");

        switch (Gabinetes) {
            case "1":
                precio = gabineteComun;
                break;
            case "2":
                precio = gabinetePro;
                break;
            case "3":
                precio = gabineteMaster;
                break;
            case "4":
                console.log(noAgregar);
                seguirComprandoGabinetes = false;
                precio = 0;
                break;
            default:
                alert("Opción incorrecta. Por favor, seleciona una opcion correcta.");
                continue;
        }

        total += precio;
        console.log(" Precio del Gabinete elegido es de: $" + precio)
        console.log(" Total de la compra: $" + total);

        seguirComprandoGabinetes = confirm("La eleccion de todos los componentes para el armado de su PC a finalizado.");
        if (!seguirComprandoGabinetes) {
            alert("¿Deseas agregar otro Gabinete?")
        }

    } while (!seguirComprandoGabinetes);
}
ComprandoGabinetes();


const FinalizarCompra = () => {
    let PrecioFinal = 0;
    const Descefectivo = 0.80;
    const DescUnacuota = 0.90;
    const DescTrescuotas = 1;
    let TerminarCompra = true;

    do {
        TerminarCompra = prompt("Como deseas pagar: 1)Efectivo Desc.(20%) 2)Una cuota. Desc.(10%) 3)Tres cuotas sin intereses");

        switch (TerminarCompra) {
            case "1":
                PrecioFinal = total * Descefectivo;
                break;
            case "2":
                PrecioFinal = total * DescUnacuota;
                break;
            case "3":
                precioFinal = total * DescTrescuotas;
                break;
            case "4":
                console.log(noAgregar);
                TerminarCompra = false;
                precio = 0;
                break;
            default:
                alert("Opción incorrecta. Por favor, seleciona una opcion correcta.");
                continue;
        }

        alert("El total de su compra es de " + PrecioFinal + "$ .Ahora sera transferido a la seccion de pagos y envios");
        console.log("El total de su compra es de :" + PrecioFinal + "$ .Ahora sera transferido a la seccion de pagos y envios");

        TerminarCompra = confirm("Gracias por elegirnos");
        if (TerminarCompra) {
            break;
        }

    } while (!TerminarCompra);
}
FinalizarCompra();
