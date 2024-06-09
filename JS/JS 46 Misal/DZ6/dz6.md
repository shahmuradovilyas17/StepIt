36. Найти самый дорогой товар в магазине.
37. Посчитать общее количество товаров разных типов в корзине.
    const cart = [
    { name: 'Товар 1', type: 'фрукты', quantity: 2 },
    { name: 'Товар 2', type: 'овощи', quantity: 3 },
    { name: 'Товар 3', type: 'фрукты', quantity: 1 },
    { name: 'Товар 4', type: 'мясо', quantity: 2 }
    ];
    const typeCounts = {};
    console.log('Общее количество товаров разных типов в корзине:');
38. Найти средний рейтинг всех продуктов.
    const products = [
    { name: 'Товар 1', rating: 4 },
    { name: 'Товар 2', rating: 5 },
    { name: 'Товар 3', rating: 3 }
    ];
    let totalRating = 0;

39. Задача: Напишите функцию, которая принимает массив объектов, представляющих заказы, и возвращает объект, содержащий общее количество продуктов во всех заказах и общую сумму заказов.
    const orders = [
    { id: 1, products: [{ name: 'Товар 1', price: 100 }, { name: 'Товар 2', price: 150 }] },
    { id: 2, products: [{ name: 'Товар 3', price: 200 }, { name: 'Товар 4', price: 80 }] },
    { id: 3, products: [{ name: 'Товар 5', price: 120 }, { name: 'Товар 6', price: 90 }] }
    ];
40. Задача: Напишите функцию, которая принимает массив объектов, представляющих студентов, и возвращает объект со средним возрастом студентов по каждому курсу.
    const students = [
    { name: 'John', age: 20, course: 1 },
    { name: 'Jane', age: 22, course: 2 },
    { name: 'Mike', age: 21, course: 1 },
    { name: 'Alice', age: 23, course: 2 }
    ];
41. Задача: Напишите функцию, которая принимает массив объектов, представляющих книги в библиотеке, и возвращает объект, содержащий информацию о количестве книг каждого жанра.
    const books = [
    { title: 'Book 1', genre: 'Fantasy' },
    { title: 'Book 2', genre: 'Fantasy' },
    { title: 'Book 3', genre: 'Mystery' },
    { title: 'Book 4', genre: 'Thriller' },
    { title: 'Book 5', genre: 'Mystery' },
    { title: 'Book 6', genre: 'Fantasy' },
    { title: 'Book 7', genre: 'Thriller' },
    { title: 'Book 8', genre: 'Sci-Fi' }
    ];

42. Напишите функцию, которая принимает массив объектов, представляющих товары в магазине, и возвращает общую стоимость всех товаров.
    const products = [
    { name: 'Товар 1', price: 100, quantity: 2 },
    { name: 'Товар 2', price: 200, quantity: 1 },
    { name: 'Товар 3', price: 150, quantity: 3 }
    ];
43. Напишите функцию, которая принимает объект с оценками студентов и возвращает средний балл по всем студентам.
    const studentScores = {
    'John': 85,
    'Jane': 90,
    'Mike': 75
    };
44. Напишите функцию, которая принимает массив объектов с информацией о книгах и возвращает массив имен (названий) всех книг.
    const books = [
    { name: 'Book 1', author: 'Author 1' },
    { name: 'Book 2', author: 'Author 2' },
    { name: 'Book 3', author: 'Author 3' }
    ];
45. Напишите функцию, которая принимает массив объектов товаров и строку с категорией товара. Функция должна вернуть новый массив, содержащий только товары с указанной категорией.
    const products = [
    { name: 'Товар 1', category: 'Электроника' },
    { name: 'Товар 2', category: 'Книги' },
    { name: 'Товар 3', category: 'Электроника' },
    { name: 'Товар 4', category: 'Одежда' },
    { name: 'Товар 5', category: 'Книги' }
    ];
    console.log(filterProductsByCategory(products, 'Книги'));
46. функция принимает массив объектов товаров и еще один параметр, который представляет собой минимальную цену товара. Функция должна вернуть новый массив, содержащий только товары, цена которых не ниже указанного значения.
    const products = [
    { name: 'Товар 1', price: 100 },
    { name: 'Товар 2', price: 150 },
    { name: 'Товар 3', price: 200 },
    { name: 'Товар 4', price: 80 },
    { name: 'Товар 5', price: 120 }
    ];
    console.log(filterProductsByPrice(products, 150));