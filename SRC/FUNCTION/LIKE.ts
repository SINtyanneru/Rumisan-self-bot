/**
 * 好感度
 */
import type { Message } from "discord.js-selfbot-v13";

type LIKE_DATA = {
	好感度:string,
	信頼度:string
}

const LIKE_DATA_LIST:Record<string, LIKE_DATA | undefined> = {
	//自分
	"564772363950882816":{
		好感度:"-100",
		信頼度:"-100"
	},
	//プヌスク
	"980604083851390976":{
		好感度:"50",
		信頼度:"60"
	},
	//まーめ
	"733197293208993845":{
		好感度:"10",
		信頼度:"30"
	},
	"811143522212118528":{
		好感度:"10",
		信頼度:"40"
	},
	"997588139235360958":{
		好感度:"30",
		信頼度:"50"
	},
	"1139799916420534282":{
		好感度:"10",
		信頼度:"20"
	},
	"1059267736049557635":{
		好感度:"50",
		信頼度:"70"
	}
} satisfies Record<string,LIKE_DATA>;

export class LIKE{
	async Main(message:Message){
		const USER_LIKE_DATA = LIKE_DATA_LIST[message.author.id];

		//値が有るか
		if(USER_LIKE_DATA){
			message.reply("好感度：100中" + USER_LIKE_DATA.好感度 + "\n"+
						"信頼度：100中" + USER_LIKE_DATA.信頼度 + "\n");
		}else{
			message.reply("お前誰だよ");
		}
	}
}