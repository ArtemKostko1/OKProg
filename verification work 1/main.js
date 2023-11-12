// Функция для запрашивания ввода пользователя и вызова основной функции
function startFunction() {
    let n, a, b;

    do {
        n = prompt("Введите размер массива (целое число):");

        if (!isValidIntegerInput(n)) {
            alert("Пожалуйста, введите корректное целое число.");
        }

    } while (!isValidIntegerInput(n));

    do {
        a = prompt("Введите минимальное значение (число):");

        if (!isValidIntegerInput(a)) {
            alert("Пожалуйста, введите корректное число.");
        }

    } while (!isValidIntegerInput(a));

    do {
        b = prompt("Введите максимальное значение (число):");

        if (!isValidIntegerInput(b)) {
            alert("Пожалуйста, введите корректное число.");
        }

    } while (!isValidIntegerInput(b));

     // Выбор элемента с классом "main"
     let displayArrayElement = document.querySelector('.displayArray');
     let displayResultElement = document.querySelector('.displayResult');
    
     // Очистка содержимого блока перед новым выводом
     displayArrayElement.innerHTML = '';
     displayResultElement.innerHTML = '';

    processArray(+n, +a, +b, displayArrayElement, displayResultElement);
}

// Функция для проверки ввода на целое число
function isValidIntegerInput(input) {
    return Number.isInteger(+input);
}