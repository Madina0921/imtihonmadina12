import React from "react";
import { useTranslation } from "react-i18next";

import sardor from '../../assets/SardorDodiqov.jpg'
import schools from '../../assets/photo_2025-03-10_02-52-10.jpg'
function News() {
  const { t } = useTranslation(); // Bu joyda to‘g‘ri chaqirilishi kerak

  return (
    <div className="container mt-36 dark:bg-black dark:text-white">
      <h1 className="font-semibold text-3xl text-center mt-5 text-green-500 font-serif">
        {t("news_title")}
      </h1>
      <div>
        <div>
          <article className="flex justify-center items-center mt-10 gap-20">
            <img
              className="w-[350px] rounded-2xl shadow-xl cursor-pointer"
              src="https://6f2859a7-8667-4b05-9978-a8922e29bf1f.selstorage.ru/TG:1692597490?time=1721360982"
              alt=""
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
            <article
              className="leading-[28px] w-[400px] font-[Italy] text-xl text-center"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h2 className="text-xl font-serif">
                {t('guest_info')}
              </h2>
              
              <a href="https://t.me/iqtidormaktabi/31" target="_blank">
                <h2 className=" cursor-pointer font-semibold text-lg font-[cursive] mt-5 text-green-700">
                  {t("visit_date")}
                </h2>
              </a>
            </article>
          </article>
          <article className="flex justify-center items-center mt-10 gap-20">
            <article
              className="leading-[25px] w-[500px] font-[Italy] text-xl text-center "
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className=" cursor-pointer font-semibold text-lg font-[cursive] mt-5 text-green-700 mb-5">
               {t("news_day")}
              </h2>
              <p className="font-[cursive] text-[16px]">
                {t("very_day")}
              </p>
              <p className=" cursor-pointer font-semibold text-lg font-[cursive] mt-5">
               {t("visit_day")}
              </p>
            </article>
            <article
              className=""
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <img
                className="!w-[300px] rounded-xl cursor-pointer object-contain shadow-xl"
                src={sardor}
                alt=""
              />
              <h2 className="mt-10 text-center text-2xl font-[cursive] font-semibold">
                Sardor Sodiqov
              </h2>
            </article>
          </article>
          <article className="flex justify-center items-center mt-10 gap-20">
            <article>
              <img
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="w-[350px] rounded-xl cursor-pointer shadow-xl"
                src="https://parliament.gov.uz/media/deputy/articles/photo_2023-04-12_12-24-46.jpg"
                alt=""
              />
              <h2 className="mt-10 text-center text-2xl font-[cursive] font-semibold">
                Shaxnoza Xolmaxmatova
              </h2>
            </article>
            <article
              className="leading-[28px] w-[500px] font-[Italy] text-xl text-center "
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h2>
                
              </h2>
              <p>
                {t("nice_day")}
              </p>
              <p className="font-[cursive] font-bold mt-4">
               {t("day")}
              </p>
            </article>
          </article>
          <article className="flex justify-center items-center mt-20 gap-20">
            <article
              className="leading-[28px] w-[700px] font-[Italy] text-xl text-center"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className="font-semibold font-[cursive] text-2xl mb-5">
               {t("hippo")}
              </h2>
              <p className="text-xl leading-9 font-serif">
               {t("olympiad")}
              </p>
              <p className="font-[cursive] text-2xl text-green-700 mt-3">
                <b>{t("time")}</b>
              </p>
            </article>
            <article
              className="w-[500px] shadow-xl rounded-3xl"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <img
                className="rounded-2xl cursor-pointer"
                src={schools}
                alt=""
              />
            </article>
          </article>
        </div>
      </div>
    </div>
  );
}

export default News;
