function run() {
    let student_name = `${document.getElementById('name').value}`

    let result = runQuery(`SELECT s.name, m.mark, m.date, m.aditional_description
                                  FROM marks m
                                  JOIN students st ON m.student_id = st.id
                                  JOIN teachers t ON m.teacher_id = t.id
                                  JOIN subjects s ON m.subject_id = s.id
                                  WHERE st.name = '${student_name}'`)

    document.getElementById('list').innerHTML = ''
    result.forEach(addResultRecord)
}

function getHTMLForResult(record) {
    return `
        <tr>
            <td class="text-center">${record.name}</td>
            <td class="text-center">${record.mark}</td>
            <td class="text-center">${record.date}</td>
            <td class="text-center">${record.aditional_description}</td>
        </tr>
    `
}
