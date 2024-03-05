function manejarLogin() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    iniciarSesion(usuario, contraseña, function(status, response) {
        if (status == 200) {
            // Manejar inicio de sesión exitoso
            console.log(response.mensaje);
            // Cambiar a la sección principal u otra lógica
        } else {
            // Manejar error de inicio de sesión
            alert(response.mensaje);
        }
    });
}
