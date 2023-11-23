module.exports = {
    name: "prefix",
    aliases: "setPrefix",
    code: `
    $description[1;✅ Changed server prefix to \`$message\`]
    $color[1;Green]
    $setGuildVar[prefix;$message]
    $onlyIf[$message!=;{newEmbed:{description:> \`You have to specify a message to change the server prefix!\`\n> Example: - \`$getGuildVar[prefix]$commandName <prefix>\`}}]
    $onlyPerms[administrator;{newEmbed:{description:> **You need to have "ADMINISTRATOR" role.**}{color:Red}}]

    `
}