module.exports = {
    name: "unban",
    code: `
    $unban[$guildID;$get[user];$if[$messageSlice[1]==;None;$messageSlice[1]]]

    $title[1;User unbanned!]
    $description[1;> <@$authorID> unbanned **$userTag[$get[user]]**
    > Reason: $if[$messageSlice[1]==;\`None\`;\`$messageSlice[1]\`]]
    $color[1;Red]

    $onlyIf[$get[user]!=$ownerID;{newEmbed:{description:you can't unban server owner!}{color:Red}}]
    $onlyIf[$get[user]!=;{newEmbed:{description:You need to provide a user ID}{color:Red}}]
    $onlyIf[$isBanned[$guildID;$get[user]]==true;{newEmbed:{description:This user is already unbanned!}{color:Red}}]
    $onlyIf[$hasPerms[$guildID;$authorID;banmembers]==true;{newEmbed:{title:Critical Error}{description:You don't have perms: \`BAN\`}{color:Red}}]
    $onlyClientPerms[banmembers;{newEmbed:{title:Critical Error}{description:I don't have perms: \`BAN\`}{color:Red}}]
    $onlyIf[$message!=;{newEmbed:{description:Too few arguments.\nUsage\n\`$getGuildVar[prefix]$commandName <user> [reason]\`}{color:Red}}]


    $let[user;$findUser[$message[1]]]
    
    
    `
}