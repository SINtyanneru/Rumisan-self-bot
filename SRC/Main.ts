import CONFIG from "../Config.json";
import { Client, type TextChannel, Intents, Message } from "discord.js-selfbot-v13";
import { APIUser } from "discord-api-types/v9";
import { RelationShips, RELATIONSHIPS_GET } from "./MODULE/RELATIONSHIP";

import { BELEIDIGENDE_CONV } from "./FUNCTION/BELEIDIGENDE_CONV";
import { MAMECHISHIKI } from "./FUNCTION/MAMECHISHIKI";
import { CAT } from "./FUNCTION/CAT";
import { HELP } from "./FUNCTION/HELP";
import { LIKE } from "./FUNCTION/LIKE";
const client = new Client({
	checkUpdate: false
}) as Client<true>;

//人間関係(?)
let RELATIONSHIPS_LIST:RelationShips;

//準備完了
client.on("ready", async () => {
	console.log(`${client.user.username} is ready!`);

	RELATIONSHIPS_LIST = await RELATIONSHIPS_GET();
});

//人間関係の更新
client.on("relationshipUpdate", async () => {
	RELATIONSHIPS_LIST = await RELATIONSHIPS_GET();
});

//メッセージを受信
client.on("messageCreate", async message => {
	try {
		//自分自身の投稿
		if(message.author.id === client.user.id){
			MY_MSG(message);
		}

		//他人の投稿
		await ETC_MSG(message);
	}catch(EX){
		console.log(EX);
	}
});

client.login(CONFIG.DISCORD.TOKEN);

async function MY_MSG(message:Message){
	if(message.inGuild() && CONFIG.GUILD.some((ROW) => ROW === message.guild.id)){
		await new BELEIDIGENDE_CONV().Main(message);
		await new CAT().Main(message);
	}
}

async function ETC_MSG(message:Message){
	//ブロックしてるかチェック
	const USER_BLOCKED = RELATIONSHIPS_LIST.some((ROW) => ROW.type === 2 && ROW.user.id === message.author.id);
	if(USER_BLOCKED){
		return;
	}

	//メッセージに自分自信へのメンションが有るか
	if(message.content.includes("<@" + client.user.id + ">")){
		const CMD = message.content.replace("<@" + client.user.id + ">", "").replaceAll(" ", "");

		//自己紹介
		if(CMD === "だれ" || CMD === "誰"){
			message.reply("https://八木伸梧.com");
		}
		//豆知識
		if(CMD === "豆知識"){
			new MAMECHISHIKI().Main(message);
		}
		//好感度
		if(CMD === "好感度"){
			new LIKE().Main(message);
		}
		//ヘルプ
		if(CMD === "help"){
			new HELP().Main(message);
		}
	}

	//指定の鯖内か
	if(message.inGuild() && CONFIG.GUILD.some((ROW) => ROW === message.guild.id) && message.author.id !== client.user.id){
		/*絶対起動するな
		if(message.content.match(/んこ$/)){
			await message.channel.send("う");
		}
		*/
		
		if(message.content.match(/(う)(ー*)?$/)){
			await message.channel.send("んこ");
		}

		if(message.content.match(/(う)(ー*)?ん$/)){
			await message.channel.send("こ");
		}

		if(message.content.match(/(p)$/)){
			await message.channel.send("oop");
		}
	}
}

//メッセージが消された
client.on("messageDelete", async deletedMessage => {
	if(deletedMessage.author?.id === client.user.id){
		deletedMessage.channel.send({
			content:deletedMessage.content
		});
	}
});