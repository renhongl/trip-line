import { Image } from "@arco-design/web-react";
export default ({ imgs }) => {
  return (
    <div
      style={{
        position: "fixed",
        left: 20,
        top: 20,
        width: "500px",
        height: "100px",
        zIndex: 1000,
      }}
    >
      {imgs?.map((item, index) => (
        <Image key={index} src={item} width={200} />
      ))}
    </div>
  );
};
