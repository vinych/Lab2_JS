var n = 0, m = 0; // Глобальні змінні для розмірів таблиці
var a = []; // Глобальний масив для даних таблиці
var maxPositiveCell = null, minPositiveCell = null;
var maxNegativeCell = null, minNegativeCell = null;



function formList() {
    var fruit = document.getElementById("fruit").value;
    var price = document.getElementById("price").value;

    if (price == "" || price < 0) {
        alert("Неправильна вартість");
        return;
    }

    var html = "<li>" + fruit + ": " + price + " грн" + "</li>";

    document.getElementById("fruitList").innerHTML += html;

    document.getElementById("price").value = "";
}
//Обробник для Enter
addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        formList();
    }
});




//Завдання 2
//Зчитуємо таблицю
function generate_arr() {
    let table = document.getElementById("numberTable");
    n = table.rows.length; //Кількість рядків
    m = table.rows[0].cells.length; //Кількість колонок

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            arr[i][j] = parseInt(table.rows[i].cells[j].innerHTML);
        }
    }
    return arr;
}

//Знаходимо мінімуми і максимуми
function process() {
    let maxPositive = -100000;
    let minPositive = 100000;
    let maxNegative = -100000;
    let minNegative = 100000;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] > 0) {
                //Оновлюємо максимальне і мінімальне серед додатних
                if (a[i][j] > maxPositive) {
                    maxPositive = a[i][j];
                    maxPositiveCell = { i: i, j: j };
                }
                if (a[i][j] < minPositive) {
                    minPositive = a[i][j];
                    minPositiveCell = { i: i, j: j };
                }
            } 
            else if (a[i][j] < 0) {
                //Оновлюємо максимальне і мінімальне серед від’ємних
                if (a[i][j] > maxNegative) {
                    maxNegative = a[i][j];
                    maxNegativeCell = { i: i, j: j };
                }
                if (a[i][j] < minNegative) {
                    minNegative = a[i][j];
                    minNegativeCell = { i: i, j: j };
                }
            }
        }
    }
}

function color() {
    //Змінюємо кольори клітинок таблиці
    let table = document.getElementById("numberTable");

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] > 0) {
                table.rows[i].cells[j].style.backgroundColor = "green"; //Додатні числа
            } else if (a[i][j] < 0) {
                table.rows[i].cells[j].style.backgroundColor = "red"; //Від’ємні числа
            }
        }
    }

    //Виділяємо максимальні і мінімальні значення
    if (maxPositiveCell) {
        table.rows[maxPositiveCell.i].cells[maxPositiveCell.j].style.backgroundColor = "darkgreen"; //Макс. серед додатних
    }
    if (minPositiveCell) {
        table.rows[minPositiveCell.i].cells[minPositiveCell.j].style.backgroundColor = "lightgreen"; //Мін. серед додатних
    }
    if (maxNegativeCell) {
        table.rows[maxNegativeCell.i].cells[maxNegativeCell.j].style.backgroundColor = "darkred"; //Макс. серед від’ємних
    }
    if (minNegativeCell) {
        table.rows[minNegativeCell.i].cells[minNegativeCell.j].style.backgroundColor = "lightcoral"; //Мін. серед від’ємних
    }
}


function table_process() {
    a = generate_arr();
    process();
    color();
}