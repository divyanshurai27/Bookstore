import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        
        {/* HEADER SECTION */}
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl">
            We'd love to hear from you{" "}
            <span className="text-pink-600">💌</span>
          </h1>

          <p className="mt-12">
            Have a question, suggestion, or just want to talk books?  
            Drop us a message and we’ll get back to you soon.
          </p>

          <Link to="/">
            <button className="mt-6 bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 text-white">
              Back
            </button>
          </Link>
        </div>

        {/* CONTACT FORM SECTION */}
        <div className="mt-12 flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 border-[2px] shadow-md p-6 rounded-md">

            <form className="space-y-5">
              
              {/* NAME */}
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-3 py-2 border rounded-md outline-none resize-none"
                  required
                ></textarea>
              </div>

              {/* BUTTON */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-800 duration-200"
                >
                  Send Message
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </>
  );
}

export default Contact;
