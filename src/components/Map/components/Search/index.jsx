import { Button, Select } from "@arco-design/web-react";
const Option = Select.Option;
export default ({ map }) => {
  const options = ["Beijing", "Shanghai", "Guangzhou", "Disabled"];
  const handleSearch = () => {
    map.setView([104.0344133381999, 30.60144646680756].reverse());
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1000,
        right: 20,
        top: 20,
        background: "#fff",
        display: "flex",
      }}
    >
      <Select placeholder="Please select" style={{ width: 154 }} showSearch>
        {options.map((option, index) => (
          <Option key={option} disabled={index === 3} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};
