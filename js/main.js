let timerShow = document.getElementById("timer");
let abobus = document.getElementById("abobus");
let second = document.querySelector(".second-main");
let open = document.querySelector(".open-picture");
let closed = document.querySelector(".closed");
let main = document.querySelector('.main');
let buy = document.querySelectorAll('.buy');
let timeMinute = 10;



    window.addEventListener('load', function() {

        let timer = setInterval(function () {
            if (timeMinute < 0) {
                clearInterval(timer);
                timerShow.innerHTML = 'ВРЕМЯ ВЫШЛО ИГРА ОКОНЕЧНА';
            }
            --timeMinute; // Уменьшаем таймер
        }, 1000)
    })



    let calculate = 1500
    let count = document.getElementById("buttonCountNumber");
    calculation = document.getElementById("calculation").innerHTML;

    document.getElementById("buttonCountPlus").onclick = function() {
        timeMinute = 10
        let countPlus = count.innerHTML;
        if(+countPlus <= 10){
            count.innerHTML++;
            let countPlus = count.innerHTML;
            calculate = calculations(countPlus) ;
        }
        else if(+countPlus >= 10){
            buy.classList.toggle('no');
            timeMinute = 10000000000000000000000;

        }
    }
    let text = document.getElementsByClassName("text");
    document.getElementById("buttonCountMinus").onclick = function() {
        $('.buy').addClass('no')
        timeMinute = 10000000000000000000000

    }
    let h1 = document.getElementsByTagName('h1')[0];
    calculations = (count) => {
        let text = (+count)*(+calculation);


        h1.innerHTML = 'Готовы ли отдать за этот контейнер отдать ' + text + '?';
    }

var videoEl = document.getElementsByTagName('video')[0]
function f() {
    $('.video-second').addClass('active')
    $('.open-picture').addClass('active');
}

$(document).ready(function() {
    $(".closed").click(function () {
        $('.closed').addClass('active')
        $('.open-picture').addClass('active');
        $('.cost').addClass('active');
        $('.interesting').removeClass('no')
        $('.smth').addClass('visible')
    })
        $(".chat-info").click(function () {
            $('.chat').toggleClass('active')
            $('.chat-input').toggleClass('active')
            $('.chat-info-svg').toggleClass('active')
    })
})

var info =[

    {
        id: 4,
        picture: '<img src="img/container-4.png">'
    },
    {
        id: 5,
        picture: '<img src="img/container-5.png">'
    }
]

function arrayRandElement() {
    var rand = Math.floor(Math.random() * info.length);
    return info[rand];
}

const infoPicture = arrayRandElement(info).picture;
    const infoPictureImg =
document.querySelector('.open-picture').innerHTML= infoPicture ;



