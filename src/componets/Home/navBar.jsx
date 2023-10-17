import React from "react";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

const NavBar = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div>
      <nav class="py-10 text-sa">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  p-4">
          <a href="/" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-sa ">
              Revus
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-sa rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray rounded-lg bg-oe md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray dark:bg-gray-800 md:dark:bg-gray dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-sa  rounded hover:bg-gray-800 md:hover:text-white md:bg-transparent md:text-sa md:p-0 dark:text-sa md:dark:text-sa"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-sa rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-sa md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-sa md:dark:hover:bg-transparent"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-sa rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-sa rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-sa dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
