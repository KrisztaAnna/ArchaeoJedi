function initMap() {
    var savaria = {lat: 47.230, lng: 16.621};
    var graz = {lat: 47.070, lng: 15.439};
    var wien = {lat: 48.208, lng: 16.373};
    var sopron = {lat: 47.681, lng: 16.584};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: savaria,
        scrollwheel:  false
    });
    var marker1 = new google.maps.Marker({
        position: savaria,
        map: map
    });
    var marker2 = new google.maps.Marker({
        position: graz,
        map: map
    });
    var marker3 = new google.maps.Marker({
        position: wien,
        map: map
    });
    var marker4 = new google.maps.Marker({
        position: sopron,
        map: map
    });
}