    const mymap = L.map('issMap').setView([42, 43], 5);
    const marker =  L.marker([0, 0]).addTo(mymap);

    const attribution = ' &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl =  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, {attribution} );
    tiles.addTo(mymap);

    const api = 'https://api.wheretheiss.at/v1/satellites/25544';
    
    async function getData(){
        const response = await fetch(api);
        const data = await response.json();

        const{ latitude , longitude} = data;

        // L.marker([latitude, longitude]).addTo(mymap);
        marker.setLatLng([latitude, longitude]);

        document.getElementById("lat").textContent = latitude;
        document.getElementById("lon").textContent = longitude;
    }
    getData();

 