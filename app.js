document.addEventListener('DOMContentLoaded', () => {
    const remitenteForm = document.querySelector('.section:first-of-type');
    const destinatarioForm = document.querySelector('.section:last-of-type');

    //Codigo para el registro de los datos ingresados
    remitenteForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario
        const datosRemitente = {
            nombre: document.getElementById('remitente-nombre').value,
            ciudad: document.getElementById('remitente-ciudad').value,
            estado: document.getElementById('remitente-estado').value,
            domicilio: document.getElementById('remitente-domicilio').value,
            codigoPostal: document.getElementById('remitente-codigo-postal').value,
            telefono: document.getElementById('remitente-telefono').value
        };
        console.log('Datos del Remitente:', datosRemitente);
    });

    