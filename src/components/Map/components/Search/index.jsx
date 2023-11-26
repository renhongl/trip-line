export default ({ map }) => {
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
      }}
    >
      <input />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
