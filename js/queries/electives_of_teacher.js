function run() {
    let teacher_name = `${document.getElementById('name').value}`

    let result = runQuery(`SELECT e.id, e.name, e.time
                                  FROM electives e
                                  JOIN teachers t ON e.teacher_id = t.id
                                  WHERE t.name = '${teacher_name}'`)

    document.getElementById('list').innerHTML = ''
    result.forEach(addResultRecord)
}

function getHTMLForResult(record) {
    return `
        <tr>
            <td class="text-center">${record.id}</td>
            <td class="text-center">${record.name}</td>
            <td class="text-center">${record.time}</td>
        </tr>
    `
}