import React from "react";
import ContForm from "./contForm";

const ContacSide = () => {
  return (
    <div>
      <div className="mt-96"></div>
      <section class="h-screen flex  justify-center items-center">
        <div class=" px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-sa font-sans mb-18">
            Get in My Digital Space!
          </h2>
          <p class="mb-1 lg:mb-16 font-sans text-center text-white dark:text-white sm:text-xl">
            Hey! If you have any questions, need assistance with a project, or
            simply want to chat, feel free to enter my mail box using the
            contact options below. I'm here to explore with you!
          </p>
          <ContForm />
        </div>
      </section>
    </div>
  );
};

export default ContacSide;
