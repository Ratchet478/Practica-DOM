import { products as productos } from './data.js'

let main = document.querySelector('main');
productos.forEach(function(producto) {
    main.appendChild(generarProducto(producto));
})
function generarEstrellas(rating) {
    const estrellasTotales = 5;
    const estrellasLlenas = Math.floor(rating);
    return '★'.repeat(estrellasLlenas) + '☆'.repeat(estrellasTotales - estrellasLlenas);
}

function generarProducto(producto) {
    const article = document.createElement('article');
    article.className = 'product-card';
    
    article.innerHTML = `
        <img src="${producto.image}" alt="${producto.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${producto.name}</h3>
            <div class="product-rating">
                <span class="stars">${generarEstrellas(producto.stars)}</span>
                <span class="reviews">(${producto.reviews} opiniones)</span>
            </div>
            <div class="product-price">${producto.price} €</div>
            <div class="product-seller">Vendido por: ${producto.seller}</div>
            <button class="add-to-cart">Añadir al carrito</button>
        </div>
    `;

    return article;
}