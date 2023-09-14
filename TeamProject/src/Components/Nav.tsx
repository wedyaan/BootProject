import { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/logo.svg";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white-800">
        <div className="  mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-20 	">
            <div className="  ">
              <img className="w-40  " src={logo} alt="logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center justify-center space-x-4">
                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href="/"
                >
                  Home
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#D9ED92"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>

                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href=" FriendlyProducts"
                >
                  Eco-AI
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#D9ED92"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>

                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href="CarbonCal"
                >
                  Car emissions
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#D9ED92"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>

                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href="store"
                >
                  Stores
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#D9ED92"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>

                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href="Report"
                >
                  Save environment
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#D9ED92"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href="mapco"
                >
                  Recycling centers
                </a>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" bg-[#168AAD] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#76C893] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white bg-white-700"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only  ">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#D9ED92"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#D9ED92"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                      stroke="#D9ED92"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-9 pb-3 space-y-1 sm:px-3 text-center  leading-9"
              >
                <a
                  className="text-2xl text-[#168AAD] text-left items-right   hover:text-[#76C893]"
                  href="home"
                >
                  Home
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#D9ED92"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>

                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href=" FriendlyProducts"
                >
                  Eco-AI
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#D9ED92"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>

                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href="CarbonCal"
                >
                  Car emissions
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#D9ED92"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>

                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href="store"
                >
                  Stores
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#D9ED92"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>

                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href="Report"
                >
                  Save environment
                </a>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#D9ED92"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>

                <a
                  className="text-2xl text-[#168AAD] hover:text-[#76C893]"
                  href="mapco"
                >
                  Recycling centers
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
