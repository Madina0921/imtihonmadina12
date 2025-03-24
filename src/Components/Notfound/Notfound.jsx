import { Link } from "react-router-dom";
import { TbGhostFilled } from "react-icons/tb";
import { useTranslation } from "react-i18next";

function Notfound() {
    const { t } = useTranslation(); // Bu joyda to‘g‘ri chaqirilishi kerak
  
  return (
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl flex items-center">
        <b>4</b>
        <TbGhostFilled />
        <b>4</b>
      </h1>
      <p className="text-xl font-serif mt-10"> {t("qidir")} </p>
      <Link to={"/"} className="mt-4 text-green-100 rounded-md px-5 py-2 border-2 border-green-600  hover:text-white">
        {t("asosiy")}
      </Link>
    </div>
  );
}

export default Notfound;
