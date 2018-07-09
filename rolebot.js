const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NDY1NzIxNDcyMTkxNTYxNzI4.DiRokw.Nnh2owu3_cMn5AM6_a7avK-DvtY";//put discord bot token here
const SERVER_ID = "450098535946256414";
const CHANNEL_ID = "450118376204009482";
const PREM_ID = "450118281085452311";
const UPGRADE_MESSAGE = "Congratulations, you have been upgraded to @Premium in Premium Signals!";
const DOWNGRADE_MESSAGE = "Unfortunately, your Premium Signals membership has expired. If you would like to renew your membership for just $1/day, please visit http://www.PremiumSignals.info";
const UPGRADE_PREFIX = "_upgrade";
const DOWNGRADE_PREFIX = "_downgrade";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

});

client.on('message', message => {
	if(message.channel.id != CHANNEL_ID || message.author.id === client.user.id){
		return;
	}
	let content = message.content;
	
	console.log(content);
	if(content.startsWith(UPGRADE_PREFIX)){
		let userid = content.substr(UPGRADE_PREFIX.length + 3, 18);
		
		console.log(userid);
		let user = client.guilds.get(SERVER_ID).members.get(userid);
		user.addRole(PREM_ID);
		user.send(UPGRADE_MESSAGE)
			.catch(console.error);
	} else if(content.startsWith(DOWNGRADE_PREFIX)){
		let userid = content.substr(DOWNGRADE_PREFIX.length + 3, 18);
		
		console.log(userid);
		let user = client.guilds.get(SERVER_ID).members.get(userid);
		user.removeRole(PREM_ID);
		user.send(UPGRADE_MESSAGE)
			.catch(console.error);
	}
});


client.login(token);