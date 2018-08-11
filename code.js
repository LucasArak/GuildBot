const Discord = require("discord.js");
const bot = new Discord.Client()

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
});

var date = new Date();
var today = date.getDay();
var month = date.getMonth();
var dayNumber = date.getDate()
var atPosTime = [];

if (month<9) {
  atPosTime = [8,9,10]
}

if (month>9) {
  atPosTime = [7,8,9]
}

if (month = 9) {
  if(dayNumber<28) {
    atPosTime = [8,9,10];
  }
  else {
    atPosTime = [7,8,9];
  }
}

bot.on("message", function(message) {

  if (message.author.username === "Ali" || message.author.username === "Fate") {
    atPosTime = atPosTime.map(function(val){return --val;})
  }

  if (message.author.username === "Sync" || message.author.username === "hemou") {
    atPosTime = atPosTime.map(function(val){return ++val;})
  }

  if(message.content === "!at") {
      switch (today) {

        case 0:
        case 3:
        message.reply("Today's C-AT starts at " + atPosTime[0] + "pm your time.");
        atPosTime = []
        break;

        case 1:
        case 5:
        message.reply("Today's C-AT starts at " + atPosTime[2] + "pm your time.");
        atPosTime = []

        case 2:
        case 4:
        case 6:
        message.reply("Today's C-AT starts at " + atPosTime[1] + "pm your time.");
        atPosTime = []

        default:
        console.log("error")
        atPosTime = []
      }
  }
})

bot.login("NDc0OTk3MTE2MTA0NjA1NzA2.Dkjfeg.l7dfNDAQ55rcNtdPxbq1M184s7o");
