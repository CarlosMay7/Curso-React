const persona = {
    nombre: 'Carlos',
    apellido: 'May',
    edad: 20,
    direccion:{
        pais: 'Egipto',
        zip: 9738904
    }
}

console.log(persona.nombre);

console.table(persona);

const persona2 = {...persona};