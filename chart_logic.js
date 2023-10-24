function showAllDepartmentOptions(id) {
    let element = document.getElementById(id)
    if (element.classList.contains("open")) {
        element.classList.remove("open")
        element.style.display = "none"
    } else {
        element.classList.add("open")
        element.style.display = "block"
        element.style.position = "absolute"
    }
}

let past_id = undefined

function updateSelectedValue(id) {
    let selected_department = document.getElementById("selectedDepartment")
    let current_element = document.getElementById(id)
    selected_department.dataset.selectedId = id
    selected_department.innerText = current_element.innerText

    if (selected_department.dataset.selectedId) {
        selected_department.style.color = "black"
    }

    if(selected_department.dataset.selectedId) {
       current_element.style.color = "black"
       if(past_id!=undefined && past_id!=id){
        let past_element = document.getElementById(past_id);
        past_element.style.color = "rgba(0,0,0, 0.7)"
       }
    }
    past_id = id

    let department_select = document.getElementById("deptSelect")
    if (department_select && department_select.classList.contains("open")){
        department_select.style.display = "none"
        department_select.classList.remove("open")
    }
}