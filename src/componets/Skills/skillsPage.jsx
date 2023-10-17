import React from "react";
import listOfValues from "./dataSkills";
import "./styl.css";

const SkillsPage = () => {
  return (
    <div>
      <div className="h-screen flex  justify-center items-center ">
        <section class="">
          <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-sa dark:text-sa md:text-4xl mb-10 ">
              Skills
            </h2>
            <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-sa pt-10">
              {listOfValues.map((value, index) => (
                <a
                  href="/"
                  className="hover:-translate-y-3   flex justify-center items-center h-9 text-white hover:text-sa  dark:hover:text-sa hover:transition-all hover:ease-in-out hover:delay-150 m-5"
                  key={index} // Ensure each element has a unique key when mapping over an array
                >
                  <p className="text-xl font-mono hover:w-200   hover:shadow-sa">
                    <b>{value}</b>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;
