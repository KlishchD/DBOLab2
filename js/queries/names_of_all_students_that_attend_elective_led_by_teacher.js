function run() {
    let elective_name = `${document.getElementById('elective_name').value}`
    let teacher_name = `${document.getElementById('teacher_name').value}`

    let result = runQuery(`SELECT s.name 
                                  FROM students s 
                                  JOIN students_electives se ON s.id = se.student_id
                                  JOIN electives e ON e.id = se.elective_id
                                  JOIN teachers t ON t.id = e.teacher_id
                                  WHERE e.name = '${elective_name}' and t.name = '${teacher_name}'`)

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
