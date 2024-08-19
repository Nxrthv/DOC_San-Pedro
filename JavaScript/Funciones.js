function CE(){
    window.location.href = ('/Templates/CE.html')
}

function CT(){
    window.location.href = ('/Templates/CT.html')
}

// Funciones
// Cargar datos de la tabla guardados en cache
function cargarDatosDesdeLocalStorage() {
    const datosGuardados = localStorage.getItem('datosTabla');
    if (datosGuardados) {
        const tableBody = document.querySelector('table tbody');
        tableBody.innerHTML = datosGuardados;
    }
}

// Guardar datos de la tabla en cache
function guardarDatosEnLocalStorage() {
    const tableBody = document.querySelector('table tbody');
    localStorage.setItem('datosTabla', tableBody.innerHTML);
}

// Cargar datos al iniciar la página
window.onload = cargarDatosDesdeLocalStorage;

// Limpiar la Tabla
function limpiar() {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';
    localStorage.removeItem('datosTabla');
}