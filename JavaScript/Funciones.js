//Rutas
function CE(){
    window.location.href = ('/Templates/CE.html')
}

function CT(){
    window.location.href = ('/Templates/CT.html')
}

function CV() {
    window.location.href = ('/Templates/CV.html')
}

// Funciones

//Sweet Alert
function error (){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al Insertar los datos",
    });
}

// Guardar datos de la tabla en cache
function guardarDatosEnLocalStorage() {
    const tableBody = document.querySelector('table tbody');
    localStorage.setItem('datosTabla', tableBody.innerHTML);
    insertar()
}

// Limpiar la Tabla
function limpiar() {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';
    localStorage.removeItem('datosTabla');
}