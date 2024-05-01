interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 23,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const tble = document.createElement("tble");
  studentsList.forEach(student => {
    const rw = table.insertRow();
    const firstNameCell = rw.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = rw.insertCell();
    locationCell.innerHTML = student.location;
  });
  document.body.appendChild(tble);
}

renderTable();
