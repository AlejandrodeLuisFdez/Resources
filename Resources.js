$(window).on('load', function() {

});

$('.grid-item').on('click', function() {
    $('this')
});

$('.main-store-list').on('.click', function() {

})
$(".grid-item").click(function() {
    // `this` is the DOM element that was clicked
    var index = $(".grid-item").index(this)
    var index_GTM = index + 1
    alert(index_GTM)
});


if (('.Store-Name.E4-5.home.direccion').height() >= 37) {
    $('.Name_store.home.direccion').css('height', '70px')
};


$(window).onresize = function(event) {
    resizeAddress();
};

var resizeAddress = function() {

    $('.Store-Name.E4-5.home.direccion').each(function() {
        if ($(this).height() >= 37) {
            $(this).parent().css('height', '70px')
        }
    });
};



//LOCAL
$('.go-to-publications').each(function() {
    var clickStore = $(this).attr('onclick');
    var initUrl = initUrl.indexOf("https");
    var microUrl = initUrl.substr(n, x.length);
    initUrl = microUrl.indexOf("'");
    var siteUrl = microUrl.substr(0, n - 1);
    $(this).attr('href', siteUrl);
});

//INT

$('.go-to-publications').each(function() {
    var x = $(this).attr('onclick');
    var n = x.indexOf("https");
    var z = x.substr(n, x.length);
    n = z.indexOf("'");
    var url = z.substr(0, n - 1);
    $(this).attr('href', url);
});

//PRE

$('.go-to-publications').each(function() {
    var x = $(this).attr('onclick');
    var n = x.indexOf("https");
    var z = x.substr(n, x.length);
    n = z.indexOf("'");
    var url = z.substr(0, n - 1);
    $(this).attr('href', url);
});


//PRO

$('.go-to-publications').each(function() {
    var x = $(this).attr('onclick');
    var n = x.indexOf("https");
    var z = x.substr(n, x.length);
    n = z.indexOf("'");
    var url = z.substr(0, n);
    $(this).attr('href', url);
});


//LOCAL Wheel POSSIBLES

$('.go-to-publications').each(function() {

    var x = $(this).attr('onclick');
    var n = x.indexOf("https");
    var z = x.substr(n, x.length);
    n = z.indexOf("'");
    var url = z.substr(0, n - 1);
    $(this).attr('href', url);
});

//Previene el uso del MouseWheel

$('.go-to-publications').mousedown(function(event) {
    var mouseWheel = (event.which)
    if (mouseWheel == 2) {
        event.preventDefault()
    }
});


/*Cookies*/



//Recoje la URL  
$(window).on('load', function() {


    var x = document.referrer;
    var n = x.indexOf("/shopping");
    var z = x.substr(n, x.length);

    if (z == "/shopping/register.xhtml") {

        alert('Primer paso reg OK')
    } else {};


});


$('.reg-promo').height();
$('.banner-promo').height($('.reg-promo').height() + 200)


