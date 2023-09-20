class Producto {
    constructor(id, nombre, tipo, descripcion, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const productos = [
    {
        categoria: "Equipos",
        subcategorias: [
            {
                nombre: "Desktops",
                productos: [
                    new Producto(1, "PC Armada 1", "Desktops", "Intel Core I3 10100F 8GB 240GB SSD GT 210 WIFI", 259000, 0),
                    new Producto(2, "Pc Armada 2", "Desktops", "AMD Ryzen 3 4100 16GB 480GB SSD GT 210", 317000, 0),
                    new Producto(3, "Pc Armada 3", "Desktops", "Intel Core I5 11400F 16GB 480GB SSD RTX 3060", 860000, 0),
                ],
            },
            {
                nombre: "Notebooks",
                productos: [
                    new Producto(4, "Notebook Noblex N14X3000 14", "Notebooks", "Intel I3 1115G4 8GB Ram 256GB SSD W11", 315000, 0),
                    new Producto(5, "Notebook Lenovo V14-ITL 14", "Notebooks", "Intel Core I5 1135G7 8GB 256GB SSD", 455000, 0),
                    new Producto(6, "Notebook HP 15-DY2054LA", "Notebooks", "Intel Core I5 1135G7 8GB SSD 256GB 15.6 W11", 613000, 0),
                ],
            },
        ],
    },
    {
        categoria: "Componentes",
        subcategorias: [
            {
                nombre: "Procesadores",
                productos: [
                    new Producto(7, "Micro Intel I3", "Procesadores", "Intel I3-10105F 4.4Ghz 6Mb S.1200", 75300, 0),
                    new Producto(8, "Micro Intel I5", "Procesadores", "Intel Core I5 11600K ROCKET LAKE 6/12 4.90GHZ 12MB LGA1200", 248000, 0),
                    new Producto(9, "Micro Intel I7", "Procesadores", "Intel Core i7 13700F 5.2GHz Turbo Socket 1700", 374000, 0),
                ],
            },
            {
                nombre: "Motherboards",
                productos: [
                    new Producto(10, "Mother Asus", "Motherboards", "Prime H610M-K DDR4 S1700", 89100, 0),
                    new Producto(11, "Mother GIGABYTE", "Motherboards", "H610M S2H DDR4 S1700", 105400, 0),
                    new Producto(12, "Mother MSI", "Motherboards", "MAG B760M MORTAR DDR4 S1700", 168700, 0),
                ],
            },
            {
                nombre: "Refrigeracion",
                productos: [
                    new Producto(13, "Cooler CPU", "Cooler", "ID-Cooling SE-902-SD V2", 9300, 0),
                    new Producto(14, "Cooler Darkflash", "Cooler", "Darkair White Fixed RGB", 24700, 0),
                    new Producto(15, "Cooler CPU Master", "Cooler", "HYPER 212 TURBO ARGB", 49800, 0),
                ],
            },
            {
                nombre: "MemoriasRam",
                productos: [
                    new Producto(16, "Ram OEM", "Memoria", "4GB 3200 Mhz DDR4 BULK", 9800, 0),
                    new Producto(17, "Ram Corsair", "Memoria", "DDR4 8GB 2666Mhz Vengeance LPX Black", 23300, 0),
                    new Producto(18, "Ram Patriot", "Memoria", "Viper DDR4 16GB 3200MHz RGB", 46000, 0),
                ],
            },
            {
                nombre: "PlacasDeVideo",
                productos: [
                    new Producto(19, "Placa de Video Nvidia", "Placas de video", "Geforce MSI GT 210 1GB DDR3 Low Profile", 49400, 0),
                    new Producto(20, "Placa de Video ASUS", "Placas de video", "GeForce GTX 1650 4GB GDDR6 Phoenix EVO OC", 159200, 0),
                    new Producto(21, "Placa de Video Pny", "Placas de video", "Geforce RTX 4070 Verto Dual Fan 12GB GDDR6X", 705200, 0),
                ],
            },
            {
                nombre: "Almacenamiento",
                productos: [
                    new Producto(22, "Disco Solido SSD", "Almacenamiento", "120GB Adata SU650 Ultimate SATA III", 13000, 0),
                    new Producto(23, "Disco Solido SSD Kingston", "Almacenamiento", "480GB A400 SATA III", 23800, 0),
                    new Producto(24, "Disco Solido SSD Team", "Almacenamiento", "1TB GX2 530MB/s", 45200, 0),
                ],
            },
            {
                nombre: "Fuentes",
                productos: [
                    new Producto(25, "Fuente LNZ", "Fuente de poder", "650W LNZ XT650-PS 80% Eficiencia", 31500, 0),
                    new Producto(26, "Fuente Deepcool", "Fuente de poder", "480GB A400 SATA III", 51800, 0),
                    new Producto(27, "Fuente Thermaltake", "Fuente de poder", "750W Thoughpower GF1 80 PLUS Gold Modular", 79000, 0),
                ],
            },
            {
                nombre: "Gabinetes",
                productos: [
                    new Producto(28, "Gabinete BRB", "Gabinetes", "SBP-100 - 500W Gen", 33700, 0),
                    new Producto(29, "Gabinete Masterbox", "Gabinetes", "MB530P ARGB 3xVidrios Templados 3x120mm ARGB Fans atx", 96100, 0),
                    new Producto(30, "Gabinete Corsair", "Gabinetes", "465X RGB iCue Smart Mid Tower White", 12900, 0),
                ],
            },
            {
                nombre: "Perifericos",
                productos: [
                    new Producto(31, "Mouse Logitech", "Mouse", "M90 Black", 5640, 0),
                    new Producto(32, "Mouse MSI Clutch", "Mouse", "GM41 RGB Lightweight Sensor PIXART 3389 16000DPI", 21000, 0),
                    new Producto(33, "Teclado Mecánico TDagger", "Teclado", "T-TGK310 Rainbow Switch Blue", 24600, 0),
                    new Producto(34, "Teclado Mecanico Redragon", "Teclado", "K550 Yama Black RGB", 50100, 0),
                    new Producto(35, "Auricular Redragon", "Auriculares", "H260 Hylas White RGB", 19000, 0),
                    new Producto(36, "Auriculares HyperX", "Auriculares", "Gaming Cloud II Wireless", 92400, 0),
                ],
            },
            {
                nombre: "Monitores",
                productos: [
                    new Producto(37, "Monitor Led Gfast", "Monitores", "19.5 pulgadas T-195 VGAHDMI", 64.000, 0),
                    new Producto(38, "Monitor Samsung", "Monitores", "24 pulgadas Curvo F390 Full HD FreeSync", 103000, 0),
                    new Producto(39, "Monitor Led Asus", "Monitores", "LED TN 24 VG248QG-J FHD 165Hz 0.5Ms Freesync Gsync", 215000, 0),
                ],
            },
            {
                nombre: "Estabilizadores",
                productos: [
                    new Producto(40, "Estabilizador Desktop", "Estabilizadores", "TCA-2000N LYONN AVR", 12800, 0),
                    new Producto(41, "UPS TRV", "UPS", "650 C/USB", 46000, 0),
                    new Producto(42, "UPS APC", "UPS", "BACK EASY BV 1000VA", 109000, 0),
                ],
            },
            {
                nombre: "SistemaOperativo",
                productos: [
                    new Producto(43, "Windows 11 Pro", "Sistema Operativo", "64B OEM SISTEMA NUEVO FISICO", 63000, 0),
                ],
            }
        ],
    }
];

