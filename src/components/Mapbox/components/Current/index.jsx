import { useEffect } from "react";
import { getLocation, getMarker } from "../../utils";

export default ({ map }) => {
  const addCurrent = (map) => {
    getLocation((position) => {
      const latlng = [position.coords.longitude, position.coords.latitude];
      map.setCenter(latlng);
      getMarker(latlng, "现在的位置").addTo(map);
    });
  };

  useEffect(() => {
    map && addCurrent(map);
  }, [map]);

  return null;
};
