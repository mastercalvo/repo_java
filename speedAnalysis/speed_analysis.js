// Texto de prueba que el usuario debe escribir
let testText = "The quick brown fox jumps over the lazy dog."; 

// Variables globales para medir el tiempo de inicio y final
let startTime, endTime;

function startTest() {
    // Establece el texto de prueba en el campo de entrada
    document.getElementById("inputText").value = testText;
    
    // Limpia los resultados previos de la prueba
    document.getElementById("output").innerHTML = "";

    // Guarda el tiempo de inicio en milisegundos
    startTime = new Date().getTime();
    
    // Cambia el texto y la funcionalidad del botón para finalizar la prueba
    var button = document.getElementById("btn");
    button.innerHTML = "Finalizar Prueba";
    button.onclick = endTest;
}

function endTest() {
    // Registra el tiempo de finalización en milisegundos
    endTime = new Date().getTime();

    // Deshabilita el campo de entrada del usuario para evitar modificaciones
    document.getElementById("userInput").readOnly = true;

    // Calcula el tiempo transcurrido en segundos
    var timeElapsed = (endTime - startTime) / 1000;

    // Obtiene el texto ingresado por el usuario
    var userTypedText = document.getElementById("userInput").value;

    // Cuenta las palabras correctamente eliminando espacios extra
    var typedWords = userTypedText.split(/\s+/).filter(function(word) {
        return word !== ""; // Filtra palabras vacías
    }).length;

    // Calcula las palabras por minuto (WPM)
    var wpm = 0; // Valor inicial por defecto

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Muestra los resultados de la prueba de velocidad de escritura
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Resultados de la Prueba de Escritura:</h2>" +
        "<p>Palabras Escritas: " + typedWords + "</p>" +
        "<p>Tiempo Transcurrido: " + timeElapsed.toFixed(2) + " segundos</p>" +
        "<p>Velocidad de Escritura (WPM): " + wpm + "</p>";

    // Restablece el botón para una nueva prueba
    var button = document.getElementById("btn");
    button.innerHTML = "Iniciar Prueba";
    button.onclick = startTest;
}
