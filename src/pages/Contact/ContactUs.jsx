import React, { useRef } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaTwitter,
  FaRegEnvelope,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message send successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="bg-gray-100 py-10 md:py-20 px-2">
      <div className="max-w-[1280px] mx-auto">
        <section className="text-gray-800">
          <div className="flex justify-center">
            <div className="text-center lg:max-w-3xl md:max-w-xl">
              <h2 className=" text-2xl md:text-3xl font-bold mb-10 px-6">
                Contact Me
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-10 md:gap-0">
            <div className="w-full md:w-5/12">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5">
                  <div className="p-2 shadow-lg border rounded-full bg-gray-600">
                    <FaMapMarkerAlt className="text-xl md:text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <address>Thakurgaon, Bangladesh</address>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="p-2 shadow-lg border rounded-full bg-gray-600">
                    <FaRegEnvelope className="text-xl md:text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <address>sumanchandrabarman999@gmail.com</address>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="p-2 shadow-lg border rounded-full bg-gray-600">
                    <BsTelephone className="text-xl md:text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone & WhatsApp</h3>
                    <address>+8801765227054</address>
                  </div>
                </div>
                <div className="mt-5 md:mt-10">
                  <h3 className="text-xl md:text-2xl font-bold">
                    Social Media
                  </h3>
                  <div className="flex gap-2 mt-4 md:mt-5 text-xl items-center">
                    <a
                      href="https://www.linkedin.com/in/suman-chandra-barman/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 shadow-lg border rounded-full bg-[#0a66c2]"
                    >
                      <FaLinkedinIn className="text-white md:text-2xl " />
                    </a>
                    <a
                      href="https://github.com/suman-chandra-barman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 shadow-lg border rounded-full bg-black"
                    >
                      <FaGithub className="text-white md:text-2xl" />
                    </a>

                    <a
                      href="https://twitter.com/_SumanBarman"
                      target="_black"
                      rel="noreferrer"
                      className="p-2 shadow-lg border rounded-full bg-[#1da1f2]"
                    >
                      <FaTwitter className="text-white md:text-2xl" />
                    </a>
                    <a
                      href="https://www.facebook.com/sumanchandrabarman999"
                      target="_black"
                      rel="noreferrer"
                      className="p-2 shadow-lg border rounded-full bg-[#1877f2]"
                    >
                      <FaFacebookF className=" text-white md:text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full md:w-7/12 px-3 lg:px-6">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group mb-2 md:mb-6">
                  <input
                    type="text"
                    name="from_name"
                    className="form-control block w-full px-3 py-2 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#3d4451] focus:ring-[#3d4451] focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-2 md:mb-6">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control block w-full px-3 py-2 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#3d4451] focus:ring-[#3d4451] focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="mb-2 md:mb-6">
                  <textarea
                    name="message"
                    className="form-control block w-full px-3 py-2 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#3d4451] focus:ring-[#3d4451] focus:outline-none"
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Send Message"
                  className="btn text-white"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
