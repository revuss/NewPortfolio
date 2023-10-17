import React from "react";
import Inside from "./inside";

const ProjectMain = () => {
  return (
    <div>
      <div className="h-96"></div>
      <div className=" flex  justify-center items-center ">
        <div class="max-w-screen-lg mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white text-center mb-12">
            Projects
          </h2>
          <p class="text-sa sm:text-xl  text-center mb-20">
            My projects showcase the skills, dedication, and innovation that
            define my work as a software developer.
          </p>
          <Inside />
        </div>
      </div>
      <div className="h-48"></div>
    </div>
  );
};

export default ProjectMain;
