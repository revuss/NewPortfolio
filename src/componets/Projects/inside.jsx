import React from "react";
import { ProjectDetails } from "./myProjects";

const Inside = () => {
  return (
    <div>
      <div class="container my-12 mx-auto px-4 md:px-12 flex justify-center items-center ">
        <div class="flex flex-wrap grid grid-cols-1 md:grid-cols-2 xl:grid-col-2  lg:grid-cols-2 gap-20 ">
          {ProjectDetails.map((item, index) => (
            <div class="max-w-sm bg-oe hover:text-gray-900 text-white border border-gray-200 rounded-lg shadow  hover:bg-sa">
              <a href="#">
                <img class="rounded-t-lg" src={item.imagePic} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                    {item.title}
                  </h5>
                </a>
                <p class="mb-3 font-normal ">{item.subtitle}</p>
                <a
                  href={item.linkB}
                  target="new"
                  class="inline-flex items-center px-3 py-2  text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Link
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inside;
