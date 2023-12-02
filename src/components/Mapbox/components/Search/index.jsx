import { Button, Select } from "@arco-design/web-react";
import locations from "../../data/locations.json";
import { useEffect, useState } from "react";

const Option = Select.Option;
export default ({ map }) => {
  const [selected, setSelected] = useState();
  const options = locations.features.map((item) => {
    return {
      label: item.properties.title,
      value: item.properties.title,
      extra: item.geometry.coordinates,
    };
  });

  const handleSearch = () => {
    console.log(selected);
    map.flyTo({ center: selected, zoom: 14 });
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1000,
        right: 20,
        top: 20,
        display: "flex",
      }}
    >
      <Select
        onChange={(v, item) => {
          setSelected(item.extra);
        }}
        placeholder="Please select"
        style={{ width: 154, marginRight: 10 }}
        showSearch
      >
        {options.map((option, index) => (
          <Option key={option.label} value={option.value} extra={option.extra}>
            {option.label}
          </Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleSearch}>
        前往
      </Button>
    </div>
  );
};
