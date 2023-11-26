import { useEffect, useState } from "react";
import { getLocation, getMarker } from "../../utils";
import locations from "../../data/locations.json";
import { Button, Select } from "@arco-design/web-react";

export default ({ map }) => {
  const [show, setShow] = useState(false);
  const [layer, setLayer] = useState("");

  const addLines = (map) => {
    const lines = locations.features.map((item) => item.geometry.coordinates);
    console.log(lines);
    if (!layer) {
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
    }
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
    setLayer("route");
  };
  useEffect(() => {
    if (!show) {
      map && map.removeLayer("route");
    } else {
      if (!layer) {
        map && !layer && addLines(map);
      } else {
        map && map.removeLayer("route");
      }
    }
  }, [map, show]);

  return (
    <Button
      onClick={() => setShow(!show)}
      style={{
        position: "fixed",
        zIndex: 1000,
        right: 20,
        top: 100,
      }}
      type="primary"
    >
      显示航线
    </Button>
  );
};
