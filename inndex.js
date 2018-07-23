const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    var fs = require("fs");
    var sampleData;
    console.log('This is after the read call');
    res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    //console.log(Server running at http://${hostname}:${port}/)
});
    var fs = require("fs");
    var sampleData;
    fs.readFile('test1.json', (err, data) => {
        if (err) throw err;
        sampleData = JSON.parse(data);

        var sampleObject = {
            "Id ": 2,
            "square ": 2
        }

        sampleData.push(sampleObject);

        fs.writeFile("./test1.json", JSON.stringify(sampleData, null, 4), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });

    });

