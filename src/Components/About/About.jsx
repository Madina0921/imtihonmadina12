import React from "react";

import img3 from "../../assets/photo_2024-11-13_15-25-09.jpg";
import img1 from "../../assets/photo_2025-03-02_13-03-01.jpg";
import img from "../../assets/photo_2025-02-27_00-48-30.png";
import child from "../../assets/photo_2025-03-21_12-02-30.jpg";
import rasm8 from "../../assets/noutbook-removebg-preview.png";
import cam from "../../assets/cambridge-removebg-preview.png";
import idp from "../../assets/idp.jpg";
import { useTranslation } from "react-i18next";

function AboutComponents() {
  const { t } = useTranslation();

  return (
    <div className="container dark:bg-black dark:text-white">
      <div className="flex gap-8 mt-24 justify-around items-center mr-10 ml-10">
        <div
          className="flex items-center gap-5 mt-9"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <article>
            <img
              className="w-56 h-80 object-cover cursor-pointer rounded-2xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              src={child}
              alt="Iqtidor school"
            />
          </article>
          <article
            className=""
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              className="w-52 mb-2 h-56 object-cover cursor-pointer rounded-xl"
              src={img1}
              alt="Iqtidor school"
            />
            <img
              className="w-[210px] h-56 object-cover cursor-pointer rounded-lg"
              src={img3}
              alt="Iqtidor school"
            />
          </article>
        </div>
        <div
          className="w-2/4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2 className="font-serif leading-7">
            {t("welcome")}
          </h2>
         
        </div>
      </div>
      <div>
        <div
          className="flex justify-around items-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <article className="w-1/2">
            <h2 className="text-5xl font-serif">
              {t("create")}
            </h2>
            <h2 className="text-5xl text-green-700"> {t("child")} </h2>
          
          </article>
          <section className="flex items-center gap-8 mt-9">
            <article data-aos="fade-up" data-aos-duration="3000">
              <img
                className="h-96 object-cover rounded-xl cursor-pointer"
                src={img3}
                alt=""
              />
            </article>
            <article data-aos="fade-up" data-aos-duration="3000">
              <img
                className="h-56 mb-6 cursor-pointer rounded-lg"
                src={img}
                alt=""
              />
              <img
                className="h-56 cursor-pointer rounded-lg"
                src={img1}
                alt=""
              />
            </article>
          </section>
        </div>
        <div
          className="mb-10 flex items-center justify-between "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <article data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <img
              className="w-[540px] h-[450px] object-cover rounded-xl cursor-pointer"
              src={img3}
              alt=""
            />
          </article>
          <article
            className="w-1/2"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h2 className="font-semibold text-[45px] font-serif mb-3">
              {t("about")}
            </h2>
            <p className="font-serif">
              {t("our")}
            </p>
            <div className="text-xl mt-5">
              <article
                className="flex gap-4 font-serif"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <h2 className="w-7 h-7 rounded-[50%] bg-green-900 text-white pl-2 mb-2 ">
                  1
                </h2>
                <h3> {t("lesson")} </h3>
              </article>
              <article
                className="flex gap-4 font-serif"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <h2 className="w-7 h-7 rounded-[50%] bg-green-900 text-white pl-2 mb-2">
                  2
                </h2>
                <h3> {t("clever")} </h3>
              </article>
              <article className="flex gap-4 font-serif">
                <h2 className="w-7 h-7 rounded-[50%] bg-green-900 text-white pl-2 mb-2">
                  3
                </h2>
                <p> {t("teach")} </p>
              </article>
              <article className="flex gap-4 font-serif">
                <h2 className="w-7 h-7 rounded-[50%] bg-green-900 text-white pl-2 mb-2">
                  4
                </h2>
                <p> {t("methods")} </p>
              </article>
              <article className="flex gap-4 font-serif">
                <h2 className="w-7 h-7 rounded-[50%] bg-green-900 text-white pl-2 mb-2">
                  5
                </h2>
                <p> {t("class")} </p>
              </article>
              <article className="flex gap-4 font-serif">
                <h2 className="w-7 h-7 rounded-[50%] bg-green-900 text-white pl-2 mb-2">
                  6
                </h2>
                <p> {t("academic")} </p>
              </article>
            </div>
          </article>
        </div>
      </div>
      <div>
        <div className="mt-20">
          <article className="flex items-center justify-around">
            <div
              className="font-sans leading-[42px] text-xl"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <article
                className="font-semibold text-4xl font-mono mb-12"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                {t("oshxona")}
              </article>
              <article
                className="flex items-center gap-3"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <h2>
                  <b>1.</b> {t("yangi")}
                </h2>
              </article>
              <article className="flex items-center gap-3">
                <h2>
                  <b>2.</b> {t("food")}
                </h2>
              </article>
              <article className=" flex items-center gap-3">
                <h2>
                  <b>3.</b> {t("etibor")}
                </h2>
              </article>
              <article className=" flex items-center gap-3">
                <h2>
                  <b>4.</b> {t("taom")}
                </h2>
              </article>
            </div>
            <img
              className="w-[550px] rounded-xl shadow-xl cursor-pointer"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              src="https://agmk.uz/uploads/news/d459d2279f5e0dea54a69f517553455a.JPG"
              alt=""
            />
          </article>
        </div>
        <div>
        </div>
      </div>
      {/* <div className="mt-10">
        <article>
          <h2 className="font-bold text-3xl">Narx va chegirmalar</h2>
          <article className="flex gap-2 mt-3 items-center ">
            <img
              className="w-12"
              src="https://cdn3.iconfinder.com/data/icons/basic-ui-vol-9-32-px/32/ui-percent-percentage-discount-promo-512.png"
            />
            <p className="font-serif text-xl">
              To&apos;lov va chegirmalar haqida <br /> barcha ma&apos;lumotlarga
              ega bo&apos;ling
            </p>
          </article>
          <div className="mt-5 grid grid-cols-2 items-center gap-5">
            <div>
              <article className=" shadow-md rounded-md px-5 py-3 font-sans text-xl">
                <h2>
                  Oylik to&apos;lov <b>3 000 000 uzs</b>
                </h2>
              </article>
              <article className="shadow-md rounded-md text-xl px-5 py-3 font-sans">
                <h2>
                  Yillik to&apos;lov <b>2 700 000 uzs/yil</b>
                </h2>
              </article>
            </div>
            <article className="shadow-md rounded-md  px-5 py-3 font-sans text-xl grid gap-5 row-span-2 ">
              <p>
                2 ta farzand o&apos;qitayotganlarga <b>5% chegirma</b> mavjud
              </p>
              <p>
                Bittada 1 yillik to&apos;lov qilinganda <b> 10% chegirma</b>{" "}
                mavjud
              </p>
            </article>
          </div>
        </article>
      </div> */}
      <div className="container mt-10">
        <h1 className="text-center font-serif font-semibold text-4xl text-green-700">
          {t("ixtisoslashuv")}
        </h1>
        <div
          className="grid grid-cols-3 gap-9 p-5  shadow-lg "
          data-aos="zoom-in-up"
        >
          <div className="">
            <article className="mb-8">
              <p className="font-serif text-lg">
                <b className="text-xl font-semibold">Iqtidor School</b> - {t("maxsus1")}
              </p>
            </article>
            <article
              className="bg-green-600 text-white p-7 rounded-xl"
              data-aos="zoom-in-up"
            >
              <h2 className="font-bold text-xl mb-5"> {t("ayti")} </h2>
              <p className="font-serif ">
                {t("qullanma")}
              </p>
              <img className=" w-full" src={rasm8} alt="" />
            </article>
          </div>
          <div className=" grid grid-rows-2 gap-7 text-white">
            <article
              className="bg-green-600 rounded-xl p-7 text-center"
              data-aos="zoom-in-up"
            >
              <h2 className="text-2xl font-semibold font-serif mb-3"> {t("sport")} </h2>
              <p className="font-serif">
               {t("soglom")}
              </p>
            </article>
            <article
              className="bg-green-600 rounded-xl p-7 font-serif text-center"
              data-aos="zoom-in-up"
            >
              <h2 className=" text-2xl font-semibold mb-4 "> {t("matem")} </h2>
              <p>
                {t("matematika")}
              </p>
            </article>
          </div>
          <div className="bg-green-600 p-8 rounded-xl" data-aos="zoom-in-up">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-white">
              {t("chet")}
            </h2>
            <p className="text-white font-serif">
              {t("til")}
            </p>
            <article className="grid grid-cols-2 mt-9">
              <img
                src={cam}
                className="!w-36 h-36 object-cover p-3 bg-cyan-50 rounded-[50%] mt-20"
                alt=""
              />
              <img
                src={idp}
                className=" object-cover p-3 rounded-[50%] "
                alt=""
              />
            </article>
          </div>
        </div>
        <section className=" grid grid-cols-2 items-center gap-14 mt-16">
          <article className=" shadow-md rounded-lg px-7 py-4 cursor-pointer">
            <h2 className="font-bold text-[22px] text-center">
              {t("axborot")}
            </h2>
            <p className=" font-serif text-lg text-center mt-5">
              {t("darslar")}
            </p>
          </article>
          <article className=" shadow-md rounded-lg px-7 py-4 cursor-pointer">
            <h2 className="font-bold text-[22px] text-center"> {t("ingliz")} </h2>
            <p className="font-serif text-lg text-center mt-5">
              {t("xalqaro")}
            </p>
          </article>

          <article className=" shadow-md rounded-lg px-7 py-4 cursor-pointer">
            <h2 className="font-bold text-[22px] text-center"> {t("rus")} </h2>
            <p className="font-serif text-lg text-center mt-5">
             {t("davr")}
            </p>
          </article>

          <article className=" shadow-md rounded-lg px-7 py-4 cursor-pointer">
            <h2 className="font-bold text-[22px] text-center"> {t("arab")} </h2>
            <p className="font-serif text-lg text-center mt-5">
             {t("ishonch")}
            </p>
          </article>

          <article className=" shadow-md rounded-lg px-7 py-4 cursor-pointer">
            <h2 className="font-bold text-[22px] text-center"> {t("mashq")} </h2>
            <p className="font-serif text-lg text-center mt-5">
              {t("gimnastika")}
            </p>
          </article>

          <article className=" shadow-md rounded-lg px-7 py-4 cursor-pointer">
            <h2 className="font-bold text-[22px] text-center"> {t("robot")} </h2>
            <p className="font-serif text-lg text-center mt-5">
              {t("robotexnika")}
            </p>
          </article>
        </section>
      </div>
      
    </div>
  );
}

export default AboutComponents;
