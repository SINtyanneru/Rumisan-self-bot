/**
 * 暴言を置き換える
 */

import type { Message } from "discord.js-selfbot-v13";

//暴言リストの型
type BELEIDIGENDE_LIST = {
	OLD:RegExp,
	NEW:string
};

//暴言リスト
const BELEIDIGENDE_LIST_ARRAY:BELEIDIGENDE_LIST[] = [
	{
		OLD:/(あ|は)(\?|？)/g,
		NEW:"にゃ？"
	},{
		OLD:/(死|し)ね/g,
		NEW:"にゃ"
	},{
		OLD:/(殺|こ|コ)(す|ろ|ロ)(|す|ス)/g,
		NEW:"喰う"
	},{
		OLD:/(ゴ|ご)(ミ|み)/g,
		NEW:"にゃ"
	}
] as const;

export class BELEIDIGENDE_CONV{
	async Main(message:Message){
		//メッセージの内容
		let MSG_TEXT = message.content.toString();

		//暴言を置き換え
		for (let I = 0; I < BELEIDIGENDE_LIST_ARRAY.length; I++) {
			const BELEIDIGENDE = BELEIDIGENDE_LIST_ARRAY[I];
			if(MSG_TEXT.match(BELEIDIGENDE.OLD)){
				MSG_TEXT = MSG_TEXT.replace(BELEIDIGENDE.OLD, BELEIDIGENDE.NEW);
			}
		}

		//暴言があったか？
		if(MSG_TEXT !== message.content){
			console.log("暴言を検知！！！猫語に置き換えます！");
			
			await message.edit(MSG_TEXT);
		}//無いなら何もしない
	}
}