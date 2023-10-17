import React from "react";

const Cover = () => {
  return (
    <div>
      <section class=" dark:bg-gray-900 ">
        <div class="grid max-w-screen-xl px-4 py-15 my-1 mb-20 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto m-7 place-self-center lg:col-span-7">
            <h1 class="max-w-2xl text-sa mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-sa">
              Hi! I'm Sarath <br /> Software Developer on a mission to innovate.
            </h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl mt-10 dark:text-white">
              Full Stack Developer expertise in web development. Passionate
              about learning and delivering top-notch code for innovative and
              user-centric solutions. Committed to driving project success
              through collaboration and quality code.
            </p>
            <a
              href="/"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg bg-primary-700 hover:bg-sa focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Contact
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="hidden ml-20 lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cover;
