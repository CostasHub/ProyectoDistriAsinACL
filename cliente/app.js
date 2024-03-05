var express = require("express"); // cargar la librería
const { hostname } = require("os");

var servidor = express(); // creo el servidor express

servidor.use("/cliente", express.static("cliente")); // servir la web del cliente
servidor.use("/", express.json({ strict: false })); // interpretar el body de la solicitud como JSON 

// En tu archivo app.js

// Array de hospitales
const hospitales = [
    { id: 1, nombre: "Hospital A"},
    { id: 2, nombre: "Hospital B"},
    { id: 3, nombre: "Hospital C"}
];

// Definir una ruta para obtener la lista de hospitales
servidor.get("/hospitales", (req, res) => {
    // Aquí podrías realizar cualquier lógica adicional, como consultar una base de datos, etc.
    res.json(hospitales); // Devolver la lista de hospitales como respuesta en formato JSON
});


//Se crea usuarios ficticios
const usuarios = [
    { id: 1, nombreUsuario: "usuario1", contraseña: "contraseña1" },
    { id: 2, nombreUsuario: "usuario2", contraseña: "contraseña2" }
];

// servidor.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes como JSON


servidor.post("/login", (req, res) => {
    const { nombreUsuario, contraseña } = req.body;
    
    // Buscar el usuario en la lista de usuarios
    const usuario = usuarios.find(u => u.nombreUsuario === nombreUsuario && u.contraseña === contraseña);
    
    if (usuario) {
        // Usuario autenticado correctamente
        res.json({ mensaje: "¡Inicio de sesión exitoso!", usuario });
    } else {
        // Usuario no encontrado o contraseña incorrecta
        res.status(401).json({ mensaje: "Nombre de usuario o contraseña incorrectos" });
    }
});

