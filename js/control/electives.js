if(document.getElementById('list'))
    fillList()

function fillList() {
    addRecords(getRecords('electives'))
}

function getHTMLForRecord(record) {
    return `
            <tr id="${record.id}">
                <td class="text-center"><span class="text-center">${record.id}</span></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="teacher_id-${record.id}" value="${record.teacher_id}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="name-${record.id}" value="${record.name}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="time-${record.id}" value="${record.time}"></td>
                <td class="text-center"><a class="btn btn-success" onclick="updateElective(${record.id})">update</a></td>
                <td class="text-center"><a class="btn btn-danger" onclick="removeElective(${record.id})">remove</a></td>
            </tr>
        `
}

function updateElective(id) {
    let teacher_id = document.getElementById(`teacher_id-${id}`).value
    let name = `'${document.getElementById(`name-${id}`).value}'`
    let time = `'${document.getElementById(`time-${id}`).value}'`

    updateRecord('electives', `id = ${id}`, `teacher_id = ${teacher_id}, name = ${name}, time = ${time}`)
}

function removeElective(id) {
    removeRecord('electives', `id = ${id}`, id)
}

function crateElective() {
    let id = document.getElementById('id').value
    let teacher_id = document.getElementById('teacher_id').value
    let name = `'${document.getElementById('name').value}'`
    let time = `'${document.getElementById('time').value}'`
    createRecord('electives', [id, teacher_id, name, time])
}