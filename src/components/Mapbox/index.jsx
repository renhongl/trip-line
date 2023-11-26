import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import Current from "./components/Current";
import Locations from "./components/Locations";
import Lines from "./components/Lines";
import Search from "./components/Search";
import Rotate from "./components/Rotate";

mapboxgl.accessToken =
  "pk.eyJ1IjoicG9tZWxvbGlhbmciLCJhIjoiY2xwZmVkcHAwMXA4MjJpazd0NDlqeXhhdCJ9.Y4k76FacMIlHfb6eBCVA1A";

export default () => {
  const [map, setMap] = useState();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      zoom: 2,
    });

    map.on("load", () => {
      setMap(map);
    });
  }, []);

  return (
    <div id="map" style={{ width: "100vw", height: "100vh" }}>
      <Current map={map} />
      <Locations map={map} />
      <Lines map={map} />
      <Search map={map} />
      <Rotate map={map} />
    </div>
  );
};
