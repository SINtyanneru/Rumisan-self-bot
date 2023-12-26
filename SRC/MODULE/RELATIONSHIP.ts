/**
 * 人間関係の取得とか
 */

import CONFIG from "../../Config.json";
import { APIUser } from "discord-api-types/v9";

export type RelationShips = {
	id: string,
	type: number,
	nickname: string | null,
	user: APIUser
}[]

export async function RELATIONSHIPS_GET(){
	const AJAX = await fetch("https://discord.com/api/v9/users/@me/relationships ", {
		"method":"GET",
		"headers":{
			"authorization":CONFIG.DISCORD.TOKEN
		}
	});

	return await AJAX.json() as RelationShips;
}