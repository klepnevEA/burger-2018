

$(document).ready(function() {
	$(".reviews__text").dotdotdot({

	});

	// карта 


	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
			center: [55.751574, 37.573856],
			zoom: 9
		}, {
			searchControlProvider: 'yandex#search'
		}),



        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        	'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        	),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        	hintContent: 'Мы тут',
        	balloonContent: 'Мы тут'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemark2 = new ymaps.Placemark([55.661574, 37.573856], {
        	hintContent: 'Мы тут',
        	balloonContent: 'Мы тут'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myPlacemark3 = new ymaps.Placemark([55.761574, 37.673856], {
        	hintContent: 'Мы тут',
        	balloonContent: 'Мы тут'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark2)
        .add(myPlacemark3);

        myMap.behaviors.disable('scrollZoom');
    });



    //слайдер


    // $('.slider__list').slick({
    //   infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // });


    // 1.



    let name1 = 'Вася';
    console.log(name1);
    name1 = 'Петя';
    console.log(name1);

    //2. 

    let name2 = 'Вася';

    if(name2 == 'Вася') {
        console.log('я Вася');
    } else {
        console.log('Я не Вася');
    };

    name2 = 'Оля';
    
    if(name2 == 'Вася') {
        console.log('я Вася');
    } else {
        console.log('Я не Вася');
    };

    //3. 

    for(let i = 0; i<10; i++) {
        console.log(i);
    };

    //4.

    function sum(p1, p2, p3) {
        return p1 + p2 + p3;
    }

    let sum1 = sum(10,20,30);
    console.log(sum1);
    sum1 = sum(30,40,50);
    console.log(sum1);

    //5. 

    let arr = ['привет', 'loftshool'];

    arr.push('я знаю', 'javascript');

    console.log(arr.length);

    for(let i = 0; i<arr.length; i++) {
        console.log(arr[i]);
    };

    //6.

    let arr2 = [50, 150, 90, 10, 80, 110, 160, 40, 100, 60];

    for(let i = 0; i<arr2.length; i++) {
        let val = arr2[i]
        if(val > 100) {
            console.log(val);
        }
    };

    //7. 

    let obj = {
        name:'Жанна', 
        lastName:'Иванова',
        age:94
    };

    console.log(obj.name);
    console.log(obj.lastName);
    console.log(obj.age);

    obj.position = 'грузчик';
    console.log(obj.position);

    //8.

    function hello(human) {
        return 'Привет, меня зовут ' + human.name + ' ' + human.lastName + ' и мне ' + human.age + ' лет!';
    };

    let helloVar = hello(obj);

    console.log(helloVar);
});