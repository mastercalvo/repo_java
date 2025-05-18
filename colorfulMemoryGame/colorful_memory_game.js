// Definimos una lista de colores para las cartas
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];

// Mezclamos las cartas duplicando la lista y aplicando la función shuffle
let cards = shuffle(colors.concat(colors));

// Arreglo para almacenar las cartas seleccionadas temporalmente
let selectedCards = [];

// Variables para el puntaje y el tiempo restante
let score = 0;
let timeLeft = 30;
let gameInterval; // Variable para manejar el temporizador

// Referencias a elementos HTML del juego
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Función para generar las cartas en el tablero
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color; // Se almacena el color en un atributo de datos
        card.textContent = '?'; // Inicialmente se muestra un signo de interrogación
        gameContainer.appendChild(card);
    }
}

// Función para mezclar un arreglo (utilizando el algoritmo de Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos aleatoriamente
    }
    return array;
}

// Manejo de clic en las cartas
function handleCardClick(event) {
    const card = event.target;

    // Se ignoran los clics en elementos que no sean cartas o que ya estén emparejadas
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }

    // Mostrar el color de la carta seleccionada
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);

    // Si hay dos cartas seleccionadas, se verifica si coinciden
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// Función que verifica si las cartas seleccionadas son iguales
function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.dataset.color === card2.dataset.color) {
        // Si coinciden, se marcan como emparejadas y se suma al puntaje
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        // Si no coinciden, se vuelven a ocultar
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }

    // Se vacía el arreglo de cartas seleccionadas para la siguiente ronda
    selectedCards = [];
}

// Función para iniciar el juego
function startGame() {
    timeLeft = 30; // Reiniciar el tiempo
    startbtn.disabled = true; // Desactivar el botón de inicio
    score = 0; // Reiniciar el puntaje
    scoreElement.textContent = `Score: ${score}`;

    // Mezclar cartas y vaciar el tablero antes de comenzar
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';

    generateCards(); // Crear las cartas en el tablero
    startGameTimer(timeLeft); // Iniciar el temporizador
    gameContainer.addEventListener('click', handleCardClick); // Agregar el evento de clic
}

// Función para manejar el temporizador del juego
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;

    // Configurar el intervalo para reducir el tiempo cada segundo
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        // Si el tiempo se acaba, se detiene el juego y se muestra un mensaje
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert('¡Juego terminado!');
            startbtn.disabled = false; // Reactivar el botón de inicio
        }
    }, 1000);
}

// Agregar evento de clic al botón de inicio
startbtn.addEventListener('click', startGame);
