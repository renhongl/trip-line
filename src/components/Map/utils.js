import L from "leaflet";

export const getLocation = (callback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callback);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

export const getMarker = (latlng, desc) => {
  const myIcon = L.icon({
    iconUrl: "/images/marker-icon.png",
    shadowUrl: "/images/marker-shadow.png",
    iconSize: [24, 40],
    iconAnchor: [12, 40],
    popupAnchor: [0, -24],
  });
  return L.marker(latlng, { icon: myIcon }).bindPopup(desc);
};

export const getGeoJson = (data) => {
  const myIcon = L.icon({
    iconUrl: "/images/marker-icon.png",
    shadowUrl: "/images/marker-shadow.png",
    iconSize: [24, 40],
    iconAnchor: [12, 40],
    popupAnchor: [0, -24],
  });
  return L.geoJSON(data, {
    style: function (feature) {
      return { color: feature.properties.color };
    },
    pointToLayer: function (geoJsonPoint, latlng) {
      return L.marker(latlng, {
        icon: myIcon,
      }).bindPopup("test");
    },
  }).bindPopup(function (layer) {
    return layer.feature.properties.description;
  });
};

export const getPolyline = (data) => {
  return L.polyline(
    data.map((item) => item.reverse()),
    { color: "green" },
  );
};

export const getDecorator = (data) => {
  const myIcon = L.icon({
    iconUrl: "/images/icon_plane.png",
    iconAnchor: [16, 16],
  });
  return L.polylineDecorator(data, {
    patterns: [
      // defines a pattern of 10px-wide dashes, repeated every 20px on the line
      //{offset: 25, repeat: 50, symbol: L.Symbol.arrowHead({pixelSize: 15, pathOptions: {fillOpacity: 1, weight: 0}})}
      {
        offset: "16%",
        repeat: "10%",
        symbol: L.Symbol.marker({
          rotate: true,
          markerOptions: {
            icon: myIcon,
          },
        }),
      },
    ],
  });
};
