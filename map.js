var map = L.map('map', { crs: L.CRS.Simple });

var bounds = [[0,0],[1000,1000]];
var image = L.imageOverlay('floor.png', bounds).addTo(map);
map.fitBounds(bounds);



let defaultHmRadius = 40;
let defaultHmBlur = 25;

var hmRadius = defaultHmRadius;
var hmBlur = defaultHmBlur;

var heat = [[500, 300, 2000], [520, 340, 2000], [520, 360, 2000],[500, 400, 9000], [500, 500, 5000], [520, 520, 5000]]



var marker =  L.marker([500, 300]).addTo(map);
var heatmap = L.heatLayer(heat, {radius: defaultHmRadius, blur: defaultHmBlur }).addTo(map);

console.log(heatmap);