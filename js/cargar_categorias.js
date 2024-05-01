function cargar_categorias(){
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(categorias => {
            imprimi_categorias(categorias)
        })
}
function imprimi_categorias(listado_categorias){
    let section = document.querySelector(".section")
    listado_categorias.forEach(elemento => {
        let div = document.createElement("div");
        div.classList.add("categoria");
        div.innerHTML = elemento;
        section.appendChild(div)
    });

}
export {cargar_categorias}  