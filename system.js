
/*システムデータ*/
var system_data={
cleargame:0,
flag1:"",
flag2:""
};

/*表示しているデータ*/
var now_data={
no:"",
bg:"",
chara1:"",
chara2:"",
chara3:"",
effect:"",
textaria:"",
text:"",
choice1:"",
choice2:"",
choice3:"",
go1:"",
go2:"",
go3:"",
bgm:"",
se:""
};

/*読み込み先データ*/
var next_data;

/*セーブロードフラグ*/
var flag=0;

/*読み込み場所データ*/
var texter=0;

/*各種ディレクトリルートのショートカット*/
var bgroot="img/bg/";
var chararoot="img/chara/";
var effectroot="img/effect/";
var textariaroot="img/box/";
var bgmroot="bgm/";
var seroot="se/";

/*画面の初期化*/
function dispinit(){
document.getElementById("bg").src=now_data.bg="";
document.getElementById("chara1").src=now_data.chara1=chararoot+"clear.png";
document.getElementById("chara2").src=now_data.chara2=chararoot+"clear.png";
document.getElementById("chara3").src=now_data.chara3=chararoot+"clear.png";
document.getElementById("effect").src=now_data.effect="";
document.getElementById("textaria").src=now_data.textaria="";
document.getElementById("text").innerHTML=now_data.text="";
document.getElementById("choice1").value=now_data.choice1="";
document.getElementById("choice2").value=now_data.choice2="";
document.getElementById("choice3").value=now_data.choice3="";
document.getElementById("choice1").style.display="none";
document.getElementById("choice2").style.display="none";
document.getElementById("choice3").style.display="none";
document.getElementById("bgm").src=now_data.bgm="";
document.getElementById("se").src=now_data.se="";
}

/*動作メイン処理*/
function mainexe(){

/*次の場所を検索*/
texter++;
next_text();

/*一時的に格納されたデータを読み込み*/
next_data=JSON.parse(sessionStorage.noveldata);

/*ナンバーとの同期*/
now_data.no=texter;

/*背景が変更になったときの処理*/
if(next_data.bg){
now_data.bg=bgroot+next_data.bg+".png";
document.getElementById("bg").src=now_data.bg;
}

/*キャラクターが変更になったときの処理*/
if(next_data.chara1){
now_data.chara1=chararoot+next_data.chara1+".png";
document.getElementById("chara1").src=now_data.chara1;
}
if(next_data.chara2){
now_data.chara2=chararoot+next_data.chara2+".png";
document.getElementById("chara2").src=now_data.chara2;
}
if(next_data.chara3){
now_data.chara3=chararoot+next_data.chara3+".png";
document.getElementById("chara3").src=now_data.chara3;
}

/*エフェクトが変更になったときの処理*/
if(next_data.effect){
now_data.effect=effectroot+next_data.effect+".png";
document.getElementById("effect").src=now_data.effect;
}

/*テキストエリアが変更になったときの処理*/
if(next_data.textaria){
now_data.textaria=textariaroot+next_data.textaria+".png";
document.getElementById("textaria").src=now_data.textaria;
}

/*テキストが変更になったときの処理*/
if(next_data.text){
now_data.text=next_data.text;
document.getElementById("text").innerHTML=now_data.text;
}

/*ボタンが出現しているか判定*/
if(next_data.choice1||next_data.choice2||next_data.choice3){

/*nextボタンを消して進めなくする*/
document.getElementById("next").style.display="none";

/*ボタンの表示*/
if(next_data.choice1){
now_data.choice1=next_data.choice1;
document.getElementById("choice1").value=now_data.choice1;
document.getElementById("choice1").style.display="block";
}
if(next_data.choice2){
now_data.choice2=next_data.choice2;
document.getElementById("choice2").value=now_data.choice2;
document.getElementById("choice2").style.display="block";
}
if(next_data.choice3){
now_data.choice3=next_data.choice3;
document.getElementById("choice3").value=now_data.choice3;
document.getElementById("choice3").style.display="block";
}

}

/*ボタンの非表示*/
else{
document.getElementById("next").style.display="block";
document.getElementById("choice1").style.display="none";
document.getElementById("choice2").style.display="none";
document.getElementById("choice3").style.display="none";
}

/*bgmが変更になったときの処理*/
if(next_data.bgm){
if(next_data.bgm=="stop"){
document.getElementById("bgm").stop();
}
else if(next_data.bgm=="play"){
document.getElementById("bgm").play();
}
else{
now_data.bgm=bgmroot+next_data+".mp3";
document.getElementById("bgm").src=now_data.bgm;
document.getElementById("bgm").play();
}
}

/*seが変更になったときの処理*/
if(next_data.se){
if(next_data.se=="stop"){
document.getElementById("se").stop();
}
else if(next_data.se=="play"){
document.getElementById("se").play();
}
else{
now_data.se=seroot+next_data+".mp3";
document.getElementById("se").src=now_data.se;
document.getElementById("se").play();
}
}

/*ゲームをクリアした時の処理*/
if(next_data.clear){
system_data.cleargame++;
texter=0;
localStorage.nsd=JSON.stringify(system_data);
dispinit();
}
i--;
}

