const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = nombre => `Hola ${nombre}`;
const saludar4 = () => `Hola mundo`;

const getUser = () => {
    return {
        uid: 'ASJ895',
        username: 'May',
    }
}

const getUser2 = () => (
    {
        uid: 'ASJ895',
        username: 'May',
    }
)

function getUsuarioActivo(nombre) {
    return {
        uid: '284UID',
        username: nombre
    }
}

const getUsuarioActivoAF = nombre => (
    {
        uid: '284UID',
        username: nombre  
    }
)

console.log(getUsuarioActivoAF('May'));