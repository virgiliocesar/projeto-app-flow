// src/server.ts
import * as http from "http";
var server = http.createServer((req, res) => {
});
var port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
