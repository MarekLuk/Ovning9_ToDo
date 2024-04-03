const element = document.getElementById("myBtn");
const todoList = document.getElementById("todoList");
const todoText = document.getElementById("todoText");

function addTodo() {
	var todoTextValue = todoText.value.trim();

	if (todoTextValue !== "") {
		const newItem = document.createElement("li");
		const newContainer = document.createElement("div");
		newContainer.textContent = todoTextValue;

		newItem.appendChild(newContainer);

		const deleteBtn = document.createElement("button");
		deleteBtn.innerHTML = "<i class='fa-regular fa-trash-can'></i>";
		deleteBtn.classList.add("remove-btn");
		deleteBtn.addEventListener("click", function () {
			if (confirm("Are you sure to remove item?")) {
				newItem.remove();
			}
		});

		const checkBtn = document.createElement("button");
		checkBtn.innerHTML = todoText.value =
			"<i class='fa-regular fa-square-check'></i>";
		checkBtn.classList.add("check-btn");
		checkBtn.addEventListener("click", function () {
			newItem.classList.toggle("task-done");
		});

		newItem.appendChild(checkBtn);
		newItem.appendChild(deleteBtn);

		todoList.appendChild(newItem);

		todoText.value = "";
	} else {
		alert("todo is empty");
	}
}

element.addEventListener("click", addTodo);
