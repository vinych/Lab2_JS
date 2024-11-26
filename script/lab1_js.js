var arrTasks = [];

arrTasks[0] = {
    name: "Підготувати презентацію",
    description: "На тему \"Історія розвитку програмування\"",
    deadline: "23.11.2024",
    duration: 7
};
arrTasks[1] = {
    name: "Зробити лабораторну",
    description: "ТКП",
    deadline: "30.11.2024",
    duration: 14
};
arrTasks[2] = {
    name: "Поприбирати в квартирі",
    description: "Попилососити й помити підлогу",
    deadline: "04.12.2024",
    duration: 1
};
arrTasks[3] = {
    name: "Прочитати книгу",
    description: "Марк Аврелій Наодинці з собою",
    deadline: "23.11.2024",
    duration: 5
};
arrTasks[4] = {
    name: "Повчити мову програмування",
    description: "C++",
    deadline: "30.11.2024",
    duration: 2
};
var html = "";

 function output(item, i, array){
    var text_deadline = item['deadline'];
    var duration = item['duration'];


    var daysToStart = day_until_start(text_deadline, duration);

    if (daysToStart > 0) {
        daysDiff = "До початку " + daysToStart + " діб";
    } else {
        var currentDate = new Date();
        var deadlineDate = new Date(text_deadline.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

        // Якщо поточна дата менше кінцевої, завдання триває
        if (currentDate <= deadlineDate) {
            daysDiff = "Триває";
        } else {
            // Якщо поточна дата більше кінцевої, завдання виконано
            daysDiff = "Виконано";
        }
    }

    html += "<tr>";
    for (var key in item){
        html += "<td>" + item[key] + "</td>";
    }

    html += "<td>" + daysDiff + "</td>";
    html += "</tr>";
 }


 function day_until_start(deadline, duration) {
    var currentDate = new Date();
    var deadlineDate = new Date(deadline.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    var startTime = deadlineDate.getTime() - duration * 1000 * 3600 * 24;

    var daysDiff = Math.ceil((startTime - currentDate.getTime()) / (1000 * 3600 * 24));

    return daysDiff;
}

 function ras(){
    html = "<table style='b-table'>";
    html += "<tr><td>Назва</td>" + "<td>Опис</td><td>Термін</td><td>Тривалість</td><td>Статус</td></tr>";
    arrTasks.forEach(output);
    html += "</table>";
    document.getElementById('result').innerHTML = html;
 }