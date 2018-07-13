var scene = document.getElementById('parallax');
var parallaxInstance = new Parallax(scene);



function congrats() {

  $('.congrats').fadeIn(200);

  $('.congrats-right__item-1 img').fadeIn().css('transform', 'scale(1)');

  setTimeout(function() {
    $('.congrats-right__item-2 img').fadeIn(750);
  }, 750);

  setTimeout(function() {
    $('.congrats-right__item-3 img').fadeIn(750);

    setTimeout(function() {
      $('.congrats-right__item-3 img').css('animation', 'shake .75s linear');
    }, 500);

  }, 1250);

  $('.congrats-left__title, .congrats-left__text').slideDown(1200);

  setTimeout(function () {
    $('.preloader').show(700);
  }, 1000);

  $('.congrats__close').slideDown(1000);
}

$(document).ready(function () {
  $('.congrats__close').click(function () {
    $('.congrats').fadeOut(200);
  });
});

$(document).ready(function () {
  $(".footer-link_popup1").click(function (e) {
    e.preventDefault();
    $(".terms--use").fadeIn(200);
    $('.terms-overlay').fadeIn(200);
  });
  $(".footer-link_popup2").click(function (e) {
    e.preventDefault();
    $(".terms--policy").fadeIn(200);
    $('.terms-overlay').fadeIn(200);
  });

  $(".terms__close, .terms__bg, .terms-overlay").click(function () {
    $(".terms").fadeOut(200);
    $('.terms-overlay').fadeOut(200);
  });
})

function termFade() {
  $(".terms--use").fadeIn(200);
  $('.terms-overlay').fadeIn(200);
}

$('#calc-btn').click(function(){
 var val = $('#value-deposit').val();
 if( val < 500 || isNaN(val)){
  alert('Минимальная сумма депозита - 500 $ !');
}else{
  var res = (val* $('select option:selected').val());
  $('#result').text(parseInt(res)+'$');
} 
})


var arrCoin = ['Binance Coin','Bitcoin','Ethereum','XRP','EOS','Bitcoin Cash','Litecoin','Stellar','IOTA','Cardano','NEO','Monero','Dash','Tron','NEM','Ethereum Classic'];

function initCoin(arr,wrap,event){
  var elem = $(wrap)[0],
  elem1 = $(wrap)[1];


  var randomItem = arr[Math.floor(Math.random()*arr.length)];
  deleteArrayElem(arr,randomItem)


  if($(elem).html() == ''){
    $(elem).append("<img  src='img/" +  randomItem.replace(/\s/g, '') + ".png' class='mw-100 img-card'>").append("<h2 class='title-card bold text-uppercase'>" + randomItem + "</h2>");
    var randomItem1 = arr[Math.floor(Math.random()*arr.length)];

    deleteArrayElem(arr,randomItem1);
    $(elem1).append("<img  src='img/" +  randomItem1.replace(/\s/g, '') + ".png' class='mw-100 img-card'>").append("<h2 class='title-card bold text-uppercase'>" + randomItem1 + "</h2>");

  }
  return arr;
}

function replaceElem(event,arr){
  var event = event.target;
  var randomItems = arr[Math.floor(Math.random()*arr.length)];

  deleteArrayElem(arr,randomItems);
  // console.log(randomItems);
  // console.log(arr);
  var elem = $(event).parents('.card-wrap');
  elem.find('.title-card').text(randomItems);
  setTimeout(function(){
   elem.find('.img-card').attr('src','img/'+ randomItems.replace(/\s/g, '')  + '.png');
 },250)

}

$(document).ready(function(){
  initCoin(arrCoin,'.card-wrap');

  $('.card-wrap').click(function(event){
    if(arrCoin.length <= 2){
      alert(arrCoin);

    }else{
      // scaleAnim($(this).find('.img-card'))
      replaceElem(event,arrCoin);
      $('#but1').trigger('click');

    }

  })
})

function scaleAnim(elem){

  $(elem).css('transform','rotateX(180deg)');
  setTimeout(function(){
    $(elem).css('transform','rotateX(0deg)')
  },200)
}



function deleteArrayElem(arr,elem){
  for( var i = arr.length-1; i--;){
    if ( arr[i] === elem) {
      arr.splice(i, 1);
    }
  }
}



$(document).ready(function(){
  $("#pbar1").progressbar({value:1});
  $("#but1").button();
  $("#but1").click(function(){ $("#pbar1").progressbar("value", $("#pbar1").progressbar("value")+6.8)});
})


function resizeScroll(){
  var width = $(window).width();
  if(width > 900){
    $('#fullpage').fullpage({
      // menu: '#menu',
    //   lockAnchors: true,
    //   navigation: true,
      scrollBar: true,
    autoScrolling:true,
    verticalCentered: true
      
    });
  }
};

resizeScroll();
