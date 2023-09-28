import HelloLicat2 from "./HelloLicat2";
import { useContext } from "react";
import UserInfo from "./Context";

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
      <HelloLicat2 />
    </div>
  );
};

export default HelloLicat;