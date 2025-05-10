// Lista de libros donde se almacenarán los datos
let books = [];

/**
 * Agrega un nuevo libro a la lista después de validar los datos ingresados por el usuario.
 * Si todos los campos son correctos, se guarda el libro y se actualiza la lista visualmente.
 */
function addBook() {
    // Obtener los valores ingresados en los campos de entrada
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // Validar que los datos sean correctos antes de agregar el libro
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        // Crear un objeto con la información del libro
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        // Agregar el libro a la lista
        books.push(book);

        // Mostrar la lista actualizada
        showbooks();

        // Limpiar los campos de entrada para facilitar la adición de un nuevo libro
        clearInputs();
    } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
}

/**
 * Muestra la lista de libros almacenados en la interfaz.
 * Genera un bloque de HTML para cada libro, incluyendo su número, nombre, autor y descripción.
 */
function showbooks() {
    // Crear la estructura HTML de la lista de libros
    const booksDiv = books.map((book, index) => `
        <h1>Número de libro: ${index + 1}</h1>
        <p><strong>Nombre del libro:</strong> ${book.name}</p>
        <p><strong>Nombre del autor:</strong> ${book.authorName}</p>
        <p><strong>Descripción del libro:</strong> ${book.bookDescription}</p>
        <p><strong>Número de páginas:</strong> ${book.pagesNumber} página(s)</p>
        <button onclick="editbook(${index})">Editar</button>`
    );

    // Insertar la lista generada en el contenedor de libros del HTML
    document.getElementById('books').innerHTML = booksDiv.join('');
}

/**
 * Permite editar un libro existente.
 * Se carga la información del libro en los campos de entrada para su modificación.
 * Luego, se elimina el libro anterior de la lista para ser reemplazado.
 * @param {number} index - Índice del libro en la lista 'books'.
 */
function editbook(index) {
    const book = books[index];

    // Cargar la información del libro en los campos de entrada para su modificación
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;

    // Eliminar el libro anterior de la lista
    books.splice(index, 1);

    // Mostrar la lista actualizada
    showbooks();
}
