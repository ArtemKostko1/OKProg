// Функция для создания массива и вычисления суммы нечетных элементов
function processArray(n, a, b, displayArrayElement, displayResultElement) {
    let array = createArray(n, a, b);
    displayArray(array, displayArrayElement);
    let sum = calculateSumOfOddElements(array);
    displayResult(sum, displayResultElement);
}

// Функция для создания массива
function createArray(n, a, b) {
    let numberArray = [];

    for (let i = 0; i < n; i++) {
        numberArray.push(getRandomNumber(a, b));
    }

    return numberArray;
}

// Функция для получения случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для вычисления суммы нечетных элементов массива
function calculateSumOfOddElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum += array[i];
        }
    }
    return sum;
}

// Функция для вывода массива на экран
function displayArray(array, element) {
    element.innerHTML += array.join(', ');
}

// Функция для вывода результата на экран
function displayResult(sum, element) {
    element.innerHTML += sum;
}