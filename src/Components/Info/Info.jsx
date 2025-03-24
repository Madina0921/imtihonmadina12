import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import alisher_tojiyev from "../../assets/photo_2025-03-10_09-40-00.jpg";

function Info() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="container mt-40 dark:bg-black dark:text-white">
      <div className="mt-10">
        <article
          className="flex justify-around gap-16 mx-10 font-sans"
          data-aos="fade-up"
        >
          <article className="bg-white px-5 py-3 w-1/2 rounded-xl shadow-lg cursor-pointer text-center pt-16 dark:bg-black">
            <h2 className="font-semibold text-2xl mb-7">{t("school")}</h2>
            <p className="text-lg">{t("pupil")}</p>
          </article>
        </article>

        <article
          className="flex justify-around gap-16 mx-10 mt-8"
          data-aos="fade-up"
        >
          <img
            className="rounded-xl w-[450px] cursor-pointer"
            src="https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=612x612&w=0&k=20&c=NbVChOV9wIbQOhUD6BqpouZHHBbyQ2rkSjaVfIhpMv8="
            alt=""
            data-aos="fade-right"
          />
          <article className="bg-white px-5 py-3 rounded-xl shadow-lg cursor-pointer text-center pt-14 font-sans dark:bg-black">
            <h2 className="font-semibold text-2xl mb-9">{t("AT")}</h2>
            <p className="text-lg mb-2">{t("Iqtidor")}</p>
            <p className="text-lg">{t("talim")}</p>
          </article>
        </article>

        <article
          className="flex justify-around gap-16 mx-10 mt-8 font-sans"
          data-aos="fade-up"
        >
          <article className="bg-white px-5 py-3 w-1/2 rounded-xl shadow-lg cursor-pointer text-center pt-16 dark:bg-black">
            <h2 className="font-semibold text-2xl mb-6">{t("teacher")}</h2>
            <p className="text-lg mb-2">{t("ustoz")}</p>
          </article>
          <img
            className="rounded-xl w-[450px] cursor-pointer"
            src="https://media.istockphoto.com/id/174837012/photo/school-children-in-classroom-with-raised-hands.jpg?s=612x612&w=0&k=20&c=YGwZcx1c9XWv_rlB1TuVCDOmYtVouQKqeIHyIFCBmus="
            alt=""
            data-aos="fade-left"
          />
        </article>
        <section
          className="grid grid-cols-2 mt-10 gap-14"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <article
            className=" cursor-pointer shadow-lg p-10 text-center font-serif leading-8 rounded-xl "
            data-aos="fade-down"
          >
            <h1 className="font-semibold">{t("kongil")}</h1>
            <p>{t("tadbir")}</p>
          </article>
          <article
            className=" cursor-pointer shadow-lg p-10 text-center font-serif leading-8 rounded-xl "
            data-aos="fade-down"
          >
            <h1 className="font-semibold">{t("tajriba")}</h1>
            <p>{t("munosabat")}</p>
          </article>
          <article
            className=" cursor-pointer shadow-lg p-10 text-center font-serif leading-8 rounded-xl "
            data-aos="fade-down"
          >
            <h1 className="font-semibold">{t("maxsus")}</h1>
            <p>{t("forma")}</p>
          </article>
          <article
            className=" cursor-pointer shadow-lg p-10 text-center font-serif leading-8 rounded-xl "
            data-aos="fade-down"
          >
            <h1 className="font-semibold">{t("dam")}</h1>
            <p>{t("one")}</p>
          </article>
        </section>
      </div>
      <div className=" flex  gap-10 justify-around mt-12">
        <article>
          <h2 className=" text-3xl mt-5 mb-6 font-bold">{t("asoschisi")}</h2>
          <img
            className=" rounded-xl  object-contain cursor-pointer"
            src={alisher_tojiyev}
            alt=""
          />
        </article>
        <div className=" w-1/2  grid grid-cols-2  gap-10 mt-20 text-white ">
          <div>
            <article className="bg-green-600 px-3 py-2 rounded-xl mb-9">
              <h1 className="font-bold text-5xl ">&apos;&apos;</h1>
              <p className="font-serif text-xl pb-5 pr-5">
                <i> {t("saodat")} </i>
              </p>
            </article>
            <article className="bg-green-700 px-4 py-3 rounded-xl">
              <p className="font-serif leading-7">
                <i>
                  <b>Alisher Tojiyev</b> - {t("at")}
                </i>
              </p>
            </article>
          </div>
          <article className="bg-green-700 px-6 py-3  rounded-xl">
            <article className=" leading-10 text-xl font-bold ">
              <p>
                <a href="https://uic.group/" target="_blank">
                  UIC Group
                </a>
              </p>
              <p>
                <a href="https://road24.uz/" target="_blank">
                  Road24.uz
                </a>
              </p>
              <p>
                <a href="https://hududgaz.uz/?2" target="_blank">
                  HGT App
                </a>
              </p>
              <p>
                <a href="https://paylov.uz/" target="_blank">
                  Paylov.uz
                </a>
              </p>
              <p>
                <a href="https://uic.group/brief/game" target="_blank">
                  UIC Games
                </a>
              </p>
              <p>
                <a href="https://sharh.commeta.uz/" target="_blank">
                  Commeta.sharh
                </a>
              </p>
            </article>
            <p className="text-lg font-[400] mt-4">
              <i>
                {t("company")}
              </i>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Info;

// group-hover:text-green-600 hover:border-2 hover:scale-105 transition-all

{
  /* <section className="mt-10">
  <article className="flex justify-around items-center gap-5 rounded-xl border-2 p-5 mt-10 shadow-lg cursor-pointer">
    <img
      className="w-16"
      src="https://images.icon-icons.com/67/PNG/512/exercise_sport_13306.png"
      alt=""
    />
    <h2 className="text-xl font-serif">
      Gimnastika va sport to&apos;garaklari
    </h2>
  </article>
  <article className="flex justify-around items-center gap-5 rounded-xl border-2 p-5 mt-5 shadow-lg cursor-pointer">
    <img
      className="w-20"
      src="https://www.shutterstock.com/image-vector/uniform-line-icon-outline-vector-600nw-692900107.jpg"
      alt=""
    />
    <h2 className="text-xl font-serif">
      Maktab tomonidan maxsus forma
    </h2>
  </article>
  <article className="flex justify-around items-center gap-5 rounded-xl border-2 p-5 mt-5 shadow-lg cursor-pointer">
    <img
      className="w-20"
      src="https://cdn-icons-png.flaticon.com/512/5315/5315605.png"
      alt=""
    />
    <h2 className="font-serif text-xl">
      {" "}
      AT va Ingliz tiliga ixtisoslashtirilgan
    </h2>
  </article>
  <article className="flex justify-around items-center gap-5 rounded-xl border-2 p-5 mt-5 shadow-lg cursor-pointer">
    <img
      className="w-20"
      src="https://cdn-icons-png.freepik.com/256/489/489874.png?semt=ais_hybrid"
      alt=""
    />
    <h2 className=" font-serif text-xl">
      {" "}
      Tushdan keyingi dam olish xonalari
    </h2>
  </article>
  <article className="flex justify-around items-center gap-5 rounded-xl border-2 p-5 mt-5 shadow-lg cursor-pointer">
    <img
      className="w-20"
      src="https://cdn-icons-png.flaticon.com/512/8017/8017560.png"
      alt=""
    />
    <h2 className="font-serif text-xl">
      {" "}
      3 mahal sog&apos;lom va halol ovqat
    </h2>
  </article>
</section> */
}
