export function generarToken(usuario) {

    const payload = {
        id: usuario.id,
        correo: usuario.correo,
        exp: Date.now() + 10 * 1000
    }
    const header = btoa(JSON.stringify({ alg: "none", typ: "JWT" }))
    const cuerpo = btoa(JSON.stringify(payload))
    const firma = crypto.randomUUID()
    return `${header}.${cuerpo}.${firma}`
}

export function tokenValido(token) {
    if (!token) return false
    try {
        const cuerpo = JSON.parse(atob(token.split(".")[1]))
        return cuerpo.exp > Date.now()
    } catch {
        return false
    }
}