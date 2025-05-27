// Se crea una instancia de XMLHttpRequest para realizar la solicitud
var xhr = new XMLHttpRequest();

// Se define la URL del archivo JSON que contiene los artículos de salud
var url = './health_article.json';

// Se configura la solicitud GET de manera asíncrona
xhr.open('GET', url, true);

// Se especifica que la respuesta esperada será en formato JSON
xhr.responseType = 'json';

// Se obtiene el contenedor de artículos en el DOM
var articlesDiv = document.getElementById('articles');

// Se define la función que se ejecutará cuando la solicitud se complete
xhr.onload = function() {
    // Verifica que la respuesta haya sido exitosa (código 200)
    if (xhr.status === 200) {
        var articles = xhr.response; // Se obtiene el JSON cargado

        // Se recorre la lista de artículos obtenidos
        articles.forEach(function(article) {
            // Se crea un div contenedor para cada artículo
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            // Se crea y se añade el título del artículo
            var title = document.createElement('h2');
            title.textContent = article.title;

            // Se crea y se añade la descripción del artículo
            var description = document.createElement('p');
            description.textContent = article.description;

            // Se crea el encabezado y la lista de "Formas de Lograrlo"
            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Formas de Lograrlo:';

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            // Se crea el encabezado y la lista de "Beneficios"
            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Beneficios:';

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            // Se agregan los elementos creados al contenedor del artículo
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            // Se añade el artículo completo al contenedor principal
            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Error al obtener los artículos:', xhr.status);
    }
};

// Se envía la solicitud para obtener los datos del JSON
xhr.send();
