"use strict";
var import_node_crypto = require("node:crypto");
var import_node_http = require("node:http");
const serverId = (0, import_node_crypto.randomUUID)();
const server = (0, import_node_http.createServer)((req, res) => {
  res.end("Hello from " + serverId);
});
server.listen(8080, () => {
  console.log("Server listening on PORT: 8080");
});
