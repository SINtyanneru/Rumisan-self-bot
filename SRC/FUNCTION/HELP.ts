/**
 * ヘルプコマンド
 */
import type { Message } from "discord.js-selfbot-v13";

export class HELP{
	async Main(message:Message){
		await message.reply("```\n"+
			"だれ/誰→自己紹介\n"+
			"豆知識→豆知識を披露する\n"+
			"好感度→好感度を暴露\n"+
		"```");
	}
}