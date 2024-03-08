import logo from "../assets/logo.jpeg";
import React, { useState } from "react";

export const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className='py-8 md:flex w-[50vw] h-[10dvh] items-center justify-center mx-auto gap-16 hidden'>
        <a href='/' className='text-3xl'>
          <img src={logo.src} className='h-[8dvh]' />
        </a>
        <div className='flex gap-8 font-black font-[sofia-pro] uppercase'>
          <a href='/ohjelma'>OHJELMA</a>
          <a href='/ilmoittautuminen'>Ilmoittautuminen</a>
          <a href='/majoitus'>MAJOITUS</a>
        </div>
      </nav>
      <div className='flex justify-between p-4 items-center'>
        <button
          onClick={handleNav}
          className='p-4 m-2 top-2 left-2 md:hidden aspect-square text-xl'
        >
          <i className='fa-solid fa-bars'></i>
        </button>
        <img src={logo.src} alt='logo' className='h-[8dvh] md:hidden' />
      </div>
      {/* MOBILE NAV */}
      <section className='block md:hidden'>
        <nav
          className={
            nav
              ? "z-30 fixed h-screen top-0 left-0 bg-white ease-in-out duration-300 p-4 uppercase"
              : "z-30 fixed -left-full "
          }
        >
          <a href='/'>
            <h1 className='text-3xl mb-4'>SOY XXVI</h1>
          </a>
          <ul className='flex flex-col gap-4'>
            <li>
              <a href='/ohjelma'>OHJELMA</a>
            </li>
            <li>
              <a href='/ilmoittautuminen'>Ilmoittautuminen</a>
            </li>
            <li>
              <a href='/majoitus'>MAJOITUS</a>
            </li>
          </ul>
        </nav>

        <div
          onClick={handleNav}
          className={`fixed w-screen h-screen top-0 bg-black/50 z-20 ${
            nav ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </section>
    </>
  );
};
