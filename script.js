var people = [
    { name: "Subhan", surname: "Adolf", age: 19 },
    { name: "Vagif", surname: "Nonaieliesw", age: 18 },
    { name: "Adil", surname: "QuizKing", age: 23 },
    { name: "Sabir", surname: "Csharpov", age: 25 }
];





var table = document.getElementById("userInfo");
var tableBody = table.querySelector("tbody");



//==========================================================
//====================With insert===========================
//==========================================================
// people.forEach(function(person) {
//     var row = tableBody.insertRow(tableBody.rows.length);
//     var content1 = row.insertCell(0);
//     var content2 = row.insertCell(1);
//     var content3 = row.insertCell(2);

//     content1.textContent = person.name;
//     content2.textContent = person.surname;
//     content3.textContent = person.age;
// });
//==========================================================
//================With appendChild==========================
//==========================================================
people.forEach(function(person) {
    var row = document.createElement("tr");

    var content1 = document.createElement("td");
    var content2 = document.createElement("td");
    var content3 = document.createElement("td");

    content1.textContent = person.name;
    content2.textContent = person.surname;
    content3.textContent = person.age;

    row.appendChild(content1);
    row.appendChild(content2);
    row.appendChild(content3);

    tableBody.appendChild(row);
});
