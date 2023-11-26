import { useEffect } from "react";
import { getLocation, getMarker } from "../../utils";
import locations from "../../data/locations.json";

export default ({ map }) => {
  const addLines = (map) => {
    const lines = locations.features.map((item) => item.geometry.coordinates);
    console.log(lines);
    map.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: lines,
        },
      },
    });
    map.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#888",
        "line-width": 8,
      },
    });
  };
  useEffect(() => {
    map && addLines(map);
  }, [map]);

  return null;
};
