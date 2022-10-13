var dData = JSON.parse(window.localStorage.getItem("registerObj"));

display(dData);

function display(ele) {
  const container = document.querySelector(".dashboard");

  ele.map((e) => {
    let table = document.createElement("tr");

    let unique = document.createElement("td");
    unique.innerHTML = e.id;

    let name = document.createElement("td");
    name.innerHTML = e.Name;

    let age = document.createElement("td");
    age.innerHTML = e.Age;

    let designation = document.createElement("td");
    designation.innerHTML = e.Designation;

    let priority = document.createElement("td");
    priority.innerHTML = e.Priority;

    let vaccine = document.createElement("td");
    vaccine.innerHTML = e.Vaccine;

    table.append(unique, name, age, designation, priority, vaccine);
    container.append(table);
  });
}
