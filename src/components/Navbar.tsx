import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        className="max-w-7xl bg-white rounded-lg fixed top-4  mx-auto inset-x-0 z-50 w-[95%] lg:w-full "
        style={{ transform: "none" }}
      >
        <div className="hidden lg:block w-full">
          <div className="w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200">
            <div className="flex flex-row gap-2 items-center">
              <a
                className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
                href="/"
              >
                <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
                <span className="font-medium text-black dark:text-white">
                  Every AI
                </span>
              </a>
              <div className="flex items-center gap-1.5">
                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 hover:text-black text-muted dark:text-muted-dark"
                  href="/pricing"
                >
                  Pricing
                </a>
                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 hover:text-black text-muted dark:text-muted-dark"
                  href="/blog"
                >
                  Blog
                </a>
                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] dark:hover:bg-neutral-800 hover:text-black text-muted dark:text-muted-dark"
                  href="/contact"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex space-x-2 items-center">
              <button className="w-10 h-10 flex hover:bg-gray-50 dark:hover:bg-white/[0.1] rounded-lg items-center justify-center outline-none focus:ring-0 focus:outline-none active:ring-0 active:outline-none overflow-hidden">
                <div style={{ opacity: 0, transform: "none" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-sun-low h-4 w-4 flex-shrink-0  dark:text-neutral-500 text-neutral-700"
                  >
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M4 12h.01"></path>
                    <path d="M12 4v.01"></path>
                    <path d="M20 12h.01"></path>
                    <path d="M12 20v.01"></path>
                    <path d="M6.31 6.31l-.01 -.01"></path>
                    <path d="M17.71 6.31l-.01 -.01"></path>
                    <path d="M17.7 17.7l.01 .01"></path>
                    <path d="M6.3 17.7l.01 .01"></path>
                  </svg>
                </div>
                <span className="sr-only">Toggle theme</span>
              </button>
              <a
                className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl"
                href="/login"
              >
                Login
              </a>
              <a
                className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
                href="/signup"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center lg:hidden ">
          <div className="flex justify-between bg-white dark:bg-neutral-900 items-center w-full rounded-full px-2.5 py-1.5 transition duration-200">
            <a
              className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
              href="/"
            >
              <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
              <span className="font-medium text-black dark:text-white">
                Every AI
              </span>
            </a>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="text-black dark:text-white h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
