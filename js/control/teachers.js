if(document.getElementById('list'))
    fillList()

function fillList() {
    addRecords(getRecords('teachers'))
}

function getHTMLForRecord(record) {
    return `
            <tr id="${record.id}">
                <td class="text-center"><span class="text-center"> ${record.id} </span></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="subject_id-${record.id}" value="${record.subject_id}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="name-${record.id}" value="${record.name}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="phone-${record.id}" value="${record.phone}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="address-${record.id}" value="${record.address}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="email-${record.id}" value="${record.email}"></td>
                <td class="text-center"><a class="btn btn-success" onclick="updateTeacher(${record.id})">update</a></td>
                <td class="text-center"><a class="btn btn-danger" onclick="removeTeacher(${record.id})">remove</a></td>
            </tr>
        `
}

function updateTeacher(id) {
    let subject_id = document.getElementById(`subject_id-${id}`).value
    let name = `'${document.getElementById(`name-${id}`).value}'`
    let phone = `'${document.getElementById(`phone-${id}`).value}'`
    let address = `'${document.getElementById(`address-${id}`).value}'`
    let email = `'${document.getElementById(`email-${id}`).value}'`

    updateRecord('teachers', `id = ${id}`, `subject_id = ${subject_id}, name = ${name}, phone = ${phone}, address = ${address}, email = ${email}`)
}

function removeTeacher(id) {
    removeRecord('teachers', `id = ${id}`, id)
}

function createTeacher() {
    let id = document.getElementById('id').value
    let subject_id = document.getElementById('subject_id').value
    let name = `'${document.getElementById('name').value}'`
    let phone = `'${document.getElementById('phone').value}'`
    let address = `'${document.getElementById('address').value}'`
    let email = `'${document.getElementById('email').value}'`
    createRecord('teachers', [id, subject_id, name, phone, address, email])
}