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
    document.getElementById("inp").value = "";
  }

  //create 'x' span on each list element
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  span.className = "close";
  li.appendChild(span);

  //
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
