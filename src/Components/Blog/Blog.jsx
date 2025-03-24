import React from "react";
// import "./Blog.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function Blog() {
  const { t } = useTranslation(); 
  
  const [eye, setEye] = useState(false);
  const [value, setValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const generator = () => {
    if (value.length === 0) return { text: "Parol kiriting", className: "" };
    if (value.length <= 4) return { text: "Kuchsiz", className: "low" };
    if (value.length <= 6) return { text: "O‘rta", className: "mid" };
    return { text: "Kuchli", className: "suc" };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Ism:", firstName, "Familiya:", lastName);
      console.log("Telefon raqam:", value);

      // Inputlarni tozalash
      setFirstName("");
      setLastName("");
      setValue("");

      setLoading(false);
    }, 2000);
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  let val = generator();

  return (
    <div className=" container mt-24 dark:bg-black dark:text-white">
      <div className="flex items-center justify-around dark:text-white ">
        <section>
          <article className="mt-10">
            <h2 className="font-[700] text-4xl">{t("Aloqa")}</h2>
            <p className="font-[cursive] text-xl mt-3">
             {t("sahifa")}
            </p>
          </article>
          <article className="flex justify-around items-center gap-5 rounded-xl border-2 p-5 mt-10 shadow-lg">
            <img
              className="w-20 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/7044/7044607.png"
              alt=""
            />
            <article className=" leading-8">
              <h2 className="font-semibold">
               {t("telefon")}
              </h2>
              <p className="cursor-pointer font-[500]">+998 99 092 30 06</p>
              <p className="cursor-pointer font-[500]"> +998 90 896 18 33</p>
              <a
                href="https://iqtidoracademy.uz/"
                target="_blank"
                className="cursor-pointer"
              >
                <b className="font-[cursive]">Iqtidor AT Academy</b>
              </a>
            </article>
          </article>
          <article className="flex items-center gap-7 rounded-xl border-2 p-6 mt-10 shadow-lg">
            <img
              className="w-[90px] cursor-pointer"
              src="https://images.vexels.com/media/users/3/137380/isolated/preview/1b2ca367caa7eff8b45c09ec09b44c16-instagram-icon-logo.png?w=360"
              alt=""
            />
            <article className=" leading-10 text-center">
              <h2 className="font-semibold text-xl">Instagram</h2>
              <p className="font-[cursive]">Iqtidor school</p>

              <a
                href="https://www.instagram.com/iqtidormaktabi/"
                target="_blank"
                className="cursor-pointer"
              >
                <button className="border-2 rounded-xl px-3 font-semibold">
                 {t("Obuna")}
                </button>
              </a>
            </article>
          </article>
          <article className="flex items-center gap-7 rounded-xl border-2 p-6 mt-10 shadow-lg">
            <img
              className=" w-24 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/3488/3488463.png"
              alt=""
            />
            <article className=" leading-10 text-center">
              <h2 className="font-semibold text-xl">Telegram</h2>

              <p className="font-[cursive]">Iqtidor school</p>
              <a
                href="https://t.me/iqtidormaktabi"
                target="_blank"
                className="cursor-pointer"
              >
                <button className="border-2 rounded-xl px-3 font-semibold">
                  {t("Obuna")}
                </button>
              </a>
            </article>
          </article>
        </section>
        <form onSubmit={handleSubmit} className="card">
          <article className="mb-8 mt-4 leading-7">
            <input
              className="name-input border-2 py-2 pr-20 pl-2 rounded-xl outline-none text-start dark:bg-black"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t("names")}
            />
          </article>

          <article>
            <input
              className="name-input  border-2 py-2 pr-20 pl-2 mb-5 rounded-xl outline-none text-start dark:bg-black  "
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={t("surname")}
            />
          </article>

          <label className="relative">
            <article className="w-full py-2 border-2 rounded-xl flex items-center gap-7">
              <input
                type={eye ? "text" : "password"}
                value={value}
                onChange={handlePasswordChange}
                placeholder={t("phone")}
                className={`${val.className} outline-none pl-2 dark:bg-black`}
              />
              <span onClick={() => setEye(!eye)} className="eye-icon">
                {eye ? <IoEyeOff /> : <IoEye />}
              </span>
            </article>
          </label>
          <br />
          {/* <p className="info">
            Sizning darajangiz: <span>{val.text}</span>
          </p> */}

          {loading ? (
            <p className="loading"> {t("yubor")} </p>
          ) : (
            <button
              type="submit"
              className=" rounded-lg py-2 text-white text-[18px] cursor-pointer mt-14 w-full bg-green-600 submit-button"
            >
              {t("yuborish")}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Blog;
