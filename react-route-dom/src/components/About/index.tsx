import { useLocation } from "react-router-dom";

export const About = () => {
  const { state } = useLocation();


  return (
    <div>
      <h1>
        about
      </h1>
      <p>{state as String}</p>
    </div>
  );
}