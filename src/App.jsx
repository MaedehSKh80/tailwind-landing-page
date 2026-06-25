import { useState } from "react";
import HamburgerMenu from "../public/icons/hamburgermenu.svg?react";
import UserIcon from "../public/icons/user.svg?react";
import AboutIcon from "../public/icons/about.svg?react";
import "./index.css";

function App() {
  return (
    <>
      {/* nav bar */}
      <div className="container p-4 mx-auto relative bg-slate-950 ">
        <nav className="w-full max-w-screen-2xl rounded-xl bg-transparent text-white">
          <div className="flex items-center justify-between">
            {/* logo */}
            <h2 className="font-black text-lg tracking-wide">
              Mahi<span className="text-rose-300">.</span>
            </h2>

            {/* desktop menu*/}
            <div className="hidden lg:block">
              <ul className="flex flex-row items-center gap-6">
                <li>
                  <a className="font-bold" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="font-bold" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="font-bold" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="font-bold" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* telefone */}
            <div className="hidden lg:block">
              <a href="tel:+989111111111" className="text-sm font-medium">
                09111111111
              </a>
            </div>

            {/* hamburger menu*/}
            <button className="lg:hidden">
              <HamburgerMenu className="w-6 h-6 [&_*]:fill-white [&_*]:stroke-white" />
            </button>
          </div>
        </nav>
      </div>
      {/* hero */}

      <div className="container p-4 mx-auto h-screen flex h-screen relative content-center items-center justify-center pt-16 pb-32 ">
        <div className="absolute top-0 w-full h-full bg-[url('/bg/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="max-w-8xl container relative mx-auto text-center px-4 lg:w-8/12 ">
          <h1 className="mb-6 text-5xl font-black leading-tight text-white lg:text-7xl">
            Building Modern
            <span className="block text-rose-200">Web Experiences</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-300">
            A responsive landing page built with React and Tailwind CSS,
            focusing on clean design, reusable components and modern user
            interface principles.
          </p>
        </div>
      </div>
      {/* services */}
      <section className="bg-blue-50 px-4 py-4 -my-32 overflow-x-hidden">
        <div className="container mx-auto">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className=" z-30 flex flex-col max-w-full bg-white rounded-lg shadow-lg shadow-gray-300/50">
                <div className="p-6 px-8 text-center">
                  <button className="flex items-center justify-center w-12 h-12 mx-auto mb-6 text-white transition-all rounded-full shadow-gray-900/10 bg-gradient-to-tr from-rose-300 to-blue-300">
                    <UserIcon className="w-6 h-6 [&_*]:fill-white [&_*]:stroke-white" />
                  </button>

                  <h5 className="text-xl font-semibold text-slate-800">
                    This is the Title
                  </h5>

                  <p className="mt-3 text-base font-normal leading-relaxed text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta, dolorem?
                  </p>
                </div>
              </div>

              <div className=" z-30 flex flex-col max-w-full bg-white rounded-lg shadow-lg shadow-gray-300/50">
                <div className="p-6 px-8 text-center">
                  <button className="flex items-center justify-center w-12 h-12 mx-auto mb-6 text-white transition-all rounded-full shadow-gray-900/10 bg-gradient-to-tr from-rose-300 to-blue-300">
                    <UserIcon className="w-6 h-6 [&_*]:fill-white [&_*]:stroke-white" />
                  </button>

                  <h5 className="text-xl font-semibold text-slate-800">
                    This is the Title
                  </h5>

                  <p className="mt-3 text-base font-normal leading-relaxed text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta, dolorem?
                  </p>
                </div>
              </div>

              <div className=" z-30 flex flex-col max-w-full bg-white rounded-lg shadow-lg shadow-gray-300/50">
                <div className="p-6 px-8 text-center">
                  <button className="flex items-center justify-center w-12 h-12 mx-auto mb-6 text-white transition-all rounded-full shadow-gray-900/10 bg-gradient-to-tr from-rose-300 to-blue-300">
                    <UserIcon className="w-6 h-6 [&_*]:fill-white [&_*]:stroke-white" />
                  </button>

                  <h5 className="text-xl font-semibold text-slate-800">
                    This is the Title
                  </h5>

                  <p className="mt-3 text-base font-normal leading-relaxed text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta, dolorem?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-7 mt-32 py-16 md:py-24">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16">
          {/* Content */}
          <div className="w-full md:w-6/12">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-6 rounded-full bg-gradient-to-tr from-rose-300 to-blue-300 shadow-lg">
              <AboutIcon className="w-6 h-6 [&_*]:fill-white [&_*]:stroke-white" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              We'd Love to Hear From You
            </h3>

            <p className="max-w-xl mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              voluptates distinctio corrupti aspernatur obcaecati ea autem
              aliquam explicabo aliquid at.
            </p>

            <button className="px-6 py-3 mt-8 text-sm font-semibold tracking-wide text-slate-900 uppercase transition-all duration-300 rounded-lg bg-gradient-to-tr from-rose-300 to-blue-300 hover:shadow-lg">
              Read More
            </button>
          </div>

          {/* Card */}
          <div className="w-full md:w-5/12">
            <div className="overflow-hidden bg-white shadow-xl rounded-2xl shadow-gray-300/40">
              <div className="overflow-hidden h-56 sm:h-64 md:h-72">
                <img
                  src="/about/aboutPic.jpg"
                  alt="About us"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-7">
                <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  Services
                </p>

                <h5 className="mt-2 text-xl font-semibold text-gray-900 md:text-2xl">
                  Helping Businesses Grow
                </h5>

                <p className="mt-3 leading-relaxed text-gray-600">
                  We create modern digital solutions that help brands connect
                  with customers and scale their business with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team*/}
      <section className="container px-4 py-20 mx-auto">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-rose-500 font-medium tracking-wider uppercase">
            Meet Our Team
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            The People Behind The Work
          </h2>

          <p className="mt-4 leading-relaxed text-gray-500">
            A passionate group of designers, developers and strategists
            dedicated to creating digital experiences people genuinely enjoy.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="transition-all duration-300 text-center hover:-translate-y-1">
            <img
              src="/team/team1.jpg"
              alt="Team member"
              className="object-cover w-full shadow-lg aspect-square rounded-2xl shadow-gray-300/50"
            />

            <h5 className="mt-5 text-xl font-bold text-gray-900">
              Ethan Carter
            </h5>

            <p className="mt-1 text-gray-500">Front-End Developer</p>

            <div className="flex justify-center gap-3 mt-5">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="transition-all duration-300 text-center hover:-translate-y-1">
            <img
              src="/team/team2.jpg"
              alt="Team member"
              className="object-cover w-full shadow-lg aspect-square rounded-2xl shadow-gray-300/50"
            />

            <h5 className="mt-5 text-xl font-bold text-gray-900">
              Sophia Miller
            </h5>

            <p className="mt-1 text-gray-500">UI / UX Designer</p>

            <div className="flex justify-center gap-3 mt-5">
              <a className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110">
                <i className="fa-brands fa-dribbble"></i>
              </a>

              <a className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110">
                <i className="fa-brands fa-behance"></i>
              </a>

              <a className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="transition-all duration-300 text-center hover:-translate-y-1">
            <img
              src="/team/team3.jpg"
              alt="Team member"
              className="object-cover w-full shadow-lg aspect-square rounded-2xl shadow-gray-300/50"
            />

            <h5 className="mt-5 text-xl font-bold text-gray-900">
              Noah Bennett
            </h5>

            <p className="mt-1 text-gray-500">Back-End Engineer</p>

            <div className="flex justify-center gap-3 mt-5">
              <a className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110">
                <i className="fa-brands fa-github"></i>
              </a>

              <a className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110">
                <i className="fa-brands fa-stack-overflow"></i>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="transition-all duration-300 text-center hover:-translate-y-1">
            <img
              src="/team/team4.jpg"
              alt="Team member"
              className="object-cover w-full shadow-lg aspect-square rounded-2xl shadow-gray-300/50"
            />

            <h5 className="mt-5 text-xl font-bold text-gray-900">
              Olivia Davis
            </h5>

            <p className="mt-1 text-gray-500">Product Manager</p>

            <div className="flex justify-center gap-3 mt-5">
              <a className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110">
                <i className="fa-brands fa-medium"></i>
              </a>

              <a className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-100 rounded-full hover:scale-110">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us*/}
      <section className="container mx-auto text-center px-4 mt-32 flex flex-col ">
        <div className=" mx-auto lg:w-6/12 ">
          <p className="text-rose-500 font-medium tracking-wider uppercase">
            Contact Us
          </p>
          <h4 className="block antialiased text-4xl font-semibold leading-[1.3]">
            do you want to work with us?
          </h4>
          <p className=" font-normal text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
            repudiandae.
          </p>
        </div>

        <form className="w-full mb-20 mt-10 mx-auto lg:w-5/12 space-y-6">
          {/* Row 1 */}
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="relative w-full">
              <input
                type="text"
                id="fullName"
                placeholder=" "
                className="
          peer w-full rounded-lg border border-gray-300
          bg-white px-4 pt-6 pb-2 text-gray-800
          transition-all duration-300 outline-none
          focus:border-gray-800
        "
              />

              <label
                htmlFor="fullName"
                className="
          absolute left-3 top-2 bg-white px-1
          text-xs font-medium text-gray-500
          transition-all duration-300

          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400

          peer-focus:top-2
          peer-focus:text-xs
          peer-focus:text-gray-700
        "
              >
                Full Name
              </label>
            </div>

            <div className="relative w-full">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="
          peer w-full rounded-lg border border-gray-300
          bg-white px-4 pt-6 pb-2 text-gray-800
          transition-all duration-300 outline-none
          focus:border-gray-800
        "
              />

              <label
                htmlFor="email"
                className="
          absolute left-3 top-2 bg-white px-1
          text-xs font-medium text-gray-500
          transition-all duration-300

          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400

          peer-focus:top-2
          peer-focus:text-xs
          peer-focus:text-gray-700
        "
              >
                Email Address
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="relative w-full">
            <textarea
              id="message"
              placeholder=" "
              rows="5"
              className="
        peer w-full min-h-[140px]
        resize-none rounded-lg
        border border-gray-300
        bg-white px-4 pt-6 pb-2
        text-gray-800
        transition-all duration-300
        outline-none
        focus:border-gray-800
      "
            />

            <label
              htmlFor="message"
              className="
        absolute left-3 top-2 bg-white px-1
        text-xs font-medium text-gray-500
        transition-all duration-300

        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-sm
        peer-placeholder-shown:text-gray-400

        peer-focus:top-2
        peer-focus:text-xs
        peer-focus:text-gray-700
      "
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="
      rounded-lg bg-gradient-to-tr from-rose-300 to-blue-300 px-6 py-3
      text-sm font-semibold text-slate-900 
      transition-all duration-300
      hover:bg-gray-800
      hover:shadow-lg
    "
          >
            Send Message
          </button>
        </form>
      </section>

      {/* footer*/}
      <footer className=" mt-24 border-t border-gray-200">
        <div className="container px-4 py-16 mx-auto">
          <div className="flex flex-col gap-12 md:flex-row">
            {/* About */}
            <div className="md:w-1/2">
              <h5 className="mb-4 text-xl font-semibold text-gray-900">
                About Us
              </h5>

              <p className="max-w-md leading-relaxed text-gray-500">
                A modern landing page built as part of my Tailwind CSS learning
                journey, focusing on responsive layouts, clean code and
                user-friendly interfaces.
              </p>
            </div>

            {/* Links */}
            <div className="md:w-1/4">
              <h5 className="mb-4 text-xl font-semibold text-gray-900">
                Quick Links
              </h5>

              <div className="flex gap-4 mt-4">
                <a
                  href="mailto:maedeh.s.khorasani@gmail.com"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 transition-all"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>

                <a
                  href="https://github.com/MaedehSKh80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 transition-all"
                >
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  href="https://linkedin.com/in/maedehsadatkhorasani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 transition-all"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="md:w-1/4">
              <h5 className="mb-4 text-xl font-semibold text-gray-900">
                Contact
              </h5>

              <p className="leading-relaxed text-gray-500">
                Have a project in mind or just want to say hello? We'd love to
                hear from you.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-12 text-center border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Made with ❤️ by{" "}
              <a
                href="https://itsmaedehskh.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 transition-colors duration-300 hover:text-black"
              >
                itsmaedehskh.ir
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
