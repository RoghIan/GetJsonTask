const container = document.getElementById("data-container");

//render html content with data on every item
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

//Javascript Ajax request
var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/dataPull", true);

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var resp = JSON.parse(this.response);
    resp.forEach(appendData);
  } else {
    // We reached our target server, but it returned an error
    container.innerText = ` Error Message: ${this.response}`;
  }
};

//send request on page load
request.send();
