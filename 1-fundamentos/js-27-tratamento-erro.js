function tratarErro(erro) {
    throw new Error("Iremos verificar o err!");
    // throw 10
    // throw false
}

function imprimirChamada(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErro(e);
    } finally {
        console.log("Isso é executado não importa o que aconteça!");
    }
}

const obj = { name: "Rafael"}
imprimirChamada(obj);