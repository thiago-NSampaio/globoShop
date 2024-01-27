export function serialize(obj) {
    // Inicializa a variável.
    let queryString = "";
    // Faz um for no objeto recebido.
    for (let key in obj) {
        // Atribui os dados a variável queryString somado as querybuilder.
        queryString+= `&${key}=${obj[key]}`;
    }

    return queryString;
}