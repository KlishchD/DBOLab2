function run() {
    let class_name = `${document.getElementById('class_name').value}`

    let result = runQuery(`SELECT s.name 
                                  FROM students s 
                                  JOIN classes c ON s.class_id = c.id 
                                  WHERE c.class_name = '${class_name}'`)

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
