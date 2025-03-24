import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import i18n from "../../i18n/i18n";
import logo from "../../assets/photo_2025-03-16_04-08-45-removebg-preview.png";

import { IoMenuOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { LuSunDim } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation(); // Bu joyda to‘g‘ri chaqirilishi kerak

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    code: "uz",
    name: "O'zbek",
    flag: "https://cdn-icons-png.flaticon.com/512/197/197416.png",
  });
  const handleSignUp = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
    };
    console.log("User Data:", userData);
    setIsModalOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeLanguage = (code, name, flag) => {
    setSelectedLang({ code, name, flag });
    i18n.changeLanguage(code);
    setIsLangDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`container ${isDarkMode ? "dark:bg-black" : "bg-white"}`}>
      <nav className="fixed flex justify-between items-center py-4 px-5 top-0 left-0 w-full z-50 bg-white shadow-lg dark:bg-black dark:text-white">
        <article className="flex items-center">
          <img
            className="w-[50px] lg:w-[60px] object-contain"
            src={logo}
            alt="Logo"
          />
          <article className="text-xl lg:text-2xl font-[cursive] font-bold ml-2">
            <h2>Iqtidor</h2>
            <h2>School</h2>
          </article>
        </article>

        {/* Navigation Links */}
        <ul className="hidden lg:flex gap-5 lg:gap-12 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-4 border-green-700 pb-1" : "pb-1"
              }
            >
              {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "border-b-4 border-green-700 pb-1" : "pb-1"
              }
            >
              {t("about1")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/info"
              className={({ isActive }) =>
                isActive ? "border-b-4 border-green-700 pb-1" : "pb-1"
              }
            >
              {t("info")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "border-b-4 border-green-700 pb-1" : "pb-1"
              }
            >
              {t("blog")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? "border-b-4 border-green-700 pb-1" : "pb-1"
              }
            >
              {t("news")}
            </NavLink>
          </li>
        </ul>

        <article className="flex items-center gap-4">
          {/* Sign In Button */}
          <button
            onClick={handleModalToggle}
            className="hidden sm:block rounded-lg hover:bg-green-700 hover:text-white transition duration-300 border py-2 px-6 text-base"
          >
            {t("sign")}
          </button>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
                <article className=" flex justify-between items-center  mb-4">
                  <h2 className="text-xl font-semibold">Sign Up</h2>
                  <button
                    onClick={handleModalToggle}
                    className=" text-red-500 text-2xl hover:underline"
                  >
                    <RiCloseLargeFill />
                  </button>
                </article>
                <form>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md px-4 py-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="px-2 py-2 bg-green-800 text-white rounded-md text-lg"
          >
            {isDarkMode ? (
              <FaMoon className="text-xl" />
            ) : (
              <LuSunDim className="text-xl" />
            )}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-2 border px-3 py-2 rounded-md shadow-md dark:bg-gray-800 dark:text-white"
            >
              <img
                src={selectedLang.flag}
                alt={selectedLang.name}
                className="w-5 h-5"
              />
              <span>{selectedLang.name}</span>
              <MdKeyboardArrowDown />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-black border rounded-md shadow-lg">
                <button
                  onClick={() =>
                    changeLanguage(
                      "uz",
                      "O'zbek",
                      "https://cdn-icons-png.flaticon.com/512/197/197416.png"
                    )
                  }
                  className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/197/197416.png"
                    alt="O'zbek"
                    className="w-5 h-5"
                  />
                  <span>O'zbek</span>
                </button>
                <button
                  onClick={() =>
                    changeLanguage(
                      "en",
                      "English",
                      "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                    )
                  }
                  className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                    alt="English"
                    className="w-5 h-5"
                  />
                  <span>English</span>
                </button>
                <button
                  onClick={() =>
                    changeLanguage(
                      "ru",
                      "Русский",
                      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
                    )
                  }
                  className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg"
                    alt="Русский"
                    className="w-5 h-5"
                  />
                  <span>Русский</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-3xl" onClick={toggleMobileMenu}>
            <IoMenuOutline />
          </button>
        </article>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white dark:bg-black shadow-lg p-4 flex flex-col gap-4 text-lg">
            <li>
              <NavLink
                to="/"
                className="block py-2 text-center"
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className="block py-2 text-center"
                onClick={toggleMobileMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/info"
                className="block py-2 text-center"
                onClick={toggleMobileMenu}
              >
                Info
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className="block py-2 text-center"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className="block py-2 text-center"
                onClick={toggleMobileMenu}
              >
                News
              </NavLink>
            </li>
            <li>
              <article className="flex items-center gap-4">
                <button
                  onClick={handleModalToggle}
                  className="hidden sm:block rounded-lg hover:bg-green-700 hover:text-white transition duration-300 border py-2 px-6 text-base"
                >
                  {t("sign")}
                </button>

                {isModalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
                      <article className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Sign Up</h2>
                        <button
                          onClick={handleModalToggle}
                          className="text-red-500 text-2xl hover:underline"
                        >
                          <RiCloseLargeFill />
                        </button>
                      </article>
                      <form onSubmit={handleSignUp}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                          required
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone"
                          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
                          required
                        />
                        <button
                          type="submit"
                          className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md px-4 py-2"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </article>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
