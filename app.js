const komada = require("komada");
const tokens = require("./tokens.json");
komada.start({
  botToken: tokens.dAPI,
  ownerID: "199621462586425346",
  clientID: "305503688145895424",
  prefix: "mem ",
  clientOptions: {
    fetchAllMembers: true,
  },
});