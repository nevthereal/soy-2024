import logo from "../assets/logo.jpeg";
import React, { useState } from "react";

export const Nav = () => {
  const links = [
    { href: "/scientific-program", text: "scientific program" },
    { href: "/registration", text: "registration" },
    { href: "/activities", text: "activities" },
    { href: "/venue", text: "venue/travel" },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="py-4 md:flex items-center justify-center mx-auto gap-8 hidden">
        <a href="/" className="text-3xl flex gap-4 font-bold items-center">
          <img src={logo.src} className="h-[10dvh]" />
          <p>SOY</p>
        </a>
        <div className="contents font-bold uppercase">
          {links.map((link) => {
            return <a href={link.href}>{link.text}</a>;
          })}
        </div>
      </nav>
      <div className="flex justify-between p-4 items-center">
        <button
          onClick={handleNav}
          className="p-0 bg-transparent ml-6 md:hidden text-xl"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <a href="/" className="flex gap-2 items-center md:hidden">
          <h1 className="text-2xl">Home</h1>
          <img src={logo.src} alt="logo" className="h-[8dvh]" />
        </a>
      </div>
      {/* MOBILE NAV */}
      <section className="block md:hidden">
        <nav
          className={
            nav
              ? "z-30 fixed h-screen top-0 left-0 bg-white ease-in-out duration-300 p-4 uppercase"
              : "z-30 fixed -left-full top-0"
          }
        >
          <a href="/">
            <h1 className="text-4xl mb-4 font-black">AOS 2025</h1>
          </a>
          <ul className="flex flex-col gap-4 font-medium">
            {links.map((link) => {
              return (
                <li>
                  <a href={link.href}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          onClick={handleNav}
          className={`fixed w-screen h-screen top-0 bg-black/50 z-20 ${
            nav ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        ></div>
      </section>
    </>
  );
};
