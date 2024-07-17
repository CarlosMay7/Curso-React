const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { edad, clave, nombre, } = persona;
 
console.log( nombre );
console.log( edad );
console.log( clave );

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        age: edad,
        latlng: {
            lat: 7789,
            lng: -45678.9
        }
    }

}

const { nombreClave, age, latlng: { lat, lng } } = useContext( persona );

console.log(nombreClave, age);
console.log( lat, lng );