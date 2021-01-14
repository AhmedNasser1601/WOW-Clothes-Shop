function initMap() {
    var myLatLng = { lat: 30.0782638, lng: 31.2848713 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });
}