// For Mapbox
fetch('path/to/your-data.geojson')
    .then(response => response.json())
    .then(data => {
        map.addSource('your-data-source', {
            type: 'geojson',
            data: data
        });

        map.addLayer({
            id: 'your-data-layer',
            type: 'circle',
            source: 'your-data-source',
            paint: {
                'circle-radius': 6,
                'circle-color': '#B42222'
            }
        });
    });

// For Leaflet
fetch('path/to/your-data.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 8,
                    fillColor: "#ff7800",
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);
    });