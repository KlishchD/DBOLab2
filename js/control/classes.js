if(document.getElementById('list'))
    fillList()

function fillList() {
    addRecords(getRecords('classes'))
}

function getHTMLForRecord(record) {
    return `
            <tr id="${record.id}">
                <td class="text-center"><span class="text-center">${record.id}</span></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="classmaster_id-${record.id}" value="${record.classmaster_id}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="students_count-${record.id}" value="${record.students_count}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="class_name-${record.id}" value="${record.class_name}"></td>
                <td><a class="btn btn-success" onclick="updateClass(${record.id})">update</a></input>
                <td><a class="btn btn-danger" onclick="removeClass(${record.id})">remove</a></input>
            </tr>
        `
}

function updateClass(id) {
    let classmaster_id = document.getElementById(`classmaster_id-${id}`).value
    let students_count = document.getElementById(`students_count-${id}`).value
    let class_name = `'${document.getElementById(`class_name-${id}`).value}'`

    updateRecord('classes', `id = ${id}`, `classmaster_id = ${classmaster_id}, students_count = ${students_count}, class_name = ${class_name}`)
}

function removeClass(id) {
    removeRecord('classes', `id = ${id}`, id)
}

function createClass() {
    let id = document.getElementById("id").value
    let classmaster_id = document.getElementById("classmaster_id").value
    let students_count = document.getElementById("students_count").value
    let class_name = `'${document.getElementById("class_name").value}'`
    createRecord('classes', [id, classmaster_id, students_count, class_name])
}