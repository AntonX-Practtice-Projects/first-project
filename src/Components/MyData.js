import React from "react";
import "./MyData.css";
import WithInCompany from "./WithInCompany";

const MyData = () => {
  const techStack = "React Internee";
  return (
    <>
      <div className="container1">
        <h1 className="head-1">Muhammad Israr Khan</h1>
      </div>
      <WithInCompany techStack={techStack} />
    </>
  );
};

export default MyData;
