// Entrega N°1

//El usuario va a manejar un arreglo que va a representar las cantidades de una serie de productos con sus especificaciones y el mismo va a poder ir sumando o agregar uno nuevo(como todavia no vimos clases voy a crear un objeto literal y siempre se va agregar ese mismo producto) aumentando la cantidad en stock. Tambien va a poder eliminar productos (decrementar la cantidad), buscar un producto en especifico y calcular la cantidad total de productos en stock.

//Voy a hacer uso de la mayor cantidad de funciones aprendidas.

// OBJETOS LITERALES

let producto1 = {
    nombreProducto : "Remeras",
    cant : 1,
};

let producto2 = {
    nombreProducto : "Camperas",
    cant : 1,
};

let producto3 = {
    nombreProducto : "Zapatos",
    cant : 1,
};

//  FUNCIONES

function calcularStockTotal(productos){
    let s=0;
    for(let i of productos){
        s += i.cant;
    }
    return s;
}

function buscarProducto(productos){
    let opcion;
    let prod;
    let bool = true;
    if(productos.length == 4){
        opcion = prompt(`
            Que producto queres buscar?
            1. Remeras
            2. Camperas
            3. Zapatos
            4. Reloj
            `);
        switch(opcion){
            case "1":
                prod = "Remeras";
            break;
            case "2":
                prod = "Camperas";
            break;
            case "3":
                prod = "Zapatos";
            break;
            case "4":
                prod = "Reloj";
            break;
            default:
                alert(`Valor no valido`);
                bool = false;
        };
    }else{
        opcion = prompt(`
            Que producto queres buscar?
            1. Remeras
            2. Camperas
            3. Zapatos
            `);
        switch(opcion){
            case "1":
                prod = "Remeras";
            break;
            case "2":
                prod = "Camperas";
            break;
            case "3":
                prod = "Zapatos";
            break;
            default:
                alert(`Valor no valido.`)
                bool = false;
        };
    }
    if(bool){
        const encontrar = productos.find(producto => producto.nombreProducto === prod);     //devuelve una referencia al objeto

        if(encontrar){
            alert(`Producto encontrado:
                Producto: ${encontrar.nombreProducto}
                Cantidad: ${encontrar.cant}`)
        }else{
            alert(`Producto no encontrado.`)
        }
    }
}

function quitarProducto(productos){
    let opcion;
    let prod;
    let bool = true;
    let i=0;
    if(productos.length == 4){
        opcion = prompt(`
            Que producto queres buscar?
            1. Remeras
            2. Camperas
            3. Zapatos
            4. Reloj
            `);
        switch(opcion){
            case "1":
                prod = "Remeras";
            break;
            case "2":
                prod = "Camperas";
            break;
            case "3":
                prod = "Zapatos";
            break;
            case "4":
                prod = "Reloj";
            break;
            default:
                alert(`Valor no valido`);
                bool = false;
        };
    }else{
        opcion = prompt(`
            Que producto queres buscar?
            1. Remeras
            2. Camperas
            3. Zapatos
            `);
        switch(opcion){
            case "1":
                prod = "Remeras";
            break;
            case "2":
                prod = "Camperas";
            break;
            case "3":
                prod = "Zapatos";
            break;
            default:
                alert(`Valor no valido.`)
                bool = false;
        };
    }
    while(i<productos.length && productos[i].nombreProducto != prod){i++};
    
    if(productos[i].cant >0)
        productos[i].cant--;

    alert(`Producto actualizado:
        Producto: ${productos[i].nombreProducto}
        Cantidad: ${productos[i].cant}`);
}

function cargar(productos,prod){

    let producto1 = {
        nombreProducto : "Remeras",
        cant : 1,
    };
    
    let producto2 = {
        nombreProducto : "Camperas",
        cant : 1,
    };
    
    let producto3 = {
        nombreProducto : "Zapatos",
        cant : 1,
    };
    let productoNuevo = {
        nombreProducto : "Reloj",
        cant: 1,
    };
    
    const encontrar = productos.find(producto => producto.nombreProducto === prod); //devuelve una referencia al objeto

    if(encontrar){
        encontrar.cant++;
        alert(`Actualizacion:
            Producto: ${encontrar.nombreProducto}
            Cantidad: ${encontrar.cant}`)
    }else{
        productos.push(productoNuevo);
        alert(`Producto agregado:
            Producto: Reloj
            Cantidad: 1`)
    }

}

function agregarProducto(productos){
    const opcion = prompt(`
        Que producto vas a cargar?
        1. Remeras
        2. Camperas
        3. Zapatos
        4. Agregar un nuevo producto
        `);

    switch(opcion){
        case "1":
            cargar(productos,"Remeras");
        break;
        case "2":
            cargar(productos,"Camperas");
        break;
        case "3":
            cargar(productos,"Zapatos");
        break;
        case "4":
            cargar(productos,"Reloj");
        break;
        default:
            alert("Valor no valido.")
    };
}

//                          MAIN

let productos = [];     //arreglo de productos inicialmente vacio
let control;

// cargo el arreglo de productos

productos.unshift(producto1,producto2,producto3);

do{
    control = prompt(`Tienes las siguientes opciones:
        1. Sumar un producto
        2. Eliminar un producto
        3. Buscar un producto
        4. Calcular el total de productos`);

    if(control != null && control != ""){ //el parseInt no es necesario pero lo pongo solamente para implementarlo
        switch(parseInt(control)){
            case 1 :
                agregarProducto(productos);
            break;
            case 2:
                quitarProducto(productos);
            break;
            case 3:
                buscarProducto(productos);
            break;
            case 4:
                // Voy a hacer que retorne un valor asi implemento un return
                alert(`Actualmente hay un stock de...
                    ${calcularStockTotal(productos)} productos!!!`)
            break;
            default:
                alert(`Por favor ingrese un valor valido...`);
        };
    }
}while(control != null && control !== "");

alert("Fin del programa!!");



