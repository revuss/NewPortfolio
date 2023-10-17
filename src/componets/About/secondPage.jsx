import React from "react";

const SecondPage = () => {
  return (
    <div className="snap-always snap-start">
      <div className="h-5/6 w-full flex justify-center items-center ">
        <div class="relative overflow-hidden">
          <div class="relative z-10">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div class="max-w-2xl text-start mx-auto">
                <div class="mt-5 max-w-2xl">
                  <h1 class="block font-semibold text-sa text-3xl md:text-6xl lg:text-7xl dark:text-gray-200">
                    Innovation
                  </h1>
                </div>

                <div class="mt-5 max-w-3xl">
                  <p class="text-lg text-white mt-16 text-start md:text-justify  dark:text-white">
                    I'm always on the hunt for ingenious solutions, whether it's
                    crafting interactive web applications, optimizing code, or
                    unraveling complex problems. Innovation is the fuel that
                    propels my tech odyssey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
