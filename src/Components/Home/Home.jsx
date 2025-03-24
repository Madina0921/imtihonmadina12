import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react"; // useEffect import qilindi
import AOS from "aos"; // AOS import qilindi
import "aos/dist/aos.css"; // AOS uchun CSS import qilindi

import { RiCloseLargeFill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import BlogComponents from "../../Components/Blog/Blog";

import img from "../../assets/photo_2025-02-27_00-48-30.png";
import photo1 from "../../assets/photo_2024-11-13_15-25-09.jpg";
import photo2 from "../../assets/photo_2025-03-02_13-03-01.jpg";
import img1 from "../../assets/photo_2025-03-02_13-03-01.jpg";
import img2 from "../../assets/photo_2025-03-02_13-03-00.jpg";
import photo from "../../assets/photo_2024-11-13_15-25-09.jpg";
// import photo2 from "../../assets/photo_2025-03-10_02-52-10.jpg";
import hordiq from '../../assets/hordiq.jpg'
import rasm12 from "../../assets/photo_2024-11-13_15-25-10.jpg";
import talim from "../../assets/photo_2025-03-10_08-00-47-removebg-preview.png";
import daraja from "../../assets/daraja.png";
import { useTranslation } from "react-i18next";

function MainHome() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="container dark:bg-black dark:text-white">
      <div className="flex flex-col items-center mt-12 py-10">
        <div
          className="relative rounded-xl w-full max-w-5xl z-0 mt-11"
          data-aos="zoom-in"
        >
          <img
            src={img}
            alt="Iqtidor School"
            className="w-full h-[550px] object-cover rounded-xl shadow-lg"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center rounded-xl bg-black bg-opacity-50 text-white px-4"
            data-aos="flip-up"
          >
            <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
              {t("qanot")}
            </h1>
            <button
              onClick={handleModalToggle}
              className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md shadow-lg"
            >
              {t("list")}
            </button>
          </div>
        </div>

        <div
          className="hidden sm:flex flex-none justify-center items-center gap-6 z-10 rounded-xl mt-[-150px] lg:mt-[-120px]"
          data-aos="fade-up"
        >
          <img
            src={rasm12}
            alt="Sinfxona 3"
            className="w-[200px] rounded-xl h-[250px] object-cover"
          />

          <img
            src={img2}
            alt="Sinfxona 2"
            className="w-[200px] rounded-xl h-[250px] object-cover"
          />

          <img
            src={img1}
            alt="Sinfxona 1"
            className="w-[200px] rounded-xl h-[250px] object-cover"
          />
        </div>

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
      </div>

      <div className="container relative flex flex-col lg:flex-row justify-evenly items-center mb-10 gap-10 lg:gap-20">
        {/* Kichik ekranlar uchun background-image */}
        <div
          className="absolute inset-1 w-full h-full bg-cover bg-center opacity-45 md:block lg:hidden"
          style={{ backgroundImage: `url(${rasm12})` }}
        ></div>

        {/* Matn qismi */}
        <section
          className="relative w-full  md:bg-transparent z-10"
          data-aos="fade-up"
        >
          <h2 className="font-[800] text-4xl text-green-900">
            {" "}
            {t("lesson1")}{" "}
          </h2>
          <p className="mt-6 mb-5 text-xl leading-8 font-serif">
            {t("iqtidor")}
          </p>
          <ul className="font-[cursive] leading-8 mb-7">
            <li className="cursor-pointer">{t("lang")}</li>
            <li className="cursor-pointer">{t("ilm")}</li>
            <li className="cursor-pointer"> {t("club")} </li>
            <li className="cursor-pointer"> {t("fresh")} </li>
            <li className="cursor-pointer"> {t("room")} </li>
            <li className="cursor-pointer"> {t("kutubxona")} </li>
          </ul>
        </section>

        {/* Faqat katta ekran uchun rasm */}
        <article className="lg:block hidden" data-aos="fade-up">
          <img
            className="w-[600px] object-cover mt-6 sm:mt-10 rounded-2xl max-w-full"
            src={rasm12}
            alt="Lesson Process"
          />
        </article>
      </div>

      <div className=" shadow-lg py-5 px-9 rounded-lg lg:flex-row mb-10 gap-10">
        <article className=" flex justify-around mb-9">
          <div
            className="flex items-center w-full h-[320px]  shadow-md shadow-[#918e8e97] px-5 rounded-lg mt-[72px]"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <Swiper
              slidesPerView={4}
              simulateTouch={false}
              spaceBetween={40}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img className=" w-[200px] rounded-xl" src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[200px] object-cover h-[280px] rounded-xl" src={hordiq} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[200px] rounded-xl" src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[200px] rounded-xl" src={img} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[200px] rounded-xl" src={photo} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[200px] rounded-xl" src={rasm12} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </article>
        {/* className=" hidden grid-cols-3  w-full mb-5 lg:grid" */}
        <h2 className=" leading-8 text-center text-lg ">{t("kitob")}</h2>
      </div>
      <div className="container">
        <h1 className="text-center font-serif font-extrabold text-4xl text-green-700 mb-6">
          {t("maqsad")}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 p-5 shadow-md">
          {/* Maqsadlar bo'yicha kartalar */}
          <div>
            <article className="mb-14 pt-9" data-aos="flip-left">
              <p className="font-serif text-xl dark:text-white dark:font-[cursive]">
                <b className="text-2xl font-semibold">Iqtidor School</b> -
                {t("maxsus2")}
              </p>
            </article>
            <article
              className="bg-green-600 text-white p-7 rounded-xl mt-9"
              data-aos="flip-left"
            >
              <h2 className="font-bold text-2xl mb-6">{t("talim1")}</h2>
              <p className="font-serif pb-3">{t("zamonaviy")}</p>
              <img className="pb-8 pt-9" src={talim} alt="" />
            </article>
          </div>
          <div className="grid gap-7 text-white">
            <article
              className="bg-green-600 rounded-xl p-7 text-center"
              data-aos="flip-left"
            >
              <h2 className="text-2xl font-semibold font-serif mb-3">
                {t("shaxsiy")}
              </h2>
              <p className="font-serif">{t("qobilyat")}</p>
              <img src={daraja} alt="" />
            </article>
            <article
              className="bg-green-600 rounded-xl p-7 font-serif text-center"
              data-aos="flip-left"
            >
              <h2 className="text-3xl font-serif font-semibold mb-4 text-white">
                {t("ijodiy")}
              </h2>
              <p className="text-white font-serif">{t("tanqidiy")}</p>
            </article>
          </div>
          <div className="rounded-xl gap-5">
            <article
              className="mt-2 bg-green-600 text-white p-7 rounded-xl text-center"
              data-aos="flip-left"
            >
              <h2 className="font-bold text-2xl mb-6"> {t("qadr")} </h2>
              <p className="font-serif">{t("yuksak")}</p>
            </article>
            <article
              className="bg-green-600 text-white p-7 rounded-xl mt-9"
              data-aos="flip-left"
            >
              <h2 className="font-bold text-2xl mb-6">{t("rivojlanish")}</h2>
              <p className="font-serif pb-3">{t("dastur")}</p>
              <img className="pb-2 pt-5" src={talim} alt="" />
            </article>
          </div>
        </div>
      </div>
      <div
        className="flex items-center w-full h-[320px]  shadow-md shadow-[#918e8e97] px-5 rounded-lg mt-[72px]"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <Swiper
          slidesPerView={4}
          simulateTouch={false}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img className=" w-[200px] rounded-xl" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[200px] rounded-xl" src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[200px] rounded-xl" src={photo2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[200px] rounded-xl" src={img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[200px] rounded-xl" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[200px] rounded-xl" src={img} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container mt-20">
        <h1 className="font-bold text-4xl text-center text-green-600 font-serif">
          {t("shakl")}
        </h1>
        <div className="flex gap-10">
          <div className="text-center mt-14 font-[cursive]">
            <article
              className="px-5 cursor-pointer shadow-lg py-5 rounded-xl leading-8 font-[cursive]"
              data-aos="zoom-in-right"
            >
              <h2> {t("nazorat")} </h2>
              <p>{t("natija")}</p>
            </article>
            <article
              className="shadow-lg cursor-pointer p-5 rounded-xl mt-10"
              data-aos="zoom-in-right"
            >
              <h2>{t("shaxmat")}</h2>
            </article>
            <article
              className="shadow-lg cursor-pointer mt-10 rounded-xl p-5"
              data-aos="zoom-in-right"
            >
              <h2> {t("halol")} </h2>
            </article>
            <article
              className="shadow-lg cursor-pointer mt-10 rounded-xl p-5"
              data-aos="zoom-in-right"
            >
              <h2> {t("day_one")} </h2>
            </article>
            <article
              className="shadow-lg cursor-pointer mt-10 rounded-xl p-5 text-center"
              data-aos="zoom-in-right"
            >
              {t("ozb")}
            </article>
          </div>
          <article
            className=" rounded-xl bg-gray-700 overflow-hidden h-[550px] cursor-pointer object-contain w-1/2 mb-8 mt-14"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className=" w-full" src={photo1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={photo1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={photo} alt="" />
              </SwiperSlide>
            </Swiper>
          </article>
        </div>
      </div>
      <BlogComponents />
    </div>
  );
}

export default MainHome;