var pictureInner =[
    {
        id: 1,
        picture: '<img class="smth" style="width: 100px" src="img/shop-1.png">',
        cost: '<div class = "nnt-int"> 100</div>',
        price: 100
    },
    {
        id: 2,
        picture: '<img class="smth" style="width: 350px" src="img/shop-2.png">',
        cost: '<div class = "nnt-int"> 250</div>',
        price: 250
    },
    {
        id: 3,
        picture: '<img class="smth" style="width: 350px" src="img/shop-3.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 4,
        picture: '<img class="smth" style="width: 180px" src="img/shop-4.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 5,
        picture: '<img class="smth" style="width: 150px" src="img/shop-5.png">',
        cost: '<div class = "nnt-int"> 70</div>',
        price: 70
    },
    {
        id: 6,
        picture: '<img class="smth" style="width: 150px" src="img/shop-6.png">',
        cost: '<div class = "nnt-int"> 100</div>',
        price: 100
    },
    {
        id: 7,
        picture: '<img class="smth" style="width: 330px; position: absolute" src="img/shop-7.png">',
        cost: '<div class = "nnt-int"> 600</div>',
        price: 600
    },
    {
        id: 8,
        picture: '<img class="smth" style="width: 180px" src="img/shop-8.png">',
        cost: '<div class = "nnt-int">200</div>',
        price: 200
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 180px" src="img/shop-9.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 10,
        picture: '<img class="smth" style="width: 130px" src="img/shop-10.png">',
        cost: '<div class = "nnt-int"> 200</div>',
        price: 200
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 130px" src="img/shop-11.png">',
        cost: '<div class = "nnt-int"> 200</div>',
        price: 200
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 190px" src="img/shop-12.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 180px" src="img/shop-13.png">',
        cost: '<div class = "nnt-int"> 1000</div>',
        price: 1000
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 75px" src="img/shop-14.png">',
        cost: '<div class = "nnt-int"> 1000</div>',
        price: 1000
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 75px" src="img/shop-15.png">',
        cost: '<div class = "nnt-int"> 500</div>',
        price: 500
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 75px" src="img/shop-16.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 500
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 75px" src="img/shop-17.png">',
        cost: '<div class = "nnt-int"> 320</div>',
        price: 320
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 270px" src="img/shop-18.png">',
        cost: '<div class = "nnt-int"> 700</div>',
        price: 700
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 270px" src="img/shop-19.png">',
        cost: '<div class = "nnt-int"> 1300</div>',
        price: 1300
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 270px" src="img/shop-20.png">',
        cost: '<div class = "nnt-int"> 1200</div>',
        price: 1200
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 200px" src="img/shop-21.png">',
        cost: '<div class = "nnt-int"> 3000</div>',
        price: 3000
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 220px" src="img/shop-22.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 170px" src="img/shop-23.png">',
        cost: '<div class = "nnt-int"> 400</div>',
        price: 400
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 180px" src="img/shop-24.png">',
        cost: '<div class = "nnt-int">0</div>',
        price: 0
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 90px" src="img/shop-25.png">',
        cost: '<div class = "nnt-int"> 10</div>',
        price: 10
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 160px" src="img/shop-26.png">',
        cost: '<div class = "nnt-int"> 107</div>',
        price: 107
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 150px" src="img/shop-27.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 300px" src="img/shop-28.png">',
        cost: '<div class = "nnt-int"> 2100</div>',
        price: 2100
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 240px" src="img/shop-29.png">',
        cost: '<div class = "nnt-int"> 100</div>',
        price: 100
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 180px" src="img/shop-30.png">',
        cost: '<div class = "nnt-int"> 850</div>',
        price: 850
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 160px" src="img/shop-31.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 160px" src="img/shop-32.png">',
        cost: '<div class = "nnt-int"> 1000</div>',
        price: 1000
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 180px" src="img/shop-33.png">',
        cost: '<div class = "nnt-int"> 1105</div>',
        price: 1105
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 220px" src="img/shop-34.png">',
        cost: '<div class = "nnt-int"> 1400</div>',
        price: 1400
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 200px" src="img/shop-35.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 230px" src="img/shop-36.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 240px" src="img/shop-37.png">',
        cost: '<div class = "nnt-int"> 1700</div>',
        price: 1700
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 100px" src="img/shop-38.png">',
        cost: '<div class = "nnt-int"> 700</div>',
        price: 700
    },
    {
        id: 9,
        picture: '<img class="smth" style="width: 230px" src="img/shop-39.png">',
        cost: '<div class = "nnt-int"> 800</div>',
        price: 800
    },
    {
        id: 9,
        picture: '<img class="smth " style="width: 130px" src="img/shop-40.png">',
        cost: '<div class = "nnt-int"> 100</div>',
        price: 100
    },
    {
        id: 41,
        picture: '<img class="smth" style="width: 130px" src="img/shop-41.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 42,
        picture: '<img class="smth" style="width: 130px" src="img/shop-42.png">',
        cost: '<div class = "nnt-int"> 350</div>',
        price: 350
    },
    {
        id: 43,
        picture: '<img class="smth" style="width: 170px" src="img/shop-43.png">',
        cost: '<div class = "nnt-int"> 400</div>',
        price: 400
    },
    {
        id: 44,
        picture: '<img class="smth" style="width: 130px" src="img/shop-44.png">',
        cost: '<div class = "nnt-int"> 240</div>',
        price: 240
    },
    {
        id: 45,
        picture: '<img class="smth" style="width: 130px" src="img/shop-45.png">',
        cost: '<div class = "nnt-int"> 150</div>',
        price: 150
    },
    {
        id: 46,
        picture: '<img class="smth" style="width: 120px" src="img/shop-46.png">',
        cost: '<div class = "nnt-int"> 400</div>',
        price: 400
    },
    {
        id: 47,
        picture: '<img class="smth" style="width: 130px" src="img/shop-47.png">',
        cost: '<div class = "nnt-int"> 550</div>',
        price: 550
    },
    {
        id: 48,
        picture: '<img class="smth" style="width: 200px" src="img/shop-48.png">',
        cost: '<div class = "nnt-int">700</div>',
        price: 700
    },
    {
        id: 49,
        picture: '<img class="smth" style="width: 80px; position: absolute" src="img/shop-49.png">',
        cost: '<div class = "nnt-int"> 2000</div>',
        price: 2000
    },
    {
        id: 50,
        picture: '<img class="smth" style="width: 140px" src="img/shop-50.png">',
        cost: '<div class = "nnt-int"> 100</div>',
        price: 100
    },
    {
        id: 51,
        picture: '<img class="smth" style="width: 250px" src="img/shop-51.png">',
        cost: '<div class = "nnt-int"> 620</div>',
        price: 620
    },
    {
        id: 52,
        picture: '<img class="smth" style="width: 150px" src="img/shop-52.png">',
        cost: '<div class = "nnt-int"> 150</div>',
        price: 150
    },
    {
        id: 53,
        picture: '<img class="smth" style="width: 300px" src="img/shop-53.png">',
        cost: '<div class = "nnt-int"> 2000</div>',
        price: 2000
    },
    {
        id: 54,
        picture: '<img class="smth" style="width: 200px" src="img/shop-54.png">',
        cost: '<div class = "nnt-int"> 400</div>',
        price: 400
    },
    {
        id: 55,
        picture: '<img class="smth" style="width: 160px" src="img/shop-55.png">',
        cost: '<div class = "nnt-int"> 5000</div>',
        price: 5000
    },
    {
        id: 56,
        picture: '<img class="smth" style="width: 100px" src="img/shop-56.png">',
        cost: '<div class = "nnt-int"> 3600</div>',
        price: 3600
    },
    {
        id: 57,
        picture: '<img class="smth" style="width: 220px" src="img/shop-57.png">',
        cost: '<div class = "nnt-int"> 700</div>',
        price: 700
    },
    {
        id: 58,
        picture: '<img class="smth" style="width: 200px" src="img/shop-58.png">',
        cost: '<div class = "nnt-int">500</div>',
        price: 500
    },
    {
        id: 59,
        picture: '<img class="smth" style="width: 200px" src="img/shop-59.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 60,
        picture: '<img class="smth" style="width: 200px" src="img/shop-60.png">',
        cost: '<div class = "nnt-int"> 700</div>',
        price: 700
    },
    {
        id: 61,
        picture: '<img class="smth" style="width: 60px; margin-top: 20px"src="img/shop-61.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 62,
        picture: '<img class="smth" style="width: 120px" src="img/shop-62.png">',
        cost: '<div class = "nnt-int"> 350</div>',
        price: 350
    },
    {
        id: 63,
        picture: '<img class="smth" style="width: 120px" src="img/shop-63.png">',
        cost: '<div class = "nnt-int"> 200</div>',
        price: 200
    },
    {
        id: 64,
        picture: '<img class="smth" style="width: 120px" src="img/shop-64.png">',
        cost: '<div class = "nnt-int"> 400</div>',
        price: 400
    },
    {
        id: 65,
        picture: '<img class="smth" style="width: 120px" src="img/shop-65.png">',
        cost: '<div class = "nnt-int"> 500</div>',
        price: 500
    },
    {
        id: 66,
        picture: '<img class="smth" style="width: 120px" src="img/shop-66.png">',
        cost: '<div class = "nnt-int"> 600</div>',
        price: 600
    },
    {
        id: 67,
        picture: '<img class="smth" style="width: 120px" src="img/shop-67.png">',
        cost: '<div class = "nnt-int"> 700</div>',
        price: 700
    },
    {
        id: 68,
        picture: '<img class="smth" style="width: 120px" src="img/shop-68.png">',
        cost: '<div class = "nnt-int">500</div>',
        price: 500
    },
    {
        id: 69,
        picture: '<img class="smth" style="width: 150px" src="img/shop-69.png">',
        cost: '<div class = "nnt-int"> 1200</div>',
        price: 1200
    },
    {
        id: 70,
        picture: '<img class="smth" style="width: 150px" src="img/shop-70.png">',
        cost: '<div class = "nnt-int"> 650</div>',
        price: 650
    },
    {
        id: 71,
        picture: '<img class="smth" style="width: 150px" src="img/shop-71.png">',
        cost: '<div class = "nnt-int"> 400</div>',
        price: 400
    },
    {
        id: 72,
        picture: '<img class="smth" style="width: 150px" src="img/shop-72.png">',
        cost: '<div class = "nnt-int"> 1350</div>',
        price: 1350
    },
    {
        id: 73,
        picture: '<img class="smth" style="width: 150px" src="img/shop-73.png">',
        cost: '<div class = "nnt-int">1200</div>',
        price: 1200
    },
    {
        id: 74,
        picture: '<img class="smth" style="width: 120px" src="img/shop-74.png">',
        cost: '<div class = "nnt-int"> 1400</div>',
        price: 1400
    },
    {
        id: 75,
        picture: '<img class="smth" style="width: 100px" src="img/shop-75.png">',
        cost: '<div class = "nnt-int"> 500</div>',
        price: 500
    },
    {
        id: 76,
        picture: '<img class="smth" style="width: 160px" src="img/shop-76.png">',
        cost: '<div class = "nnt-int"> 600</div>',
        price: 600
    },
    {
        id: 77,
        picture: '<img class="smth" style="width: 120px" src="img/shop-77.png">',
        cost: '<div class = "nnt-int"> 1700</div>',
        price: 1700
    },
    {
        id: 78,
        picture: '<img class="smth" style="width: 220px;" src="img/shop-78.png">',
        cost: '<div class = "nnt-int">500</div>',
        price: 500
    },
    {
        id: 79,
        picture: '<img class="smth" style="width: 120px" src="img/shop-79.png">',
        cost: '<div class = "nnt-int"> 1000</div>',
        price: 1000
    },
    {
        id: 80,
        picture: '<img class="smth" style="width: 120px" src="img/shop-80.png">',
        cost: '<div class = "nnt-int"> 1400</div>',
        price: 1400
    },
    {
        id: 81,
        picture: '<img class="smth" style="width: 120px; height: 120px" src="img/shop-81.png">',
        cost: '<div class = "nnt-int"> 500</div>',
        price: 500
    },
    {
        id: 82,
        picture: '<img class="smth" style="width: 120px" src="img/shop-82.png">',
        cost: '<div class = "nnt-int"> 350</div>',
        price: 350
    },
    {
        id: 83,
        picture: '<img class="smth" style="width: 200px" src="img/shop-83.png">',
        cost: '<div class = "nnt-int"> 200</div>',
        price: 200
    },
    {
        id: 84,
        picture: '<img class="smth" style="width: 120px" src="img/shop-84.png">',
        cost: '<div class = "nnt-int"> 75</div>',
        price: 75
    },
    {
        id: 85,
        picture: '<img class="smth" style="width: 200px" src="img/shop-85.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 86,
        picture: '<img class="smth" style="width: 170px" src="img/shop-86.png">',
        cost: '<div class = "nnt-int"> 1600</div>',
        price: 1600
    },
    {
        id: 87,
        picture: '<img class="smth" style="width: 150px" src="img/shop-87.png">',
        cost: '<div class = "nnt-int"> 1700</div>',
        price: 1700
    },
    {
        id: 88,
        picture: '<img class="smth" style="width: 150px" src="img/shop-88.png">',
        cost: '<div class = "nnt-int">500</div>',
        price: 500
    },
    {
        id: 89,
        picture: '<img class="smth" style="width: 120px" src="img/shop-89.png">',
        cost: '<div class = "nnt-int"> 3000</div>',
        price: 3000
    },
    {
        id: 90,
        picture: '<img class="smth" style="width: 120px" src="img/shop-90.png">',
        cost: '<div class = "nnt-int"> 2200</div>',
        price: 2200
    },
    {
        id: 91,
        picture: '<img class="smth" style="width: 200px" src="img/shop-91.png">',
        cost: '<div class = "nnt-int"> 300</div>',
        price: 300
    },
    {
        id: 92,
        picture: '<img class="smth" style="width: 200px" src="img/shop-92.png">',
        cost: '<div class = "nnt-int"> 250</div>',
        price: 250
    },
    {
        id: 93,
        picture: '<img class="smth" style="width: 120px" src="img/shop-93.png">',
        cost: '<div class = "nnt-int"> 45</div>',
        price: 45
    },
    {
        id: 94,
        picture: '<img class="smth" style="width: 200px" src="img/shop-94.png">',
        cost: '<div class = "nnt-int"> 400</div>',
        price: 400
    },
    {
        id: 95,
        picture: '<img class="smth" style="width: 150px" src="img/shop-95.png">',
        cost: '<div class = "nnt-int"> 500</div>',
        price: 500
    },
    {
        id: 96,
        picture: '<img class="smth" style="width: 120px" src="img/shop-96.png">',
        cost: '<div class = "nnt-int"> 600</div>',
        price: 600
    },
    {
        id: 97,
        picture: '<img class="smth" style="width: 250px" src="img/shop-97.png">',
        cost: '<div class = "nnt-int"> 700</div>',
        price: 700
    },
    {
        id: 98,
        picture: '<img class="smth" style="width: 200px" src="img/shop-98.png">',
        cost: '<div class = "nnt-int">2000</div>',
        price: 2000
    },
    {
        id: 99,
        picture: '<img class="smth" style="width: 200px" src="img/shop-99.png">',
        cost: '<div class = "nnt-int"> 700</div>',
        price: 700
    },
    {
        id: 100,
        picture: '<img class="smth" style="width: 80px" src="img/shop-100.png">',
        cost: '<div class = "nnt-int"> 1300</div>',
        price: 1300
    },
]



