function press(event) {
  var inputValue = document.getElementById("inp").value;
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (event.keyCode === 13) {
    if (inputValue === "") {
      return;
    } else {
      document.getElementById("myUL").appendChild(li);
    }
  }
}
