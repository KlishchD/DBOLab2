if(document.getElementById('list'))
    fillList()

function fillList() {
    addRecords(getRecords('subjects'))
}

function getHTMLForRecord(record) {
    return `
            <tr id="${record.id}">
                <td class="text-center"><span class="text-center">${record.id}</span></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="name-${record.id}" value="${record.name}"></td>
                <td class="text-center"><a class="btn btn-success" onclick="updateSubject(${record.id})">update</a></td>
                <td class="text-center"><a class="btn btn-danger" onclick="removeSubject(${record.id})">remove</a></td>
            </tr>
        `
}
function updateSubject(id) {
    let name = `'${document.getElementById(`name-${id}`).value}'`

    updateRecord('subjects', `id = ${id}`, `name = ${name}`)
}

function removeSubject(id) {
    removeRecord('subjects', `id = ${id}`, id)
}

function createSubject() {
    let id = document.getElementById('id').value
    let name = `'${document.getElementById('name').value}'`
    createRecord('subjects', [id, name])
}