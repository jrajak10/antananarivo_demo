
mapboxgl.accessToken = 'pk.eyJ1IjoiamxzcjEwIiwiYSI6ImNqendwdWcwcDBqcXQzbnBrc3kzNXB2cm8ifQ.O4pVjrJOsuWH8HZLE1vBXw';


let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [47.5276096, -18.9103709], // starting position [lng, lat]
    zoom: 11 // starting zoom
});

map.dragRotate.disable(); // Disable map rotation using right click + drag.
map.touchZoomRotate.disableRotation(); // Disable map rotation using touch rotation gesture.

// Add navigation control (excluding compass button) to the map.
map.addControl(new mapboxgl.NavigationControl());