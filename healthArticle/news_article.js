// Se crea el objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// Se define la URL del archivo JSON
var url = './news_article.json';

// Se configura la solicitud GET en modo asíncrono
xhr.open('GET', url, true);
xhr.responseType = 'json';

// Manejo del evento 'onload' cuando la respuesta se recibe
xhr.onload = function() {
    if (xhr.status === 200) {
        var article = xhr.response; // Se obtiene el artículo de noticias

        // Se obtiene el contenedor en el HTML
        var articleDiv = document.getElementById('article');

        // Se crea el contenido dinámico
        articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p><strong>Autor:</strong> ${article.author}</p>
            <p><strong>Fecha:</strong> ${article.date}</p>
            <p>${article.content}</p>
            <h3>Temas relacionados:</h3>
            <ul>
                ${article.topics.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
        `;
    } else {
        console.error('Error al obtener el artículo:', xhr.status);
    }
};

// Se envía la solicitud
xhr.send();
