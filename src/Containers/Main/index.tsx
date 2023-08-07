import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>on home page</h1>
      <button onClick={() => navigate("/counter")}>Counter</button>
    </>
  );
};
