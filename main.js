// console.log(document.getElementById("red").innerText="blue");
// console.log(document.getElementById("green").innerText="yellow");
// console.log(document.getElementById("blue").innerText="green");
// console.log(document.getElementById("yellow").innerText="purple");
// console.log(document.getElementById("purple").innerText="red");
// // document.getElementById();

 const color = prompt ("Введите цвет на английском");

 if (color.toLowerCase().trim() === "red") {
 console.log("Красный цвет написал пользователь");
  document.body.style.backgroundColor = "red";
  document.body.innerText = "Фон изменён на red";
  document.body.style.fontSize = "40px";
 } else if (color.toLowerCase().trim() === "blue") {
  console.log("Синий цвет написал пользователь");
  document.body.style.backgroundColor = "blue";
  document.body.innerText = "Фон изменён на blue";
  document.body.style.fontSize = "40px";
 } else if (color.toLowerCase().trim() === "green") {
  console.log("Зеленый цвет написал пользователь");
  document.body.style.backgroundColor = "green";
  document.body.innerText = "Фон изменён на green";
  document.body.style.fontSize = "40px";
 } else if (color.toLowerCase().trim() === "yellow") {
 console.log("Желтый цвет написал пользователь");
 document.body.style.backgroundColor = "yellow";
 document.body.innerText = "Фон изменён на yellow";
  document.body.style.fontSize = "40px";
} else if (color.toLowerCase().trim() === "purple") {
  console.log("Фиолетовый цвет написал пользователь");
  document.body.style.backgroundColor = "purple";
  document.body.innerText = "Фон изменён на purple";
  document.body.style.fontSize = "40px";
 } else if (color.toLowerCase().trim() === "orange") {
  console.log("Оранжевый цвет написал пользователь");
  document.body.style.backgroundColor = "orange";
  document.body.innerText = "Фон изменён на orange";
  document.body.style.fontSize = "40px";
 } else if (color.toLowerCase().trim() === "pink") {
  console.log("Розовый цвет написал пользователь");
  document.body.style.backgroundColor = "pink";
  document.body.innerText = "Фон изменён на pink";
  document.body.style.fontSize = "40px";
 } else if (color.toLowerCase().trim() === "brown") {
  console.log("Коричневый цвет написал пользователь");
  document.body.style.backgroundColor = "brown";
  document.body.innerText = "Фон изменён на brown";
  document.body.style.fontSize = "40px";
 } else {
  alert("Ошибка! Введите корректный цвет")
 }