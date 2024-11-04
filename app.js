<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Remitente y Destinatario</title>
</head>
<body>

    <div class="section">
        <h2>Datos del Remitente</h2>
        <label for="remitente-nombre">Nombre:</label>
        <input type="text" id="remitente-nombre" name="remitente-nombre" required>

        <label for="remitente-ciudad">Ciudad:</label>
        <input type="text" id="remitente-ciudad" name="remitente-ciudad" required>

        <label for="remitente-estado">Estado:</label>
        <input type="text" id="remitente-estado" name="remitente-estado" required>

        <label for="remitente-domicilio">Domicilio:</label>
        <input type="text" id="remitente-domicilio" name="remitente-domicilio" required>

        <label for="remitente-codigo-postal">Código Postal:</label>
        <input type="text" id="remitente-codigo-postal" name="remitente-codigo-postal" required>

        <label for="remitente-telefono">Teléfono:</label>
        <input type="text" id="remitente-telefono" name="remitente-telefono" required>
    </div>

    <div class="section">
        <h2>Datos del Destinatario</h2>
        <label for="destinatario-nombre">Nombre:</label>
        <input type="text" id="destinatario-nombre" name="destinatario-nombre" required>

        <label for="destinatario-ciudad">Ciudad:</label>
        <input type="text" id="destinatario-ciudad" name="destinatario-ciudad" required>

        <label for="destinatario-estado">Estado:</label>
        <input type="text" id="destinatario-estado" name="destinatario-estado" required>

        <label for="destinatario-domicilio">Domicilio:</label>
        <input type="text" id="destinatario-domicilio" name="destinatario-domicilio" required>

        <label for="destinatario-codigo-postal">Código Postal:</label>
        <input type="text" id="destinatario-codigo-postal" name="destinatario-codigo-postal" required>

        <label for="destinatario-telefono">Teléfono:</label>
        <input type="text" id="destinatario-telefono" name="destinatario-telefono" required>
    </div>

    <div class="section">
        <h2>Datos de la Mercancía</h2>
        <label for="mercancia-descripcion">Descripción:</label>
        <input type="text" id="mercancia-descripcion" name="mercancia-descripcion" required>

        <label for="mercancia-peso">Peso:</label>
        <input type="text" id="mercancia-peso" name="mercancia-peso" required>

        <label for="mercancia-largo">Largo:</label>
        <input type="text" id="mercancia-largo" name="mercancia-largo" required>

        <label for="mercancia-ancho">Ancho:</label>
        <input type="text" id="mercancia-ancho" name="mercancia-ancho" required>

        <label for="mercancia-alto">Alto:</label>
        <input type="text" id="mercancia-alto" name="mercancia-alto" required>

                <label for="mercancia-fecha-salida">Fecha de Salida (dd/mm/yyyy):</label>
        <input type="text" id="mercancia-fecha-salida" name="mercancia-fecha-salida" placeholder="dd/mm/yyyy" required>

        <label for="mercancia-fecha-llegada">Fecha de Llegada (dd/mm/yyyy):</label>
        <input type="text" id="mercancia-fecha-llegada" name="mercancia-fecha-llegada" placeholder="dd/mm/yyyy" required>

        <label for="mercancia-precio">Precio a Cobrar:</label>
        <input type="text" id="mercancia-precio" name="mercancia-precio" required>

        <button id="registrar-btn">Registrar</button>
    </div>

    <table>
        <thead>
            <tr>
                <th>Remitente</th>
                <th>Destinatario</th>
                <th>Mercancía</th>
            </tr>
        </thead>
        <tbody id="tabla-datos">
            <!-- Aquí se agregarán las filas con los datos -->
        </tbody>
    </table>

    <script>
        document.getElementById('registrar-btn').addEventListener('click', function() {
            // Captura los datos del remitente
            const remitenteNombre = document.getElementById('remitente-nombre').value;
            const remitenteCiudad = document.getElementById('remitente-ciudad').value;
            const remitenteEstado = document.getElementById('remitente-estado').value;
            const remitenteDomicilio = document.getElementById('remitente-domicilio').value;
            const remitenteCodigoPostal = document.getElementById('remitente-codigo-postal').value;
            const remitenteTelefono = document.getElementById('remitente-telefono').value;

            // Captura los datos del destinatario
            const destinatarioNombre = document.getElementById('destinatario-nombre').value;
            const destinatarioCiudad = document.getElementById('destinatario-ciudad').value;
            const destinatarioEstado = document.getElementById('destinatario-estado').value;
            const destinatarioDomicilio = document.getElementById('destinatario-domicilio').value;
            const destinatarioCodigoPostal = document.getElementById('destinatario-codigo-postal').value;
            const destinatarioTelefono = document.getElementById('destinatario-telefono').value;

            // Captura los datos de la mercancía
            const mercanciaDescripcion = document.getElementById('mercancia-descripcion').value;
            const mercanciaPeso = document.getElementById('mercancia-peso').value;
            const mercanciaLargo = document.getElementById('mercancia-largo').value;
            const mercanciaAncho = document.getElementById('mercancia-ancho').value;
            const mercanciaAlto = document.getElementById('mercancia-alto').value;
            const mercanciaFechaSalida = document.getElementById('mercancia-fecha-salida').value;
            const mercanciaFechaLlegada = document.getElementById('mercancia-fecha-llegada').value;
            const mercanciaPrecio = document.getElementById('mercancia-precio').value;

            // Crea una nueva fila en la tabla
            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `
                <td>${remitenteNombre}, ${remitenteCiudad}, ${remitenteEstado}, ${remitenteDomicilio}, ${remitenteCodigoPostal}, ${remitenteTelefono}</td>
                <td>${destinatarioNombre}, ${destinatarioCiudad}, ${destinatarioEstado}, ${destinatarioDomicilio}, ${destinatarioCodigoPostal}, ${destinatarioTelefono}</td>
                <td>${mercanciaDescripcion}, Peso: ${mercanciaPeso}, Dimensiones: ${mercanciaLargo}x${mercanciaAncho}x${mercanciaAlto}, Fechas: ${mercanciaFechaSalida} a ${mercanciaFechaLlegada}, Precio: ${mercanciaPrecio}</td>
            `;

            // Agrega la nueva fila a la tabla
            document.getElementById('tabla-datos').appendChild(nuevaFila);

            // Limpia los campos del formulario
            document.querySelectorAll('input').forEach(input => input.value = '');
        });
    </script>
</body>
</html>