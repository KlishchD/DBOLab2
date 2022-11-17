function run() {
    let student_name = `${document.getElementById('name').value}`

    let result = runQuery(`SELECT name FROM students s
                                 WHERE EXISTS(
                                    (SELECT subject_id FROM marks m WHERE m.student_id = s.id) EXCEPT
                                    (SELECT subject_id FROM marks m JOIN students s ON m.student_id = s.id WHERE s.name = '${student_name}')
                                 ) AND NOT EXISTS(
                                    (SELECT subject_id FROM marks m JOIN students s ON m.student_id = s.id WHERE s.name = '${student_name}') EXCEPT
                                    (SELECT subject_id FROM marks m WHERE m.student_id = s.id))
                            `)

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
