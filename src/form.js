const listItems = [];
const documentItem = document.getElementById("new-item"); //element to append new item to

export default function formLoad() {
  const form = document.querySelector("#form");
  const addButton = document.querySelector("#btn");

  class ToDo {
    constructor(title, date, desc) {
      this.title = title;
      this.date = date;
      this.desc = desc;
    }
  }

  addButton.addEventListener("click", function () {
    if (form.style.display === "") {
      form.style.display = "flex";
    } else if (form.style.display === "flex") {
      form.style.display = "";
    }
  });

  let titleInput = document.getElementById("title");
  let dateInput = document.getElementById("date");
  let descInput = document.getElementById("desc");

  const formSubmit = document.querySelector("#form-submit");
  formSubmit.addEventListener("click", function () {
    let title = titleInput.value;
    let date = dateInput.value;
    let desc = descInput.value;

    let newItem = new ToDo(title, date, desc);
    listItems.push(newItem);
    appendItems();
    form.style.display = "";
  });

  function appendItems() {
    let newestItem = listItems[listItems.length - 1];

    const itemElement = document.createElement("div"); //Full element that will be appended to body
    itemElement.classList.add("todo");

    const projHeader = document.createElement("div"); //Header element that contains the title and due date
    projHeader.classList.add("proj-header");
    itemElement.appendChild(projHeader);

    const titleElement = document.createElement("h3"); //This and date to be appended to projHeader
    titleElement.innerText = newestItem.title;
    titleElement.classList.add("title");
    projHeader.appendChild(titleElement);

    const dateElement = document.createElement("div");
    dateElement.innerText = newestItem.date;
    dateElement.classList.add("date");
    projHeader.appendChild(dateElement);

    const descElement = document.createElement("div");
    descElement.innerText = newestItem.desc;
    descElement.classList.add("desc");
    itemElement.appendChild(descElement);

    documentItem.appendChild(itemElement);
  }
}
