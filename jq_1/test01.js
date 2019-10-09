var number = prompt('あなたの選んだ数は？');
if(number>0){
  alert('正の数');
}else if (number<0){
  alert('負の数');
}else if (number==0){
  alert('0です');
}else{
  alert('数値を入力してください');
}

var animals=['パンダ','ライオン','キリン'];
var i=0;
while (i<animals.length){
  alert(animals[i]);
  i++;
}

var animal = prompt('動物は？');
var animals=['パンダ','ライオン','キリン'];
var i=0;
while (i<animals.length){
  if(animal=='ライオン') {
  break;
  }
  alert(animals[i]);
  i++;
}

var animal = prompt('動物は？');
var animals=['パンダ','ライオン','キリン'];
var i=0;
while (i<animals.length){
  if(animal=='ライオン') {
    alert(i);
  break;
  }
  alert(animals[i]);
  i++;
}

var animal = prompt('動物は？');
var animals=[
  {'name':'パンダ','weight':80},
  {'name':'ライオン','weight':200},
  {'name':'キリン','weight':300}
];
switch(animal){
  case 'パンダ':
    alert('パンダの体重は80(Kg)です');
    break;
   case 'ライオン':
    alert('パンダの体重は200(Kg)です');
    break;
   case 'キリン':
    alert('パンダの体重は300(Kg)です');
    break;
}
//問6直し
var animal = prompt('動物は？');
var animals=[
  {'name':'パンダ','weight':80},
  {'name':'ライオン','weight':200},
  {'name':'キリン','weight':300}
];
animals.forEach(function(val){
  if (val.name == animal) {
    alert(val.weight); 
  }
});


var number = prompt('円の半径は？');
alert('円の半径は'+3.14*number*number+'です');
//問7 直し
function alert_circle_area(r){
  alert('円の半径は'+3.14*r*r+'です')
}
var number = prompt('円の半径は？');
alert_circle_area(number);

/*
comment
alert('外部ファイル');
var a=1;
var b=2;
var c=a+b;
alert(c);

var A='りんご';
var B='バナナ';
var C=A+B;
alert(C);

var fruits=['りんご','バナナ'];
alert(fruits[0]);
alert(fruits[1]);
var fruits=['りんご',100];
alert(fruits[0]);
alert(fruits[1]);

var fruits={'name':'りんご','price':100};
alert(fruits['name']);
alert(fruits.name);
alert(fruits['price']);
alert(fruits.price);

var fruits=[
  {'name':'りんご','price':100},
  {'name':'バナナ','price':150},
  {'name':'いちご','price':200}
];
alert(fruits[1].price);

var answer = prompt('1+1は？');
alert(answer);

var answer = prompt('1+1は？');
if(answer==2) {
  alert('正解');
}else{
  alert('不正解');
}

var answer = prompt('バナナとりんごはどちらが好きですか？');
if(answer=='りんご') {
  alert('りんごは英語でappleです');
}else if(answer=='バナナ'){
  alert('バナナは英語でbananaです');
}else{
  alert('りんご or バナナを入力してください');
}
var answer = prompt('バナナとりんごはどちらが好きですか？');
switch(answer) {
  case 'りんご':
    alert('りんごは英語でappleです');
    break;
  case 'バナナ':
    alert('バナナは英語でbananaです');
    break;
  default:
    alert('りんご or バナナを入力してください');
    break;
}

var fruits=['りんご','バナナ','いちご','ぶどう','もも','キウイ','メロン','すいか','みかん','さくらんぼ'];

for (var i=0;i<fruits.length;i++){
  alert(fruits[i]);
}
var fruits=['りんご','バナナ','いちご','ぶどう','もも','キウイ','メロン','すいか','みかん','さくらんぼ'];

var i=0;
while (i<fruits.length){
  alert(fruits[i]);
  i++;
}
var fruits=['りんご','バナナ','いちご','ぶどう','もも','キウイ','メロン','すいか','みかん','さくらんぼ'];

var i=0;
while (true){
  if(i>=fruits.length){
    break;
  }
  alert(fruits[i]);
  i++;
}

function calc(x){
  return x*2;
}
alert(calc(3));

*/
// comment
