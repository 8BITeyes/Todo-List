import "./style.css";

const listItems = [];

class ToDo {
  constructor(title, date, desc) {
    this.title = title;
    this.date = date;
    this.desc = desc;
  }
}

const item = new ToDo("Project", "Jan 1", "Finish this");
