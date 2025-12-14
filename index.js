    const userInput = document.querySelector("#toDoInput");
    const button = document.querySelector(".add-btn");
    const ul = document.querySelector(".grid ul");

    function addTask() {
      const text = userInput.value.trim();
      if (!text) return;

      const li = document.createElement("li");
      
      const taskText = document.createElement("span");
      taskText.textContent = text;
      
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "✕";

      deleteBtn.addEventListener("click", function () {
        li.style.animation = "slideIn 0.3s ease reverse";
        setTimeout(() => li.remove(), 300);
      });

      li.appendChild(taskText);
      li.appendChild(deleteBtn);
      ul.appendChild(li);

      userInput.value = "";
    }

    button.addEventListener("click", addTask);

    userInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        addTask();
      }
    });