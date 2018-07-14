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

    setTimeout(function() {
        $('.preloader').show(700);
    }, 1000);

    $('.congrats__close').slideDown(1000);
}

$(document).ready(function() {
    $('.congrats__close').click(function() {
        $('.congrats').fadeOut(200);
    });
});

$(document).ready(function() {
    $(".footer-link_popup1").click(function(e) {
        e.preventDefault();
        $(".terms--use").fadeIn(200);
        $('.terms-overlay').fadeIn(200);
    });
    $(".footer-link_popup2").click(function(e) {
        e.preventDefault();
        $(".terms--policy").fadeIn(200);
        $('.terms-overlay').fadeIn(200);
    });

    $(".terms__close, .terms__bg, .terms-overlay").click(function() {
        $(".terms").fadeOut(200);
        $('.terms-overlay').fadeOut(200);
    });
})

function termFade() {
    $(".terms--use").fadeIn(200);
    $('.terms-overlay').fadeIn(200);
}

$('#calc-btn').click(function() {
    var val = $('#value-deposit').val();
    if (val < 500 || isNaN(val)) {
        alert('Минимальная сумма депозита - 500 $ !');
    } else {
        var res = (val * $('select option:selected').val());
        $('#result').text(parseInt(res) + '$');
    }
})


var arrCoin = ['Binance Coin', 'Bitcoin', 'Ethereum', 'XRP', 'EOS', 'Bitcoin Cash', 'Litecoin', 'Stellar', 'IOTA', 'Cardano', 'NEO', 'Monero', 'Dash', 'Tron', 'NEM', 'Ethereum Classic'];

function initCoin(arr, wrap, event) {
    var elem = $(wrap)[0],
    elem1 = $(wrap)[1];


    var randomItem = arr[Math.floor(Math.random() * arr.length)];
    deleteArrayElem(arr, randomItem)


    if ($(elem).html() == '') {
        $(elem).append("<img  src='img/" + randomItem.replace(/\s/g, '') + ".png' class='mw-100 img-card'>").append("<h2 class='title-card bold text-uppercase'>" + randomItem + "</h2>");
        var randomItem1 = arr[Math.floor(Math.random() * arr.length)];

        deleteArrayElem(arr, randomItem1);
        $(elem1).append("<img  src='img/" + randomItem1.replace(/\s/g, '') + ".png' class='mw-100 img-card'>").append("<h2 class='title-card bold text-uppercase'>" + randomItem1 + "</h2>");

    }
    return arr;
}



$(document).ready(function() {
    initCoin(arrCoin, '.card-wrap');
    $('.card-wrap').click(function(event) {
        if (arrCoin.length == 1) {
          replaceElem(event, arrCoin);
          showPrize('.name-prize',arrCoin[0]);
          showPrizeImg('.cup-icon',arrCoin[0])
          $.fn.fullpage.moveSectionDown();

      } else {
        replaceElem(event, arrCoin);
        $('#but1').trigger('click');
    }
})
})

function replaceElem(event, arr) {
    var event = event.target;
    var randomItems = arr[Math.floor(Math.random() * arr.length)];
    if(arr.length > 1){
        deleteArrayElem(arr, randomItems);
    }
    if ($(event).hasClass('card-wrap')) {
        $(event).find('.title-card').text(randomItems);
        $(event).find('.img-card').attr('src', 'img/' + randomItems.replace(/\s/g, '') + '.png');
    } else {
        var elem = $(event).parents('.card-wrap,.title-card,img-card');
        elem.find('.title-card').text(randomItems);
        elem.find('.img-card').attr('src', 'img/' + randomItems.replace(/\s/g, '') + '.png');
    }
}

function showPrize(elem,prize){
    if(elem || prize){
        $(elem).text(prize);
    }
}
function showPrizeImg(elem,prize){
    if(elem || prize){
        $(elem).attr('src','img/cups/' + (prize.replace(/\s/g, '')).toLowerCase() + '.png');
    }
}
function deleteArrayElem(arr, elem) {
    for (var i = arr.length; i--;) {
        if (arr[i] == elem) {
            arr.splice(i, 1);
        }
    }
}



$(document).ready(function() {
    $("#pbar1").progressbar({
        value: 1
    });
    $("#but1").button();
    $("#but1").click(function() {
        $("#pbar1").progressbar("value", $("#pbar1").progressbar("value") + 6.8)
    });
})

var first = 0;
$('#fullpage').fullpage({
            // menu: '#menu',
            // lockAnchors: true,
            // navigation: true,
            // navigationPosition: 'left',
            // showActiveTooltip: true,
            // slidesNavigation: true,
            // slidesNavPosition: 'bottom',
            // scrollBar: true,
            // scrollOverflow: true,
            // autoScrolling:true,
            // scrollHorizontally: true
            scrollHorizontally: true

        });
fullpage_api.setAllowScrolling(false);

$('#btn-next').click(function(){
    $.fn.fullpage.moveSectionDown();
});
