import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage.js";
import { tokenValido } from "../helpers/generators.js";

let usuario = getLocalStorage("usuario");
let token = getLocalStorage("token");

if (!tokenValido(token)) {
    removeLocalStorage("usuario")
    removeLocalStorage("token")
    window.location.href = "/index.html"
} else {
    document.querySelector("#info-usuario").textContent = "USUARIO: " + usuario.nombre
    document.querySelector("#btn-salir").addEventListener("click", function () {
        removeLocalStorage("usuario")
        removeLocalStorage("token")
        window.location.href = "/index.html"
    })
}