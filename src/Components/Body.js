import React from "react";
import ClientSection from "./ClientSection";
import ProjectSection from "./ProjectSection";

function Body(props) {
  return (
    <div>
      <ProjectSection />
      <ClientSection />
    </div>
  );
}

export default Body;
