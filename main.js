let addTaskButton = document.getElementById("add");
let taskContainer = document.getElementById("container");
let inputField = document.getElementById("inputField");

addTaskButton.addEventListener("click", function () {
  var specificTask = document.createElement("p");
  specificTask.innerText = inputField.value;
  taskContainer.appendChild(specificTask);
  inputField.value = "";
  specificTask.addEventListener("click", function () {
    specificTask.innerText = "";
  });
});
