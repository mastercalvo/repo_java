// Obtiene la referencia al campo de entrada de la tarea
const taskInput = document.getElementById("taskInput");

// Obtiene la referencia al botón para agregar una tarea
const addTaskBtn = document.getElementById("addTaskBtn");

// Función para agregar una tarea a la lista
function addTask() {
    // Obtiene el texto de la tarea y elimina espacios adicionales
    const taskText = taskInput.value.trim();

    // Verifica que la entrada no esté vacía antes de agregarla a la lista
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false }); // Se inicializa como no completada
        taskInput.value = ""; // Limpia el campo de entrada después de agregar la tarea
        displayTasks(); // Actualiza la lista de tareas en la interfaz
    }
}

// Obtiene la referencia al contenedor de la lista de tareas
const taskList = document.getElementById("taskList");

// Función para mostrar las tareas en la interfaz
function displayTasks() {
    taskList.innerHTML = ""; // Limpia la lista antes de actualizarla

    tasks.forEach((task, index) => {
        // Crea un elemento <li> para cada tarea
        const li = document.createElement("li");

        // Agrega la estructura HTML dentro del <li>
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>
        `;

        // Agrega un evento para marcar la tarea como completada o no
        li.querySelector("input").addEventListener("change", () => toggleTask(index));

        // Agrega el elemento <li> a la lista de tareas
        taskList.appendChild(li);
    });
}

// Función para alternar el estado de una tarea (completada/no completada)
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks(); // Se actualiza la lista
}

// Función para eliminar todas las tareas completadas
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed); // Filtra y mantiene solo las tareas no completadas
    displayTasks();
}

// Obtiene la referencia al botón para eliminar tareas completadas
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Agrega eventos a los botones para ejecutar las funciones correspondientes
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Inicializa la lista de tareas vacía
let tasks = [];
displayTasks(); // Muestra las tareas al cargar la página
