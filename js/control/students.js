if(document.getElementById('list'))
    fillList()

function fillList() {
    addRecords(getRecords('students'))
}

function getHTMLForRecord(record) {
    return `
            <tr id="${record.id}">
                <td class="text-center"><span class="text-center"> ${record.id} </span></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="class_id-${record.id}" value="${record.class_id}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="name-${record.id}" value="${record.name}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="address-${record.id}" value="${record.address}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="phone-${record.id}" value="${record.phone}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="year_of_berth-${record.id}" value="${record.year_of_bearth}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="email-${record.id}" value="${record.email}"></td>
                <td class="text-center"><a class="btn btn-success" onclick="updateStudent(${record.id})">update</a></td>
                <td class="text-center"><a class="btn btn-danger" onclick="removeStudent(${record.id})">remove</a></td>
            </tr>
        `
}

function updateStudent(id) {
    let class_id = document.getElementById(`class_id-${id}`).value
    let name = `'${document.getElementById(`name-${id}`).value}'`
    let address = `'${document.getElementById(`address-${id}`).value}'`
    let phone = `'${document.getElementById(`phone-${id}`).value}'`
    let year_of_berth = document.getElementById(`year_of_berth-${id}`).value
    let email = `'${document.getElementById(`email-${id}`).value}'`

    updateRecord('students', `id = ${id}`, `class_id = ${class_id}, name = ${name}, address = ${address}, phone = ${phone}, year_of_bearth = ${year_of_berth}, email = ${email}`)
}

function removeStudent(id) {
    removeRecord('students', `id = ${id}`, id)
}

function createStudent() {
    let id = document.getElementById('id').value
    let class_id = document.getElementById('class_id').value
    let name = `'${document.getElementById('name').value}'`
    let address = `'${document.getElementById('address').value}'`
    let phone = `'${document.getElementById('phone').value}'`
    let year_of_berth = document.getElementById('year_of_berth').value
    let email = `'${document.getElementById('email').value}'`
    createRecord('students', [id, class_id, name, address, phone, year_of_berth, email])
}