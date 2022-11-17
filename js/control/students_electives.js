if(document.getElementById('list'))
    fillList()

function fillList() {
    addRecords(getRecords('students_electives'))
}

function getHTMLForRecord(record) {
    return `
            <tr id="${record.student_id}-${record.elective_id}">
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="student_id-${record.student_id}-${record.elective_id}" value="${record.student_id}"></td>
                <td class="text-center"><input class="text-center bg-dark text-white border-0 rounded-1 p-2" id="elective_id-${record.student_id}-${record.elective_id}" value="${record.elective_id}"></td>
                <td class="text-center"><a class="btn btn-success" onclick='updateStudentElective("${record.student_id}", "${record.elective_id}")'>update</a></td>
                <td class="text-center"><a class="btn btn-danger" onclick='removeStudentElective("${record.student_id}", "${record.elective_id}")'>remove</a></td>
            </tr>
        `
}

function updateStudentElective(student_id, elective_id) {
    let new_student_id = document.getElementById(`student_id-${student_id}-${elective_id}`).value
    let new_elective_id = document.getElementById(`elective_id-${student_id}-${elective_id}`).value

    updateRecord('students_electives', `student_id = ${student_id} and elective_id = ${elective_id}`, `student_id = ${new_student_id}, elective_id = ${new_elective_id}`)
}

function removeStudentElective(student_id, elective_id) {
    removeRecord('students_electives', `student_id = ${student_id} and elective_id = ${elective_id}`, `${student_id}-${elective_id}`)
}
function createStudentElective() {
    let student_id = document.getElementById('student_id').value
    let elective_id = document.getElementById('elective_id').value
    createRecord('students_electives', [student_id, elective_id])
}