export const usContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}
const obj = {
    clave: '1234567', 
    name: 'May',
    edad: 15
}
console.log(usContext(obj))