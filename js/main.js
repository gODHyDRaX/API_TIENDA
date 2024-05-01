import { cargar_productos } from "./cargar_productos.js"
import { cargar_categorias } from "./cargar_categorias.js"
import { comparacion } from "./cargar_carrito.js"

let root = document.querySelector(".root")
root.innerHTML = `
    <nav class="nav">
    <span class="material-symbols-outlined">
menu
</span>
    <div class="shop">
        <span class="material-symbols-outlined">
shopping_cart
</span>
    </div>
    </nav>
    <section class="section"></section>
    <div class="main"></div>
    <footer class="footer"></footer>
`

async function obtenerProductos(){
    try{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        cargar_productos(data);
        
        
    }
    catch(error){
        console.log("Error en obtener los productos: ", error);
    }
}
    obtenerProductos();
    cargar_categorias();

 //carrito 

 let carrito = document.querySelector(".shop")
 carrito.addEventListener("click", ()=>{
    comparacion()
 });
 
 export {obtenerProductos}
