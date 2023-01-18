var form = document.getElementById("addform");
var itemlist = document.getElementById("items");
form.addEventListener("submit", additem);
itemlist.addEventListener("click", removeItem);
function additem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  var deletebtn = document.createElement("button");
  deletebtn.className = "btn btn-danger btn-sm float -right delete";
  deletebtn.appendChild(document.createTextNode("x"));
  li.appendChild(deleteBtn);
  itemlist.appendChild(li);
  function removeItem(e) {
    if (e.target.classlist.contains("delete")) {
      if (confirm("are you sure")) {
        var li = e.target.parentelement;
        itemlist.removeChild(li);
      }
    }
  }
}
