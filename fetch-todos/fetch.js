const ul = document.getElementById("todos");

// Alternativ 1. Använder async / await för att hämta data från JSON filen. ES2017
// Använd gärna denna som mall när ni använder fetch!
async function getTodos() {
  try {
    const response = await fetch("./todos.json");
    if (!response.ok) {
      throw new Error(`HTTP ERROR STATUS ${response.status}`);
    }
    const data = await response.json();
    displayTodos(data.todos);
    console.log("INNE I ASYNC FUNKTION SNART KLAR!!!");

  } catch (error) {
    console.error("Error", error);
  }
}

function displayTodos(todos) {
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.textContent = todo.text;
    ul.appendChild(li);
  });
}

// Alternativ 2. Använder .then() för att hämta data från JSON filen. Kallas även Promise Chaining. ES2015
// function getTodos() {
//   fetch("./todos.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP ERROR status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("fetching todos");
//       displayTodos(data.todos);
//     })
//     .catch((error) => {
//       console.error("Error", error);
//     });
// }


// Visa att funktion getTodos är async och inte sync. Synkrona körs efter varandra, i taget
getTodos();
console.log("Ett");
console.log("Två");
console.log("tre");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("fyra");
console.log("fem");
