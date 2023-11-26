import { useEffect, useState } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  getDecorator,
  getGeoJson,
  getLocation,
  getMarker,
  getPolyline,
  getPoints,
} from "./utils";
import locationJson from "./data/points.json";
import lineJson from "./data/lines.json";
import "leaflet-polylinedecorator";
import Search from "./components/Search";

export default () => {
  const [map, setMap] = useState();

  useEffect(() => {
    const map = L.map("map", { scrollWheelZoom: "center" });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    getLocation((position) => {
      const latlng = [position.coords.latitude, position.coords.longitude];
      map.setView(latlng, 13);
      getMarker(latlng, "现在的位置").addTo(map);
    });

    getGeoJson(locationJson).addTo(map);
    const points = getPoints(locationJson);
    getPolyline(points).addTo(map);
    getDecorator(points).addTo(map);
    setMap(map);
  }, []);

  return (
    <div id="map" style={{ width: "100vw", height: "100vh" }}>
      <Search map={map} />
    </div>
  );
};
