import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
const ContForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2i1edhy",
        "template_3hfzy2d",
        form.current,
        "tUJ4gzC6m5Wh8bXbK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setname("");
          setemail("");
          setmessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section>
        <div>
          <form class="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your mail"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                name="user_name"
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                required
                value={message}
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-sa  hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContForm;
