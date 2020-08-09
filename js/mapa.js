function initMap() {

    var texto = '<h1> Bicicleta 100 </h1>'+'<p> Estado actual: En uso </p>';

    

    var myLatLng = {lat: -33.4329261, lng: -70.5466388};
    var myLatLng1 = {lat: -33.4382828, lng: -70.5677990};
    var myLatLng2 = {lat: -33.4525331, lng: -70.5636037};
    var myLatLng3 = {lat: -33.4521465, lng: -70.5285516};
    var myLatLng4 = {lat: -33.4380344, lng: -70.5293968};
    var mapOptions = {
      zoom:11,
      center:myLatLng
    }
  
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var logo = 'img/ciclista.png'
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Bicicleta 100',
      icon : logo
    });
  
    var marker1 = new google.maps.Marker({
      position: myLatLng1,
      map: map,
      title: 'Bicicleta 200',
      icon : logo
      
    });
  
    var marker2 = new google.maps.Marker({
      position: myLatLng2,
      map: map,
      title: 'Bicicleta 300',
      icon : logo
      
    });
  
    var marker3 = new google.maps.Marker({
      position: myLatLng3,
      map: map,
      title: 'Bicicleta 400',
      icon : logo
      
    });

    var marker4 = new google.maps.Marker({
      position: myLatLng4,
      map: map,
      title: 'Bicicleta 500',
      icon : logo
    });
  
    var informacion = new google.maps.InfoWindow({
        content: texto
    });
  
  
    marker.addListener('click', function(){
        informacion.open(map, marker);
    });
  }