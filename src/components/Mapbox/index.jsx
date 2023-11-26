import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import Current from "./components/Current";
import Locations from "./components/Locations";
import Lines from "./components/Lines";
import Search from "./components/Search";
import Rotate from "./components/Rotate";
import { Image } from "@arco-design/web-react";

mapboxgl.accessToken =
  "pk.eyJ1IjoicG9tZWxvbGlhbmciLCJhIjoiY2xwZmVkcHAwMXA4MjJpazd0NDlqeXhhdCJ9.Y4k76FacMIlHfb6eBCVA1A";

export default () => {
  const [map, setMap] = useState();
  const [img, setImg] = useState("");

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
      <Locations map={map} setImg={setImg} />
      <Lines map={map} />
      <Search map={map} />
      {/* <Rotate map={map} /> */}
      <Image
        style={{
          position: "fixed",
          zIndex: 1000,
          left: 20,
          top: 20,
          display: "flex",
        }}
        width={200}
        src={img}
        alt="lamp"
      />
    </div>
  );
};
