import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavbarLayout/Navbar";

import './index.css'

function Layout() {
  return (
    <div className="container">
      <Navbar />
      <main className="min-h-[36vh]">
        <Outlet />
      </main>
      <footer className="mt-20 w-full bg-black text-white mb-14 p-6 sm:mt-56">
        <div className="flex justify-between" style={{ width: "100%" }}>
          <div>
            <h2 className="font-semibold mb-5 text-2xl">Sahifalar</h2>
            <ul className="list-none font-mono text-xl">
              <li className="mb-1 cursor-pointer hover:text-green-400 transition-all">
                Home
              </li>
              <li className="mb-1 cursor-pointer hover:text-green-400 transition-all">
                About
              </li>
              <li className="mb-1 cursor-pointer hover:text-green-400 transition-all">
                Info
              </li>
              <li className="cursor-pointer hover:text-green-400 transition-all">
                Blog
              </li>
              <li className="cursor-pointer hover:text-green-400 transition-all">
                News
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-5">
              Biz bilan bog&apos;laning
            </h2>
            <ul className="font-mono text-[18px]">
              <li className="mb-1 cursor-pointer">
                <a
                  href="https://www.instagram.com/iqtidormaktabi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="https://t.me/iqtidormaktabi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </li>
            </ul>
            <article className="flex gap-3 items-center">
              <h3 className="font-medium text-xl">Telefon raqam:</h3>
              <article>
                <p className="cursor-pointer text-[17px] font-sans">
                  +998908961833
                </p>
                <p className="cursor-pointer text-[17px]">+998907884880</p>
              </article>
            </article>
          </div>

          <div style={{ width: "400px" }}>
            <iframe
              width="100%"
              height="250"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=kitob%20tumani%20Iqtidor%20academy+(Iqtidor%20school)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              title="Google Map"
              style={{ border: 0 }}
            >
              <a href="https://www.gps.ie/collections/drones/">gps drone</a>
            </iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
