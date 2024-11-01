import * as http from "http";
import { getListEpisodes } from "./controllers/podscasts-controller";
import { SimpleCallExpression } from './../node_modules/@types/estree/index.d';
import { appendFile } from "fs";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET") {
      await getListEpisodes(req, res);
    } else {
      res.end("SERVER IS RUNNING");
    }
  }
);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});