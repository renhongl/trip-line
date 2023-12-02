import { useEffect } from "react";
import { getLocation, getMarker } from "../../utils";
import locations from "../../data/locations.json";
import mapboxgl from "mapbox-gl";

export default ({ map, setImgs }) => {
  const addLocations = (map) => {
    map.loadImage(
      "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
      (error, image) => {
        if (error) throw error;
        map.addImage("custom-marker", image);
        // Add a GeoJSON source with 2 points
        map.addSource("points", {
          type: "geojson",
          data: locations,
        });

        // Add a symbol layer
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "custom-marker",
            // get the title name from the source's "title" property
            "text-field": ["get", "title"],
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 1.25],
            "text-anchor": "top",
          },
        });
      },
    );

    map.on("click", "points", (e) => {
      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description || "";
      const imgs = e.features[0].properties.imgs || [];
      console.log(imgs, typeof imgs);
      try {
        if (imgs) {
          setImgs(JSON.parse(imgs));
        }
      } catch (error) {
        setImgs([]);
      }

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      description &&
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
    });
  };

  useEffect(() => {
    map && addLocations(map);
  }, [map]);

  return null;
};
