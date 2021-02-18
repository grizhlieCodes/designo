var mymap = L.map('mapidddd').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ3JpemhsaWUiLCJhIjoiY2tsYjVheTVlMGI5ajJ1bzE4YXVjdTQxNSJ9.q1WaC98laBtuY4gbGubdIw'
}).addTo(mymap);