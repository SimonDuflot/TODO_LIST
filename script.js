const input = document.querySelector(".title");
const addButton = document.querySelector("button");
const list = document.getElementById("list");

console.log(input);
const createNewToDo = () => {
  const li = document.createElement("li");
  let inputValue = input.value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    list.appendChild(li);
  }
  input.value = "";
};

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  createNewToDo();
});
