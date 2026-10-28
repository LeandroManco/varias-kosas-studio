const usuarios = [
    {
        nombre: "Edgar Leandro Manco Ospina",
        telefono: "3242594461",
        correo: "leandroedgar23@correo.com",
        contrasena: "123456789",
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
    let auth = usuarios.find((usuario) => correo == usuario.correo && contrasena == usuario.contrasena)
    return auth

}