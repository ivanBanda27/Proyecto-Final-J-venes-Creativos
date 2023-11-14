 // Función para registrar datos en localStorage
 function registrar() {
    var nombre = document.getElementById('nombreRegistro').value;
    var apellido = document.getElementById('apellidoRegistro').value;
    var correo = document.getElementById('correoRegistro').value;
    var contrasena = document.getElementById('contrasenaRegistro').value;

    // Obtener datos existentes de localStorage o inicializar un array vacío
    var usuariosRegistrados = JSON.parse(localStorage.getItem('usuariosRegistro')) || [];

    // Verificar si el correo ya está registrado
    var usuarioExistente = usuariosRegistrados.find(user => user.correo === correo);

    if (usuarioExistente) {
      alert('Error: El correo ya está registrado. Por favor, elige otro correo.');
    } else {
      // Agregar nuevo usuario
      var nuevoUsuario = { nombre, apellido, correo, contrasena };
      usuariosRegistrados.push(nuevoUsuario);

      // Guardar datos actualizados en localStorage
      localStorage.setItem('usuariosRegistro', JSON.stringify(usuariosRegistrados));

      // Limpiar el formulario después de registrar
      document.getElementById('registroForm').reset();
      alert('¡Registro exitoso!');
    }
  }