var arrayForBuy = []
var ab = []
var ad = []
function arrayRand() {

    var random = Math.floor(Math.random() * pictureInner.length);
    return pictureInner[random];
}
var abs =[]
var d;
for (var i = 0; i < 5; i++){
    const pictureInnerIn =  arrayRand(pictureInner);
    arrayForBuy.push(pictureInnerIn)
    var a = pictureInnerIn.picture;
    ab.push(a)
    var b = pictureInnerIn.cost;
    var d = pictureInnerIn.price;
    abs.push(d)
    ad.push(b)

}
console.log(arrayForBuy)
var arrr = arrayForBuy.reduce((a, b) => a + b.price, 0);
console.log(arrr)
const pictureInnerInformation = document.querySelector('.not-interesting').innerHTML= ad.join(' ');
console.log(ab)
const pictureInnerInform = document.querySelector('.interesting').innerHTML= ab.join(' ');
var interesting = document.getElementsByClassName('smth')



    for (var i = 0; i < interesting.length; i++){
        interesting[i].addEventListener('click',function () {
            this.classList.remove('visible')
            this.classList.add('active')
            })
    }




var buttons = [];
var targets = [];


var myMoney = 20000
const moneyall = document.querySelector('.money').innerHTML= myMoney;
var button = document.querySelectorAll('.smth');
var target = document.querySelectorAll('.nnt-int');

[].forEach.call(button, function(but, ind) {
    but.addEventListener('click', function() {
        target[ind].classList.add('active');

    });
});


buttons.push(button)

targets.push(target)
