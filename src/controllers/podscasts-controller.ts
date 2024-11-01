import { IncomingMessage, ServerResponse } from "http";
import { json } from "stream/consumers";

//& listar episodios
export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({
    podcastName: "em desenvolvimento",
  }));
};
