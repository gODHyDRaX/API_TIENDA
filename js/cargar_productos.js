function cargar_productos(listado_de_productos){
let main = document.querySelector(".main")
listado_de_productos.forEach(elemento => {
    let cada_item = document.createElement("div")
    cada_item.classList.add("tarjeta")
    let short_text = elemento.title.split(' ').slice(0, 5).join(' ');
    cada_item.innerHTML = `
    <h1 class="title">${short_text}</h1>
    <div class="img">
    <img src="${elemento.image}" alt="" >
    </div>
    <span class="price">$${elemento.price}</span>
    <div class="botn" id="${elemento.id}">Comprar</div>
    `
    main.appendChild(cada_item)
});
}
export {cargar_productos}