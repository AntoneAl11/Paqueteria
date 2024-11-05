document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        try {
            // Obtener valores de los campos
            const remitenteNombre = document.getElementById('remitenteNombre').value;
            const remitenteCiudad = document.getElementById('remitenteCiudad').value;
            const remitenteEstado = document.getElementById('remitenteEstado').value;
            const remitenteDomicilio = document.getElementById('remitenteDomicilio').value;
            const remitenteCP = document.getElementById('remitenteCP').value;
            const remitenteTelefono = document.getElementById('remitenteTelefono').value;

            const destinatarioNombre = document.getElementById('destinatarioNombre').value;
            const destinatarioCiudad = document.getElementById('destinatarioCiudad').value;
            const destinatarioEstado = document.getElementById('destinatarioEstado').value;
            const destinatarioDomicilio = document.getElementById('destinatarioDomicilio').value;
            const destinatarioCP = document.getElementById('destinatarioCP').value;
            const destinatarioTelefono = document.getElementById('destinatarioTelefono').value;

            const mercanciaDescripcion = document.getElementById('mercanciaDescripcion').value;
            const mercanciaPeso = document.getElementById('mercanciaPeso').value;
            const mercanciaLargo = document.getElementById('mercanciaLargo').value;
            const mercanciaAncho = document.getElementById('mercanciaAncho').value;
            const mercanciaAlto = document.getElementById('mercanciaAlto').value;
            const mercanciaFechaSalida = document.getElementById('mercanciaFechaSalida').value;
            const mercanciaFechaLlegada = document.getElementById('mercanciaFechaLlegada').value;
            const mercanciaPrecio = document.getElementById('mercanciaPrecio').value;

            // Validar que los campos no estén vacíos
            if (!remitenteNombre || !destinatarioNombre || !mercanciaDescripcion) {
                throw new Error("Por favor, completa todos los campos obligatorios.");
            }

            // Crear un nuevo registro
            const nuevoRegistro = {
                remitente: {
                    nombre: remitenteNombre,
                    ciudad: remitenteCiudad,
                    estado: remitenteEstado,
                    domicilio: remitenteDomicilio,
                    cp: remitenteCP,
                    telefono: remitenteTelefono
                },
                destinatario: {
                    nombre: destinatarioNombre,
                    ciudad: destinatarioCiudad,
                    estado: destinatarioEstado,
                    domicilio: destinatarioDomicilio,
                    cp: destinatarioCP,
                    telefono: destinatarioTelefono
                },
                mercancia: {
                    descripcion: mercanciaDescripcion,
                    peso: mercanciaPeso,
                    largo: mercanciaLargo,
                    ancho: mercanciaAncho,
                    alto: mercanciaAlto,
                    fechaSalida: mercanciaFechaSalida,
                    fechaLlegada: mercanciaFechaLlegada,
                    precio: mercanciaPrecio
                }
            };

            // Agregar el nuevo registro a la tabla
            const tablaRegistro = document.getElementById('tablaRegistro').getElementsByTagName('tbody')[0];
            const nuevaFila = document.createElement('tr');

            nuevaFila.innerHTML = `
                <td>${nuevoRegistro.remitente.nombre}</td>
                <td>${nuevoRegistro.remitente.ciudad}</td>
                <td>${nuevoRegistro.remitente.estado}</td>
                <td>${nuevoRegistro.remitente.domicilio}</td>
                <td>${nuevoRegistro.remitente.cp}</td>
                <td>${nuevoRegistro.remitente.telefono}</td>
                <td>${nuevoRegistro.destinatario.nombre}</td>
                <td>${nuevoRegistro.destinatario.ciudad}</td>
                <td>${nuevoRegistro.destinatario.estado}</td>
                <td>${nuevoRegistro.destinatario.domicilio}</td>
                <td>${nuevoRegistro.destinatario.cp}</td>
                <td>${nuevoRegistro.destinatario.telefono}</td>
                <td>${nuevoRegistro.mercancia.descripcion}</td>
                <td>${nuevoRegistro.mercancia.peso}</td>
                <td>${nuevoRegistro.mercancia.largo}</td>
                <td>${nuevoRegistro.mercancia.ancho}</td>
                <td>${nuevoRegistro.mercancia.alto}</td>
                <td>${nuevoRegistro.mercancia.fechaSalida}</td>
                <td>${nuevoRegistro.mercancia.fechaLlegada}</td>
                 <td>${nuevoRegistro.mercancia.precio}</td>
            `;

            // Agregar la nueva fila a la tabla
            tablaRegistro.appendChild(nuevaFila);

            // Limpiar los campos del formulario después de agregar el registro
            document.getElementById('remitenteNombre').value = '';
            document.getElementById('remitenteCiudad').value = '';
            document.getElementById('remitenteEstado').value = '';
            document.getElementById('remitenteDomicilio').value = '';
            document.getElementById('remitenteCP').value = '';
            document.getElementById('remitenteTelefono').value = '';
            document.getElementById('destinatarioNombre').value = '';
            document.getElementById('destinatarioCiudad').value = '';
            document.getElementById('destinatarioEstado').value = '';
            document.getElementById('destinatarioDomicilio').value = '';
            document.getElementById('destinatarioCP').value = '';
            document.getElementById('destinatarioTelefono').value = '';
            document.getElementById('mercanciaDescripcion').value = '';
            document.getElementById('mercanciaPeso').value = '';
            document.getElementById('mercanciaLargo').value = '';
            document.getElementById('mercanciaAncho').value = '';
            document.getElementById('mercanciaAlto').value = '';
            document.getElementById('mercanciaFechaSalida').value = '';
            document.getElementById('mercanciaFechaLlegada').value = '';
            document.getElementById('mercanciaPrecio').value = '';

        } catch (error) {
            alert(error.message); // Mostrar un mensaje de error si algo falla
        }
    });
});