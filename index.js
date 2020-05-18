//ボタンを押した時の処理
function setImage(id){
    var images = ['img/f0.png', 'img/f1.png','img/f2.png','img/f3.png','img/f4.png', 'img/f5.png'];
    //画像はランダムで表示させたい
    var i = parseInt(Math.random() * 5);
    document.getElementById(id).src = images[i];
}

//絵柄が揃ったときの処理
document.addEventListener("DOMContentLoaded", function(){
  var slot = document.getElementById('slot');
  slot.addEventListener("click", function(){
      var btn = slot.getElementsByTagName('img')
      var clear = document.getElementById('clear')
      if(btn[0].src === btn[1].src && btn[0].src === btn[2].src){
          clear.innerHTML = 'おめでとう！100万円だ！！';
      }else{
          clear.innerHTML = '';
      }
  });
});