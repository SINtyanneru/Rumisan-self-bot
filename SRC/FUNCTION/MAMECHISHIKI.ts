/**
 * 豆知識
 */

import { Message } from "discord.js-selfbot-v13";

//豆知識一覧
const MAMECHISHIKI_LIST:string[] = [
	"日本語の「あいうえお順」は、[サンスクリット語](https://ja.wikipedia.org/wiki/%E3%82%B5%E3%83%B3%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%83%E3%83%88)の音の順番を参考にし、\n「あいうえお表」は中国語の[反切](https://ja.wikipedia.org/wiki/%E5%8F%8D%E5%88%87)を参考に作られている",
	"日本が国家承認していない國は複数あり、ソマリランド/朝鮮民主主義人民共和国がその代表例、\nソマリランドは知らんが、朝鮮民主主義人民共和国は大韓民国と結んだ条約に関係している。",
	"君が代は3番まである、(そもそも日本の国歌ではないので、公式な歌詞は存在しない)\n1番\n```\n君が代は\n千代に八千代に\nさざれ石の\n巌となりて\n苔のむすまで\n```\n2番\n```\n君が代は\n千尋の底の\nさざれ石の\n鵜のゐる磯と\nあらはるるまで\n```"
];

export class MAMECHISHIKI{
	async Main(message:Message){
		const RND = Math.floor(Math.random() * MAMECHISHIKI_LIST.length);

		//豆知識があるか
		if(MAMECHISHIKI_LIST[RND]){
			message.reply(MAMECHISHIKI_LIST[RND]);
		}
	}
}