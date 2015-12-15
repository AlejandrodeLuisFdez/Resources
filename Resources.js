//Se dispara cuando todo el DOM e imagenes están cargadas

    $(window).on('load', function() {

    });

//Se dispara cuando se cambia el tamaño de la Screen

    $(window).onresize = function(event) {
        resizeFunction();
    };

    var resizeFunction = function() {

        $('elemento').each(function() {  //Recorre cada 'elemento'
            if ($(this).height() >= 37) {
                $(this).parent().css('height', '70px');
            }
        });
    };

//Se usó para redireccinar correctamente al click ya que Primefaces no hacía evento AJAX

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

//Previene el uso del MouseWheel

    $('elemento').mousedown(function(event) {
        var mouseWheel = (event.which);
        if (mouseWheel == 2) {
            event.preventDefault();
        }
    });

//Recoje documentReferrer si es mediante un LINK  
    $(window).on('load', function() {
        var x = document.referrer;
        var n = x.indexOf("/shopping");
        var z = x.substr(n, x.length);
        if (z == "/shopping/register.xhtml") {
            alert('Primer paso reg OK');
        } else {}
    });

//Setea la altura del elemento con la del elemento2 más 200px

    $('elemento').height($('elemento2').height() + 200);

//Creación de Mapa GoogleMaps

    var mapaStoresSelected = function() {
        var mapstores; //Declaramos el mapa
        var tiendaStores = []; //Declaramos los elementos a integrar en el mapa
        var markers = []; //Declaramos los markers o POIs

        var addListenersMarkerInfo = function() { //Añade la funcionalidad al clickar en un POI
            google.maps.event.addListener(marker, 'click', function() {
                closeInfoWindow(); //Cierra cualquier InfoWindow abiero
                this.infowindow.open(mapstores, this); //Abre el InfoWindow seleccionad
                this.setIcon('/statics/1.0.1/images/PIN_VERDE.png');//Configura el ICONO de POI clickado
            });

            google.maps.event.addListener(mapstores, 'click', function() { //Si clickas fuera del InfoWindow se cierra
                closeInfoWindow();
            });
        };

        // Función para Centrar el mapa
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
        //Recorre elemento y crea un Array del que sacar datos
        $("elemento").each(function(index, key) {
            tiendaStores.push(
                [
                    parseFloat($(this).find(".latitudes").children().val()),//[0]
                    parseFloat($(this).find(".latitudes").children().next("input").val()),//[1]
                    $(this).find('.container-logo-store').children('img').attr('src'),//[2]
                    $(this).find('.name-of-store').text(),//[3]
                    $(this).find('.direction-of-store').text(),//[4]
                    $(this).find(".latitudes").children().next("input").next("input").val(),//[5]
                    $(this).find(".latitudes").children().next("input").next("input").next("input").val(),//[6]
                    $(this).find(".latitudes").children().next("input").next("input").next("input").next("input").val()//[7]
                ]
            );
        });
        //Se crea el mapa en el DOM
        if (typeof google != 'undefined') {
            mapstores = new google.maps.Map(document.getElementById('map-stores'), {
                center: new google.maps.LatLng(40.425214, -3.7123485),//Se centra en coordenadas
                scrollwheel: false,//Anula RuedaCentral
                zoom: 20,
                mapTypeId: google.maps.MapTypeId.ROADMAP //Tipo de Mapa
            });

            var infowindow;
            var marker, i;

            //Recorremos el objeto de tiendaStore y ponemos alias
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
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(tienda.lat, tienda.lng),
                    map: mapstores,
                    infowindow: infowindow,
                    icon: '/statics/1.0.1/images/PIN_GRIS.png'
                });

                markers.push(marker);
                addListenersMarkerInfo();
            }
            autoCenter();
        }
    };

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

//Envio de Push Web
    $('elemento').on('click', function() {
        if (window.Notification && Notification.permission !== "denied") {
            Notification.requestPermission(function(status) { // status is "granted", if accepted by user
                var n = new Notification(tiendaPush.name, {
                    body: 'Gracias por aceptar el servicio de notificaciones Push',
                    icon: url // optional
                });
            });
        }
    });

//Formulario NewProduct



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


    }

//Selecciona por Attr "Name" 
    	$( "input[name='foo']").each(function(index){
            alert($(this).val());
        });


