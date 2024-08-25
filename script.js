var a = [];
function save() {
  var todo = document.getElementById("todo").value;
  if (todo != "") {
    var obj = {
      todolist: todo,
    };
    a.push(obj);
    localStorage.setItem("task-list", JSON.stringify(a));
    // alert("Save to local storage")
  } else {
    alert("Please enter task");
    // return
  }
}
function get() {
  var get = JSON.parse(localStorage.getItem("task-list"));
  var table = "<tr><th></th></tr>";
  for (let i = 0; i < get.length; i++) {
    table +=
      "<tr><td><ul id='list'><li>" +
      get[i].todolist +
      "<button type='button' class='deletebtn btn-outline-warning' onclick='deleteitem(" +
      i +
      ")'>Delete</button></li></ul><hr></td></tr>";
  }
  document.getElementById("table-id").innerHTML = table;
}
function deleteitem(index) {
  var get = JSON.parse(localStorage.getItem("task-list"));
  get.splice(index, 1);
  localStorage.setItem("task-list", JSON.stringify(get));
  location.reload();
}
get();
