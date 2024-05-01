async function comparacion() {
    try {
        // Obtener la lista de productos en el carrito y la lista completa de productos
        const productosEnCarrito = await obtenercarrito();
        const todosLosProductos = await cargar_id();

        // Realizar la comparación buscando si los IDs de los productos en el carrito están en la lista completa de productos
        const coincidencias = productosEnCarrito.filter(productoEnCarrito =>
            todosLosProductos.find(producto => producto.id === productoEnCarrito.productId)
        );

        if (coincidencias.length > 0) {
            console.log("Productos en el carrito encontrados:", coincidencias);
        } else {
            console.log("Ningún producto en el carrito");
        }
    } catch (error) {
        console.log("Error en la comparación:", error);
        throw error;
    }
}

export { comparacion };

async function obtenercarrito() {
    try {
        const resp = await fetch('https://fakestoreapi.com/carts/user/2')
        const dt = await resp.json()
        // Devolver la lista de productos en el carrito
        return dt[0].products;
    } catch (error) {
        console.log("Error en obtener el carrito:", error);
        throw error;
    }
}

export { obtenercarrito };

async function cargar_id() {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        // Devolver la lista completa de productos
        return data;
    } catch (error) {
        console.log("Error en obtener los productos:", error);
        throw error;
    }
}
