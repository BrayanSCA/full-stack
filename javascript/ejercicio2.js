function procesarUsuario(nombre, callback) {
    console.log(`Procesando usuario: ${nombre}`);
    callback(nombre);
}

function saludar(nombre){
    console.log(`Hola ${nombre}, bienvenido!`);
}

procesarUsuario("Brayan", saludar);