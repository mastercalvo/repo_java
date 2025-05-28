function showWeatherDetails(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener el valor de la ciudad ingresada por el usuario
    const cityInput = document.getElementById('city');
    const city = cityInput.value.trim();

    if (!city) {
        alert('Por favor, ingrese una ciudad.');
        return;
    }

    // Clave de API
    const apiKey = 'df8fdbebd7477160784d9d2b15fda03f';

    // URL corregida con ciudad y clave API correcta
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=es`;

    // Realizar la solicitud a la API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: Estado ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos obtenidos:", data);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Clima en ${data.name}</h2>
                                     <p>Temperatura: ${data.main.temp} °C</p>
                                     <p>Condiciones: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error("Error al obtener el clima:", error);
            document.getElementById('weatherInfo').innerHTML = `<p>Hubo un problema al obtener el clima. Inténtelo nuevamente.</p>`;
        });
}

// Vincular la función al evento del formulario
document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
