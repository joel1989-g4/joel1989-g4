let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar la lista antes de agregar los elementos

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

function generarRecibo() {
    const detalles = carrito.map(item => `${item.producto} - $${item.precio}`).join('<br>');
    document.getElementById('detalle-recibo').innerHTML = detalles;
    document.getElementById('total-recibo').innerText = total.toFixed(2);
    document.getElementById('recibo').style.display = 'block';
}

function cerrarRecibo() {
    document.getElementById('recibo').style.display = 'none';
    carrito = [];
    total = 0;
    actualizarCarrito();
}
