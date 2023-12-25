import CONFIG from "../Config.json";
import { Client, type TextChannel, Intents } from "discord.js-selfbot-v13";
import { BELEIDIGENDE_CONV } from "./FUNCTION/BELEIDIGENDE_CONV";
import { MAMECHISHIKI } from "./FUNCTION/MAMECHISHIKI";
import { CAT } from "./FUNCTION/CAT";
const client = new Client({
	checkUpdate: false
}) as Client<true>;


//準備完了
client.on("ready", async () => {
	console.log(`${client.user.username} is ready!`);
});

//メッセージを受信
client.on("messageCreate", async message => {
	try {
		//自分自身の投稿か
		if(message.author.id === client.user.id){
			if(message.inGuild() && CONFIG.GUILD.some((ROW) => ROW === message.guild.id)){
				new BELEIDIGENDE_CONV().Main(message);
				new CAT().Main(message);
			}
		}

		//他人の投稿
		if(message.content.includes("<@" + client.user.id + ">")){//メッセージに自分自信へのメンションが有るか
			const CMD = message.content.replace("<@" + client.user.id + ">", "").replaceAll(" ", "");

			//自己紹介
			if(CMD === "だれ" || CMD === "誰"){
				message.reply("https://八木伸梧.com");
			}
			//豆知識
			if(CMD === "豆知識"){
				new MAMECHISHIKI().Main(message);
			}
		}

		//指定の鯖内か
		if(message.inGuild() && CONFIG.GUILD.some((ROW) => ROW === message.guild.id)){
			if(message.content.match(/(う)(ー*)?$/)){
				message.channel.send("んこ");
			}

			if(message.content.match(/(う)(ー*)?ん$/)){
				message.channel.send("こ");
			}
		}
	}catch(EX){
		console.log(EX);
	}
});

client.login(CONFIG.DISCORD.TOKEN);