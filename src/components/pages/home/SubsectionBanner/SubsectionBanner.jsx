import "./SubsectionBanner.css";
import { Link } from "react-router-dom";

export const SubsectionBanner = ({ title }) => {
  return (
    <div className="main-subsectionBanner">
      <div className="section-one">
        <Link to="/">
          <span style={{ color: "white" }}>Home</span>
        </Link>{" "}
        / <span>{(title && title) || "Page Title"}</span>
      </div>
      <h1 className="section-two">{(title && title) || "Page Title"}</h1>
    </div>
  );
};
