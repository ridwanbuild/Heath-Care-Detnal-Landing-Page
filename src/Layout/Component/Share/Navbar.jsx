import React, { useEffect, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handlerScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollNavbar && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);

        
      }
      setScrollNavbar(currentScrollY);
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, [scrollNavbar]);


  const menuItems = [
    { label: "home", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    // { label: "service", href: "#service" },
    { label: "review", href: "#review" },
    // { label: "blog", href: "#blog" },
    { label: "PRICING", href: "#price" },
    { label: "CONTACT US", href: "#contact" },
  ];

  const handlerMenu = () => {
    setOpen(!open);
  };

  return (
    <header
      className={`fixed lg:top-10 top-10 py-5 w-full z-20 shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0 bg-[var(--lightColor)]" : "-translate-y-35"
      }`}
    >
      <nav className=" relative z-10 ">
        {/* Top bar */}
        <div className="flex items-center container m-auto justify-between px-3">
          {/* Logo */}
          <div className="flex">
            <h1 className="font-bold text-[var(--primaryColor)] text-2xl ">
              Dental Care
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="lg:block  hidden ">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`px-3 relative  font-semibold uppercase text-[15px] text-[var(--deepColor)] ${
                  active === item.label ? "text-[var(--primaryColor)]" : ""
                } `}
              >
                {item.label}

                <span
                  className={`absolute left-3 bg-[var(--primaryColor)]  -bottom-1 w-7 h-0.5 ${
                    active === item.label ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div
            onClick={handlerMenu}
            className="flex items-center justify-center lg:hidden"
          >
            <button className="text-2xl p-1 border  border-[var(--primaryColor)] text-[var(--primaryColor)] cursor-pointer ">
              <AiOutlineMenuFold />
            </button>
          </div>
        </div>

        {/* Mobile menu items with slide animation */}
        <div
          className={`bg-[var(--lightColor)] shadow-md  absolute w-full top-13 overflow-hidden transition-all duration-300 ease-in-out lg:hidden  ${
            open
              ? "max-h-[400px] border-b-1 border-t-1 border-[var(--borderColor)] py-10 p-3"
              : "max-h-0 p-0"
          }`}
        >
          <div className="flex  flex-col text-[var(--deepColor)]">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  setActive(item.label);
                }}
                className={`relative  py-2 font-semibold uppercase text-[13px] ${
                  active === item.label ? "text-[var(--primaryColor)]" : ""
                }`}
              >
                {item.label}

                <span
                  className={`absolute  left-0 bg-[var(--primaryColor)]  bottom-1 w-7 h-0.5 ${
                    active === item.label ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
