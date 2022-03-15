
//Gerir Sócios

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["Numsoc"] = document.getElementById("Numsoc").value;
    formData["CC"] = document.getElementById("CC").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Numsoc;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.CC;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Atualizar</a>
                       <a onClick="onDelete(this)">Eliminar</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("Numsoc").value = "";
    document.getElementById("CC").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Numsoc").value = selectedRow.cells[1].innerHTML;
    document.getElementById("CC").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.Numsoc;
    selectedRow.cells[2].innerHTML = formData.CC;
    selectedRow.cells[3].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Tem a certeza que quer eliminar este sócio ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["empresas"] = document.getElementById("empresas").value;
    formData["Numsoc"] = document.getElementById("Numsoc").value;
    formData["CC"] = document.getElementById("CC").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.empresas;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Numsoc;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.CC;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Atualizar</a>
                       <a onClick="onDelete(this)">Eliminar</a>`;
}

function resetForm() {
    document.getElementById("empresas").value = "";
    document.getElementById("Numsoc").value = "";
    document.getElementById("CC").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("empresas").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Numsoc").value = selectedRow.cells[1].innerHTML;
    document.getElementById("CC").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.empresas;
    selectedRow.cells[1].innerHTML = formData.Numsoc;
    selectedRow.cells[2].innerHTML = formData.CC;
    selectedRow.cells[3].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Tem a certeza que quer eliminar este sócio ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("empresas").value == "") {
        isValid = false;
        document.getElementById("empresasValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("empresasValidationError").classList.contains(""))
            document.getElementById("empresasValidationError").classList.add("");
    }
    return isValid;
}


