const http = require('http');
const url = require('url');
const fs = require('fs');
const queryString = require('query-string');

const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const server = http.createServer((req, res) => {
    let shownResponse;
    //============================================================================ MAIN FUNCTIONS

    //============================================================================ GET USER INFOS
    // parses all the  REQ URL params into a query string object with keys and it's values;
    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    let query = queryString.parse(parsedUrl.search);
    console.log(query);

    //================================================================ CREATE AND UPDATE USER FILE
    if (parsedUrl.pathname == '/criar-usuario') {
        fs.writeFile(
            'users/' + query.id + '.txt',
            JSON.stringify(query),
            function (err) {
                if (err) throw err;
                console.log('Saved!');
                shownResponse = 'Usuário criado com sucesso!';
                res.statusCode = 201;
                res.setHeader('Content-Type', 'text/plain');
                res.end(shownResponse);
            }
        );
    }
    //================================================================== SELECT USER THROUGH PARAMS
    else if (parsedUrl.pathname == '/selecionar-usuario') {
        fs.readFile('users/' + query.id + '.txt', function (err, data) {
            shownResponse = data;
            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end(shownResponse);
        });
    }
    //=============================================================================  REMOVE USER FILE
    else if (parsedUrl.pathname == '/remover-usuario') {
        fs.unlink('users/' + query.id + '.txt', function () {
            console.log('File deleted!');
            shownResponse = 'Usuário removido!';
            res.statusCode = 204;
            res.setHeader('Content-Type', 'text/plain');
            res.end(shownResponse);
        });
    }
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening on http://${HOSTNAME}:${PORT}`);
});

//
