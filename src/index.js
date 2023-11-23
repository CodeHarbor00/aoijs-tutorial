const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "MTE3MDc3Njk2MjA5NzIzODA0Nw.GfSTJY.UU_cAGHIcOVjpf0hHQdvDrxkA-7zpX0FlsVqBU",
  prefix: "$getGuildVar[prefix]",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});

//command handler
client.loadCommands("src/commands",true);

//variables
require("./handler/variables.js")(client);


//bot status

client.status({
    name: "Examle aoijs bot",
    type: "LISTENING",
    time: 12,
})

//EMBED EXAMPLES

client.command({
    name: "embed",
    code: `
    $title[1;This is Title!]
    $description[1;This is Description!]
    $addField[1;This is field title!;__This is field description!__;true]
    $author[1;This is author!;$userAvatar[$authorID]]
    $footer[1;This is footer!;$userAvatar]
    $image[1;$userAvatar]
    $thumbnail[1;$userAvatar]
    $color[1;Random]
    `
})