var mapaStoresSelected = function() {
    var mapstores;
    var tiendaStores = [];
    var markers = [];

    var addListenersMarkerInfo = function() {
        google.maps.event.addListener(marker, 'click', function() {
            closeInfoWindow();
            this.infowindow.open(mapstores, this);
            this.setIcon('/statics/1.0.1/images/PIN_VERDE.png');
        });

        google.maps.event.addListener(mapstores, 'click', function() {
            closeInfoWindow();
        });
    };

    var autoCenter = function() {
        //  Create a new viewpoint bound
        var bounds = new google.maps.LatLngBounds();
        //  Go through each...
        $.each(markers, function(index, marker) {
            bounds.extend(marker.position);
        });
        //  Fit these bounds to the map
        mapstores.fitBounds(bounds);
    };

    var closeInfoWindow = function() {
        var curMarker = this;
        // loop through all markers
        $.each(markers, function(index, marker) {
            // if marker is not the clicked marker, close the marker
            if (marker !== curMarker) {
                marker.infowindow.close();
                marker.setIcon('/statics/1.0.1/images/PIN_GRIS.png');
            }
        });
    };

    $(".store-box").each(function(index, key) {
        tiendaStores.push(
            [
                parseFloat($(this).find(".latitudes").children().val()),
                parseFloat($(this).find(".latitudes").children().next("input").val()),
                $(this).find('.container-logo-store').children('img').attr('src'),
                $(this).find('.name-of-store').text(),
                $(this).find('.direction-of-store').text(),
                $(this).find(".latitudes").children().next("input").next("input").val(),
                $(this).find(".latitudes").children().next("input").next("input").next("input").val(),
                $(this).find(".latitudes").children().next("input").next("input").next("input").next("input").val()
            ]
        );
    });
    if (typeof google != 'undefined') {
        mapstores = new google.maps.Map(document.getElementById('map-stores'), {
            center: new google.maps.LatLng(40.425214, -3.7123485),
            scrollwheel: false,
            zoom: 20,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow;
        var marker, i;

        for (i = 0; i < tiendaStores.length; i++) {
            var tienda = {
                lat: tiendaStores[i][0],
                lng: tiendaStores[i][1],
                logo: tiendaStores[i][2],
                name: tiendaStores[i][3],
                address: tiendaStores[i][4],
                number: tiendaStores[i][5],
                hour: tiendaStores[i][6],
                urlMicrosite: tiendaStores[i][7]
            };
            if (marker = new google.maps.Marker)({
                position: new google.maps.LatLng(tienda.lat, tienda.lng),
                map: mapstores,
                infowindow: infowindow,
                icon: '/statics/1.0.1/images/PIN_GRIS.png',
            });

            markers.push(marker);
            addListenersMarkerInfo();
        }
        autoCenter();
    }
};

$(".container-icon-voucher").parent().each(function() {
    if ($(this).children().size() > 1) {
        $(this).html($(this).children().first());
    }
});
$(".Buttons-categories").parents(".container-store-data.home").each(function() {
    $(this).height
});





//Script para detectar SO Mobile
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
//Modificador por alturas
$(".name-of-store-app").each(function() {
    if ($(this).height() > 34) {

        $(this).css('text-align', 'left');
        $(this).css('bottom', '10px');
        $(this).css('left', '71px');
        $(this).css('line-height', '1');
    }
});
//Envio de Push Web
$('.name-of-store-app').on('click', function() {
    if (window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(function(status) { // status is "granted", if accepted by user
            var n = new Notification(tiendaPush.name, {
                body: 'Gracias por aceptar el servicio de notificaciones Push de Yaap shopping',
                icon: tiendaPush.logo // optional
            });
        });
    }
});

//Cookies

/*$(document).ready(function() {ProductSize
    var checkPromotionSecond = $("#checkPromoSecond").val();
    var interval = setInterval(function() {
               
                var maxHeight = 0;

                 $('.container-store-data').each(function() {
                    if ($(this).height() > maxHeight) {
                        maxHeight = $(this).height();
                    }
                });

                 $('.container-store-data').height(maxHeight);
            }
        },
        200);
});*/


$('.StockPerSize').val()
ProductSize
addMoreSizes

//Alex
	var BlockSizeStock = $('.containerStockSize').html();

	 $('.addMoreSizes').parent().each(function(){
		 $(this).parent('.col-lg-4').click(function(){
			$(this).children('label').text("Talla: " + $('.ProductSize').val());
 	        $(this).children('.input-group-addon').html("<span>" + $('.StockPerSize').val() + "</span>");
 	        $('.containerStockSize').append(BlockSizeStock);
	        AddSizes();
	 	});
	});

    
    function AddSizes() {
    	$('.addMoreSizes').parent().each(function(){
    	 	$(this).parent('.col-lg-4').click(function(){
    	 		$(this).children('label').text("Talla: " + $('.ProductSize').val());
    	        $(this).children('.input-group-addon').html("<span>" + $('.StockPerSize').val() + "</span>");
    	        $('.containerStockSize').append(BlockSizeStock);
    	 	});
    	});


    };

    	$( "input[name='quantity']").each(function(index){ alert($(this).val()); });
	$( "input[name='quantity']").each(function(index){ alert($(this).val()); });


if ($('.name-of-store-app').height() > 34){
	$(this).css('font-size','18px')
}



$('.nameStoreMap').each(function() {
    if ($(this).height() > 33) {
		$(this).css('font-size','100%')
    }
});

$('.storeTags').each(function(){
						if($(this).height() > 20){
							$(this).children('.tags').css('font-size','90%');
						}

			}, 200);