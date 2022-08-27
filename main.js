/* inicializamos las variables correspondiente a la seccion del Pronostico */
const nombreCiudad = document.getElementById('ciudad')
const temperatura = document.getElementById('temperatura')
const iconoTiempo = document.getElementById('iconWeather')
const temperaturaMax = document.getElementById('temperaturaMax')
const temperaturaMin = document.getElementById('temperaturaMin')


/* Funcion que obtiene de la api openweather los datos del pronostico de tiempo */
async function pronosticoTiempo(){
    try {
        let api = '1ee4e8761246e152a287630fdf86cd82';
        let longitud = -65.33131945767111
        let latitud = -24.183217361024145
        let responseTiempo = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${api}`)
        let tiemporesponse = await responseTiempo.json()

        console.log(tiemporesponse)

        let temperaturaCelsius=(tiemporesponse.main.temp - 273.15).toFixed(1)
        let temperaturaCelsiusMax=(tiemporesponse.main.temp_max - 273.15).toFixed(1)
        let temperaturaCelsiusMin=(tiemporesponse.main.temp_min - 273.15).toFixed(1)


        nombreCiudad.textContent = tiemporesponse.name;
        temperatura.textContent = temperaturaCelsius+" C°";
        temperaturaMax.textContent ="Maxima "+temperaturaCelsiusMax+" C°";
        temperaturaMin.textContent ="Minima: "+temperaturaCelsiusMin+" C°";
        iconoWeather = tiemporesponse.weather[0].icon
        iconoTiempo.src=`http://openweathermap.org/img/wn/${iconoWeather}@2x.png`

        console.log(tiemporesponse.weather[0].icon)
    }
    catch {
        console.log("Error")
    }
}


function obtenerDatos(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var nombreEmprend = document.getElementById("nombreEmprendimiento").value;

    let participantes = [
        {nombres:nombre, apellidos:apellido, correos:correo, telefonos:telefono, nombreEmpresa: nombreEmprend}
    ]

    console.log(participantes)
}
























pronosticoTiempo()