import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import Current from "./components/Current";
import Locations from "./components/Locations";
import Lines from "./components/Lines";
import Search from "./components/Search";
import Rotate from "./components/Rotate";
import ImageList from "./components/ImageList";

mapboxgl.accessToken =
  "pk.eyJ1IjoicG9tZWxvbGlhbmciLCJhIjoiY2xwZmVkcHAwMXA4MjJpazd0NDlqeXhhdCJ9.Y4k76FacMIlHfb6eBCVA1A";

export default () => {
  const [map, setMap] = useState();
  const [imgs, setImgs] = useState([]);

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
      <Locations map={map} setImgs={setImgs} />
      {/* <Lines map={map} /> */}
      <Search map={map} />
      {/* <Rotate map={map} /> */}
      <ImageList imgs={imgs} />
    </div>
  );
};
