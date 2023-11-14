// Función para iniciar sesión
function iniciarSesion() {
    var correoLogin = document.getElementById('correoLogin').value;
    var contrasenaLogin = document.getElementById('contrasenaLogin').value;

    // Obtener datos almacenados en localStorage
    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistro')) || [];

    // Verificar si los datos coinciden
    var usuarioEncontrado = usuariosRegistrados.find(user => user.correo === correoLogin && user.contrasena === contrasenaLogin);

    if (usuarioEncontrado) {
      alert('¡Inicio de sesión exitoso! Los datos coinciden.');
    } else {
      alert('Error: Los datos no coinciden. Verifica tu correo y contraseña.');
    }

    // Limpiar el formulario después del intento de inicio de sesión
    document.getElementById('loginForm').reset();
}