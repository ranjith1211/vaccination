let registerArr =
  JSON.parse(localStorage.getItem("registerObj")) || [];

function registerData() {


  let id = document.getElementById("uniqueData").value;


  let Name = document.getElementById("name").value;
  let Age = document.getElementById("age").value;
  let Designation = document.getElementById("designation").value;

  let Priority = document.getElementById("priority").value;
  let Vaccine = document.getElementById("vaccine").value;

  let registerObj = {
    id: id,
    Name: Name,
    Age: Age,
    Designation: Designation,
    Priority: Priority,
    Vaccine: Vaccine,
  };
  registerArr.push(registerObj);

  localStorage.setItem("registerObj", JSON.stringify(registerArr));

  window.location.href = "DashBoard.html";
}
