/*
ゲームの説明

var novel[番号]={
no:[番号],
bg:[背景名],
chara1:[キャラクター1名],
chara2:[キャラクター2名],
chara3:[キャラクター3名],
effect:[エフェクト名],
textaria:[テキストエリア名],
text:[テキスト],
choice1:[選択肢1テキスト],
choice2:[選択肢2テキスト],
choice3:[選択肢3テキスト],
go1:[選択肢1行き先],
go2:[選択肢2行き先],
go3:[選択肢3行き先],
bgm:[BGM名],
se:[se名]
clear:[ゲーム終了時の値。※今のところ存在だけを判断]
};

予約番号9999ロード用
予約番号9998セーブ用

基本的にデータは保持します。
キャラクターを消したい時などは空のpngなどを用意してください。


*/





var novel1={
no:1,
text:"やさしい神さま",
bg:"mizu"
};
var novel2={
no:2,
choice1:"初めから",
choice2:"続きから",
go1:3,
go2:9999,
};
var novel3={
no:3,
bg:"kusa",
textaria:"textbox",
text:"神さまは月におわします。",
chara2:"kami1"
};
var novel4={
no:4,
textaria:"textbox",
text:"空を、海を、大地を、命をおつくりになりました。"

};
var novel5={
no:5,
text:"人と天使を愛する心やさしい神さま。",
chara1:"hito1",
chara3:"tenshi1"
};
var novel6={
no:6,
text:"楽園で人々と天使たちは神さまのお膝元、幸せに暮らしておりました。"
};

var novel7={
ne:7,
text:"ある日、人は神さまの言い付けを破ってしまいます。",
chara1:"hito3"
};
var novel8={
ne:8,
text:"神さまはひどくお怒りになりました。",
chara2:"kami3"
};
var novel9={
ne:9,
text:"心やさしい神さまは、人を楽園から追放することでその罪をお許しになられたのです。",
chara1:"clear",
chara2:"kami1"
};
var novel10={
ne:10,
text:"やさしい神さまはそれでも人を愛し、何もなかった地上に、光と水と風とをお与えになりま<br>した。",
chara2:"kami2"
};
var novel11={
ne:11,
text:"楽園には、神さまにとても愛されていた天使がおりました。"
};
var novel12={
ne:12,
text:"天使は次第におごり、神さまになり代わって世界を自分のものにしようと、神さまに刃を向<br>けたのです。",
chara3:"tenshi2"
};
var novel13={
ne:13,
text:"神さまは悲しみましたが、そのお力をもって天使を退けます。",
chara2:"kami3",
chara3:"clear"
};
var novel14={
ne:14,
bg:"machi",
text:"やさしい神さまは天使を殺せず、羽根を焼き、地上へとおとしました。",
chara2:"clear",
chara3:"tenshi3"
};
var novel15={
ne:15,
text:"羽根を失った天使は神さまを憎み、神さまに愛される人を襲うようになりました。",
chara1:"hito1"
};
var novel16={
ne:16,
text:"天使はやがて悪魔となり、醜い肉の翼で飛び人々を苦しめました。",
chara1:"hito3",
chara3:"akuma1"
};
var novel17={
ne:17,
text:"神さまは地上に遣いを出し、悪魔はまたしても退けられます。",
chara1:"hito2",
chara2:"tenshi2",
chara3:"clear"
};
var novel18={
no:18,
choice1:"お礼を言う。",
choice2:"何も言わない。",
choice3:"逆ギレする。",
go1:19,
go2:30,
go3:40
};
var novel19={
no:19,
text:"ありがとう。"
};
var novel20={
ne:20,
text:"そして神さまは、これからもずっと人を愛し、見守り続けて行くことをわたしたちにお告げに<br>なり、魔は鎮められ、人が滅ぶことは決してなくなったのです。",
chara2:"kami2"
};
var novel21={
ne:21,
text:"神さまは月におわします。",
chara1:"clear",
chara2:"kami2"
};
var novel22={
ne:22,
text:"今もわたしたち人を愛し、守ってくださっているのです。"
};
var novel23={
ne:23,
clear:1
};
var novel30={
no:30,
text:"…。"
};
var novel31={
no:31,
text:"神は悲しくなりました。"
};
var novel32={
no:32,
text:"神は人を見放し、人々は絶滅しました。"
};
var novel33={
ne:33,
clear:1
};
var novel40={
ne:40,
text:"何で邪魔してんだよ<(｀^´)>"
};
var novel41={
no:41,
text:"神は悲しくなりました。"
};
var novel42={
no:42,
text:"神は人を見放し、人々は絶滅しました。"
};
var novel43={
ne:43,
clear:1
};

/*ここから下はシステムデータ*/
var i=0;
function dataset(){
sessionStorage.noveldata=JSON.stringify(eval("novel"+i));
}
/*ここまでシステムデータ*/