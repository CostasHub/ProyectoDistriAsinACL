function iniciarSesion(usuario, contraseña, callback) {
    var data = {
        nombreUsuario: usuario,
        contraseña: contraseña
    };

    rest.post("/login", data, function(status, response) {
        if (callback) {
            callback(status, response);
        }
    });
}
