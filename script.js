function mostrarEspecificaciones(productoId) {
    const especificacionesContainer = document.getElementById(`especificaciones-${productoId}`);
    especificacionesContainer.innerHTML = `
        <p>Especificaciones del producto ${productoId}:</p>
        <ul>
            <li>Material: Algodon</li>
            <li>Dimensiones: 20 pulgadas</li>
            <li>Color: Azul, Rosado,Cafe </li>
            <!-- Agrega más detalles aquí -->
        </ul>
    `;
}

function mostrarAgradecimiento(button) {
    button.textContent = "¡Gracias por su compra!";
    button.disabled = true;
}