/*menuを表示した時の処理*/
function menuscreen(){
flag=1;
document.getElementById("next").style.display="none";
document.getElementById("choice1").value="save";
document.getElementById("choice1").style.display="block";
document.getElementById("choice2").value="load";
document.getElementById("choice2").style.display="block";
document.getElementById("choice3").value="back";
document.getElementById("choice3").style.display="block";
}

/*選択肢の処理*/
function branch(f){
if(eval("next_data.go"+f)==9998){
saveset();
}
else if(eval("next_data.go"+f)==9999){
loadset();
}
else{
texter=eval("next_data.go"+f)-1;
mainexe();
}
}

/*セーブ処理*/
function saveset(){
flag=2;
document.getElementById("choice1").value="save";
document.getElementById("choice1").style.display="block";
document.getElementById("choice2").value="delete";
document.getElementById("choice2").style.display="block";
document.getElementById("choice3").value="back";
document.getElementById("choice3").style.display="block";
}

/*ロード処理*/
function loadset(){
flag=3;
document.getElementById("choice1").value="load";
document.getElementById("choice1").style.display="block";
document.getElementById("choice2").value="delete";
document.getElementById("choice2").style.display="block";
document.getElementById("choice3").value="back";
document.getElementById("choice3").style.display="block";
}

/*セーブ実行*/
function saveexe(){
localStorage.noveldata=JSON.stringify(now_data);
flag=0;
document.getElementById("next").style.display="block";
document.getElementById("choice1").style.display="none";
document.getElementById("choice2").style.display="none";
document.getElementById("choice3").style.display="none";
texter=now_data.no-1;
mainexe();
}

/*削除実行*/
function deleteexe(){
flag=0;
delete localStorage.noveldata;
texter=now_data.no-1;
document.getElementById("next").style.display="block";
document.getElementById("choice1").style.display="none";
document.getElementById("choice2").style.display="none";
document.getElementById("choice3").style.display="none";
mainexe();
}

/*バック実行*/
function backexe(){
flag=0;
document.getElementById("next").style.display="block";
document.getElementById("choice1").style.display="none";
document.getElementById("choice2").style.display="none";
document.getElementById("choice3").style.display="none";
localStorage.nsd=JSON.stringify(system_data);
texter=next_data.no-1;
mainexe();
}

/*ロード実行*/
function loadexe(){
next_data=JSON.parse(localStorage.noveldata);
flag=0;
dispinit();
document.getElementById("next").style.display="block";
document.getElementById("bg").src=next_data.bg;
document.getElementById("chara1").src=next_data.chara1;
document.getElementById("chara2").src=next_data.chara2;
document.getElementById("chara3").src=next_data.chara3;
document.getElementById("effect").src=next_data.effect;
document.getElementById("textaria").src=next_data.textaria;
document.getElementById("text").innerHTML=next_data.text;
document.getElementById("choice1").value=next_data.choice1;
document.getElementById("choice2").value=next_data.choice2;
document.getElementById("choice3").value=next_data.choice3;
document.getElementById("choice1").style.display="none";
document.getElementById("choice2").style.display="none";
document.getElementById("choice3").style.display="none";
document.getElementById("bgm").src=next_data.bgm;
document.getElementById("se").src=next_data.se;

texter=next_data.no-1;
mainexe();
}


/*先システムデータ読み込み*/
function flowchart(){
dispinit();
  if(!localStorage.nsd){
   localStorage.nsd=JSON.stringify(system_data);
  }
  else{
   system_data=JSON.parse(localStorage.nsd);
  }
mainexe();
}
