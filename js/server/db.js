const pg = require('pg');
const http = require('http')

const client = new pg.Client('postgres://postgres:changeme@localhost:5432/Lab_2');
client.connect()

async function runQuery(query) {
    return new Promise((resolve, reject) => {
        client.query(query, (error, result) => {
            if (error) reject(error)
            resolve(result)
        })
    })
}

function extractQuery(data) {
    return data.toString().substr(6).replaceAll('+', ' ').replaceAll('%3D', '=').replaceAll('%2C', ',').replaceAll('%40', '@').replaceAll('%3A', ':').replaceAll('%0A', '')
}

function setupResponseHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.writeHead(200);
}

const queryListener = async function (req, res) {
    setupResponseHeaders(res)

    req.on('data', async function (data) {
        let query = extractQuery(data)

        console.log(query)

        let result = await runQuery(query)

        res.write(JSON.stringify(result.rows))
        res.end('')
    })
}

const server = http.createServer(queryListener)
server.listen(8080)