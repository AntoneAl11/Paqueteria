document.addEventListener('DOMContentLoaded', () => {
    const tablaDatos = document.getElementById('tabla-datos');

    document.getElementById('registrar-btn').addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del botón

        // Captura los datos de la mercancía
        const datosMercancia = {
            descripcion: document.getElementById('mercancia-descripcion').value,
            peso: document.getElementById('mercancia-peso').value,
            largo: document.getElementById('mercancia-largo').value,
            ancho: document.getElementById('mercancia-ancho').value,
            alto: document.getElementById('mercancia-alto').value,
            fechaSalida: document.getElementById('mercancia-fecha-salida').value,
            fechaLlegada: document.getElementById('mercancia-fecha-llegada').value,
            precio: document.getElementById('mercancia-precio').value,
        };

        // Captura los datos del remitente
        const datosRemitente = {
            nombre: document.getElementById('remitente-nombre').value,
            ciudad: document.getElementById('remitente-ciudad').value,
            estado: document.getElementById('remitente-estado').value,
            domicilio: document.getElementById('remitente-domicilio').value,
            codigoPostal: document.getElementById('remitente-codigo-postal').value,
            telefono: document.getElementById('remitente-telefono').value
        };

        // Captura los datos del destinatario
        const datosDestinatario = {
            nombre: document.getElementById('destinatario-nombre').value,
            ciudad: document.getElementById('destinatario-ciudad').value,
            estado: document.getElementById('destinatario-estado').value,
            domicilio: document.getElementById('destinatario-domicilio').value,
            codigoPostal: document.getElementById('destinatario-codigo-postal').value,
            telefono: document.getElementById('destinatario-telefono').value
        };

        // Crea una nueva fila en la tabla
        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${datosRemitente.nombre}</td>
            <td>${datosRemitente.ciudad}</td>
            <td>${datosRemitente.estado}</td>
            <td>${datosRemitente.domicilio}</td>
            <td>${datosRemitente.codigoPostal}</td>
            <td>${datosRemitente.telefono}</td>
            <td>${datosDestinatario.nombre}</td>
            <td>${datosDestinatario.ciudad}</td>
            <td>${datosDestinatario.estado}</td>
            <td>${datosDestinatario.domicilio}</td>
            <td>${datosDestinatario.codigoPostal}</td>
            <td>${datosDestinatario.telefono}</td>
            <td>${datosMercancia.descripcion}</td>
            <td>${datosMercancia.peso}</td>
            <td>${datosMercancia.largo}</td>
            <td>${datosMercancia.ancho}</td>
            <td>${datosMercancia.alto}</td>
            <td>${datosMercancia.fechaSalida}</td>
            <td>${datosMercancia.fechaLlegada}</td>
            <td>${datosMercancia.precio}</td>
        `;

        // Añade la nueva fila a la tabla
        tablaDatos.appendChild(nuevaFila);

        // Limpia los campos del formulario después de registrar
        document.getElementById('mercancia-descripcion').value = '';
        document.getElementById('mercancia-peso').value = '';
        document.getElementById('mercancia-largo').value = '';
        document.getElementById('mercancia-ancho').value = '';
        document.getElementById('mercancia-alto').value = '';
        document.getElementById('mercancia-fecha-salida').value = '';
        document.getElementById('mercancia-fecha-llegada').value = '';
        document.getElementById('mercancia-precio').value = '';
    });
});