/* inicializamos las variables correspondiente a la seccion del Pronostico */
const nombreCiudad = document.getElementById('ciudad')
const temperatura = document.getElementById('temperatura')
const iconoTiempo = document.getElementById('iconWeather')
const temperaturaMax = document.getElementById('temperaturaMax')
const temperaturaMin = document.getElementById('temperaturaMin')

var participantes=[]

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

window.onload = cargarEventos;

function cargarEventos(){
    document.getElementById("registrarEmprendedores").addEventListener("submit", nuevoParticipante, false);
}




function nuevoParticipante(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let nombrePyme = document.getElementById("nombreEmprendimiento").value;

    var registrado={name:nombre ,surname:apellido, email:correo, phone:telefono, namePyme:nombrePyme}
    participantes.push(registrado);
    console.log(participantes)

    let participantesJson = JSON.stringify(participantes);


    let promise = new Promise(function(resolve,reject){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body:participantesJson
        })
    
        .then(res => res.json())
        .then(res=> {
            console.log(res);
        })
        setTimeout(()=>resolve(),5000)
    
    })
    .then(resp=> {
        console.log("Termino el timeout.. ");
    });




    
    console.log(participantesJson)
}























pronosticoTiempo()