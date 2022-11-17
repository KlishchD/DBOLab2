function runQuery(query) {
    return  JSON.parse($.ajax({
        url: 'http://localhost:8080',
        data: {
            query: query
        },
        type: 'post',
        async: false
    }).responseText)
}

function getRecords(table) {
    return JSON.parse($.ajax({
        url: 'http://localhost:8080',
        data: {
            query: `SELECT * FROM ${table}`
        },
        type: 'post',
        async: false
    }).responseText)
}

function addRecords(records) {
    let list = document.getElementById('list')
    list.innerHTML += records.map(getHTMLForRecord).join()
}

function addRecord(record) {
    let list = document.getElementById('list')
    list.innerHTML += getHTMLForRecord(record)
}

function removeRecord(table, condition, id) {
    console.log(table)
    console.log(condition)
    $.ajax({
        url: 'http://localhost:8080',
        data: {
            query: `DELETE FROM ${table} WHERE ${condition}`
        },
        success: function () {
            document.getElementById(id).remove()
        },
        type: 'post',
        async: false
    })
}

function updateRecord(table, condition, values) {
    console.log(table)
    console.log(condition)
    $.ajax({
        url: 'http://localhost:8080',
        data: {
            query: `UPDATE ${table} SET ${values} WHERE ${condition}`
        },
        success: function () {
            document.getElementById(id).remove()
        },
        type: 'post',
        async: false
    })
}
function createRecord(table, values) {
    console.log(table)
    let valuesStr = values.toString()
    console.log(valuesStr)
    $.ajax({
        url: 'http://localhost:8080',
        data: {
            query: `INSERT INTO ${table} VALUES (${valuesStr})`
        },
        success: function () {},
        type: 'post',
        async: false
    })
}

function addResultRecord(record) {
    console.log(record)
    let list = document.getElementById('list')
    list.innerHTML += getHTMLForResult(record)
}
