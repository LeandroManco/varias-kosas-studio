import { buscarUsuario } from "../models/UsuarioModel.js";
import { generalAlert } from "../helpers/alerts.js";
import { setLocalStorage } from "../helpers/local-storage.js";
import { generarToken } from "../helpers/generators.js";
function iniciarSesion() {
    let correo = document.querySelector("#correo").value
    let contrasena = document.querySelector("#clave").value
    let auth = buscarUsuario(correo, contrasena)
    if (auth) {
        setLocalStorage("usuario", auth)
        setLocalStorage("token", generarToken(auth))
        generalAlert("Bienvenido al sistema, Parcero, compre PA, compreme toda la tienda", "seras redireccionado al catalogo de kosas", "success")
        setTimeout(() => {
            return window.location.href = "/views/pages/cosas-view-catalogo.html"
        },2000)
        return

    }
    generalAlert("Error", "Usuario no encontrado",)
    setTimeout(() => {
        return window.location.href = "/index.html"
    },3000)



}

document.querySelector("#btn-login").addEventListener("click", iniciarSesion)
