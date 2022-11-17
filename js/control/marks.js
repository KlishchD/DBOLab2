if(document.getElementById('list'))
    fillList()

function fillList() {
    addRecords(getRecords('marks'))
}

function getHTMLForRecord(record) {
    return `
            <tr id="${record.student_id}-${record.teacher_id}-${record.subject_id}-${record.date}">
                <td class="text-center"><span class="text-center"> ${record.student_id} </span></td>
                <td class="text-center"><span class="text-center"> ${record.teacher_id} </span></td>
                <td class="text-center"><span class="text-center"> ${record.subject_id} </span></td>
                <td class="text-center"><span class="text-center"> ${record.date} </span></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="mark-${record.student_id}-${record.teacher_id}-${record.subject_id}-${record.date}" value="${record.mark}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="description-${record.student_id}-${record.teacher_id}-${record.subject_id}-${record.date}" value="${record.additional_description}"></td>
                <td class="text-center"><a class="btn btn-success" onclick='updateMark("${record.student_id}", "${record.teacher_id}", "${record.subject_id}", "${record.date}")'>update</a></td>
                <td class="text-center"><a class="btn btn-danger" onclick='removeMark("${record.student_id}", "${record.teacher_id}", "${record.subject_id}", "${record.date}")'>remove</a></td>
            </tr>
        `
}
function updateMark(student_id, teacher_id, subject_id, date) {
    let mark = `${document.getElementById(`mark-${student_id}-${teacher_id}-${subject_id}-${date}`).value}`
    let additional_description = `'${document.getElementById(`description-${student_id}-${teacher_id}-${subject_id}-${date}`).value}'`

    updateRecord('marks', `student_id = ${student_id} and teacher_id = ${teacher_id} and subject_id = ${subject_id} and date = '${date}'`, `mark = ${mark}, aditional_description = ${additional_description}`)
}
function removeMark(student_id, teacher_id, subject_id, date) {
    removeRecord('marks', `student_id = ${student_id} and teacher_id = ${teacher_id} and subject_id = ${subject_id} and date = '${date}'`,
        `${student_id}-${teacher_id}-${subject_id}-${date}`)
}
function createMark() {
    let student_id = document.getElementById('student_id').value
    let teacher_id = document.getElementById('teacher_id').value
    let subject_id = document.getElementById('subject_id').value
    let date = `'${document.getElementById('date').value}'`
    let mark = `${document.getElementById('mark').value}`
    let additional_description = `'${document.getElementById('description').value}'`
    createRecord("marks", [student_id, teacher_id, subject_id, mark, date, additional_description])
}