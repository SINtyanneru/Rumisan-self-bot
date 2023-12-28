/**
 * Misskeyの猫モード
 */

import { Message } from "discord.js-selfbot-v13";

export class CAT{
	async Main(message:Message){
		let MSG_TEXT = message.content;

		//なをにゃに
		MSG_TEXT = MSG_TEXT.replaceAll("な", "にゃ");
		MSG_TEXT = MSG_TEXT.replaceAll("na", "ña");
		MSG_TEXT = MSG_TEXT.replaceAll("Na", "Ña");
		MSG_TEXT = MSG_TEXT.replaceAll("NA", "ÑA");

		if(message.content !== MSG_TEXT){
			await message.edit(MSG_TEXT);
		}
	}
}