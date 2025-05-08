
// Paso 1: Definir los arrays del menú con precios
const breakfastMenu = [
    { name: 'Pancakes', price: '$12' },
    { name: 'Eggs Benedict', price: '$22.99' },
    { name: 'Oatmeal', price: '$21.99' },
    { name: 'Frittata', price: '$15' }
];

const mainCourseMenu = [
    { name: 'Steak', price: '$45.99' },
    { name: 'Pasta', price: '$18.99' },
    { name: 'Burger', price: '$14.99' },
    { name: 'Salmon', price: '$34.99' }
];

const dessertMenu = [
    { name: 'Cake', price: '$8.99' },
    { name: 'Ice Cream', price: '$6.99' },
    { name: 'Pudding', price: '$7.50' },
    { name: 'Fruit Salad', price: '$9.99' }
];

// Paso 2: Mostrar los elementos del menú con precios
const generateMenuHTML = (menu) => {
    return menu.map((item, index) => `<p>Item ${index + 1}: ${item.name} - ${item.price}</p>`).join('');
};

document.getElementById('breakfastMenuItems').innerHTML = generateMenuHTML(breakfastMenu);
document.getElementById('mainCourseMenuItems').innerHTML = generateMenuHTML(mainCourseMenu);
document.getElementById('dessertMenuItems').innerHTML = generateMenuHTML(dessertMenu);

