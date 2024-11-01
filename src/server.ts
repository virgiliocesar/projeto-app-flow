import * as http from 'http';

const server = http.createServer((request: IncomingMessage, Response: ServerResponse) => {
    Response.end('Hello World!');
})

const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`); 
});

