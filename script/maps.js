var canadaMap = L.map('canada').setView([43.644225902294174, -79.39458231726809], 13);
var australiaMap = L.map('australia').setView([-30.329268835386596, 149.78823453395083], 13);
var unitedKingdomMap = L.map('unitedKingdom').setView([53.71037373098736, -1.3418136741276538], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ3JpemhsaWUiLCJhIjoiY2tsYjVheTVlMGI5ajJ1bzE4YXVjdTQxNSJ9.q1WaC98laBtuY4gbGubdIw'
}).addTo(canadaMap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ3JpemhsaWUiLCJhIjoiY2tsYjVheTVlMGI5ajJ1bzE4YXVjdTQxNSJ9.q1WaC98laBtuY4gbGubdIw'
}).addTo(australiaMap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ3JpemhsaWUiLCJhIjoiY2tsYjVheTVlMGI5ajJ1bzE4YXVjdTQxNSJ9.q1WaC98laBtuY4gbGubdIw'
}).addTo(unitedKingdomMap);