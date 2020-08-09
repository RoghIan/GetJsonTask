const button = document.getElementById("button");
const container = document.getElementById("data-container");

const appendData = (item, index) => {
  let itemDiv = document.createElement("div");
  itemDiv.id = index;
  itemDiv.classList.add("post");

  let title = document.createElement("h1");
  title.innerText = item.title;

  let body = document.createElement("div");
  body.innerText = item.body;

  container.appendChild(itemDiv);
  itemDiv.appendChild(title);
  itemDiv.appendChild(body);
};

var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/dataPull", true);

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    var resp = JSON.parse(this.response);
    resp.forEach(appendData);
  } else {
    container.innerText = ` Error Message: ${this.response}`;
  }
};

request.send();
