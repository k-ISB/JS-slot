//ボタンを押した時の処理
function setImage(id){
    var images = ['f0.png', 'f1.png','f2.png','f3.png','f4.png', 'f5.png'];
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