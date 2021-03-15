function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -43.52973788733548, lng: 172.631526783333},
        zoom: 15,
        mapId: '112f0ed6b40890c3',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
      });

      markers = [
          [
            "Yoshi\'s House",
            -43.53029794309932,
            172.62697775707386,
            "yoshi_house.svg",
            38,
            31
          ],
          [
            "You Are here",
            -43.53340781989185, 
            172.63380874066775,
            "pointer.svg",
            30,
            47.8
          ],
          [
            "Ghost House",
            -43.52655525309564, 
            172.63066071115358,
            "ghosthouse.svg",
            40,
            48
          ],
          [
            "Castle",
            -43.5297100842364, 
            172.6339266680501,
            "castle.svg",
            40,
            53
          ],
          [
            "Warp Pipe",
            -43.53112276644162, 
            172.62228257051373,
            "pipe.svg",
            38,
            42.5
          ],
          [
            "Star World",
            -43.53002975983068, 
            172.63981258078064,
            "star.svg",
            38,
            43
          ],
          [
            "Donut Plains",
            -43.520102827911614, 
            172.62347461079864,
            "hill_with_eyes.svg",
            50,
            60.7
          ],
          [
            "Donut Plains",
            -43.527411547200245, 
            172.62201961973437,
            "hill_with_eyes.svg",
            50,
            60.7
          ],
          [
            "Star World",
            -43.532874377607605, 
            172.64806519536165,
            "star.svg",
            38,
            43
          ]
      ];

      for(let i =0; i < markers.length; i++){
          const currMarker = markers[i];
          const marker = new google.maps.Marker({
            position: {lat: currMarker[1], lng: currMarker[2]},
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP,
          });
    
          const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
          });
    
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
      }

      
}
