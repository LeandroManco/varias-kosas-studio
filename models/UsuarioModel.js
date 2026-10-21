const usuarios = [
    {
        nombre: "Andres Gonzalez Hernandez",
        telefono: "3023171666",
        correo: "correo@correo.com",
        contrasena: "1234567890",
        id: "id1234567890"
    },
    {
        nombre: "lucia fernanda",
        telefono: "3177394654",
        correo: "correo.sena@gmail.com",
        contrasena: "0987654321",
        id: "id0987654321"
    }
];

export function guardaUsuario() {

}

export function buscarUsuario(correo, contrasena) {
    let auth = usuarios.some((usuario) => correo == usuario.correo && contrasena == usuario.contrasena)
    return auth

}