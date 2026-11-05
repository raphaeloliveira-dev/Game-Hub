export function textoValido(valor, limite) {
    if (typeof valor !== "string" || !Number.isSafeInteger(limite) || limite <= 0) {
        return false;
    }

    const texto = valor.trim();
    return texto.length > 0 && texto.length <= limite;
}

export function inteiroPositivo(valor) {
    return typeof valor === "number"
        && Number.isFinite(valor)
        && Number.isSafeInteger(valor)
        && valor > 0;
}