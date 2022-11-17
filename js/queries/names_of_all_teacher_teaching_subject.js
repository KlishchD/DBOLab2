function run() {
    let name = `${document.getElementById('name').value}`

    let result = runQuery(`SELECT t.name 
                                  FROM teachers t 
                                  JOIN subjects s ON s.id = t.subject_id
                                  WHERE s.name = '${name}'`)

    document.getElementById('list').innerHTML = ''
    result.forEach(addResultRecord)
}

function getHTMLForResult(record) {
    return `
        <tr>
            <td class="text-center">${record.name}</td>
        </tr>
    `
}
