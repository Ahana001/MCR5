import { useContext } from "react";
import "./HomePage.css";
import { DataContext } from "../../Context/DataContext";

export function HomePage() {
  const { state, dispatch } = useContext(DataContext);

  return <h2>Home</h2>;
}
