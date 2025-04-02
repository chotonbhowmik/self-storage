import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Google from "../../../assets/google.png";
import Badge from "../../../assets/badge.png";
import correct from "../../../assets/correct.png";
import Google1 from "../../../assets/google1.png";
import oliver from "../../../assets/oliver.png";
import hans from "../../../assets/hans.png";
import fuat from "../../../assets/fuat.png";
import nlu from "../../../assets/n.png";
import armando from "../../../assets/armando.png";
import sandra from "../../../assets/sandra.png";
import no from "../../../assets/no.jpg";

const testimonials = [
  {
    id: 1,
    name: "Oliver",
    image: oliver,
    text: "Coole Idee, nun auch im 3.Bezirk. Sehr nett geführt. Lift vorhanden. Verschiedene Boxgrößen zu einem fairen Preis.",
  },
  {
    id: 2,
    name: "Hans",
    image: hans,
    text: "Seriös, zuverlässig und auch noch sympathisch.. Da kann die Konkurrenz einpacken!😃",
  },
  { id: 3, name: "Fuat", image: fuat, text: "Faire Preise und super Service" },

  {
    id: 7,
    name: "Wolfgang Irbinger",
    image: no,
    text: "Ich habe schnell etwas gesucht, um nach meinem Umzug mein Piano zu lagern und dank foxbox schnell was gefunden. Der Eigentümer ist eine Naturgewalt, da sind alle Wertsache sicher. Mehr kann man sich von so einem Platz nicht wünschen .. Sieht man hier auch an den anderen Kommentaren.. Top Wiener Unternehmen",
  },
  {
    id: 8,
    name: "Tobias Schwarzendorfer",
    image: no,
    text: "Foxbox war meine erste Anlaufstelle und hat alle Wünsche nicht nur erfüllt sondern sogar übertroffen! Sehr weiter zu empfehlen! Danke an das Foxbox Team! Ich bin gerne Kunde bei euch…",
  },
  {
    id: 9,
    name: "Schahin Gholami",
    image: no,
    text: "Definitiv die erste Wahl, wenn man Lagerplatz braucht. Unkompliziert, vernünftige Preise und freundlich",
  },
  {
    id: 10,
    name: "Michael Kühnmeyer",
    image: no,
    text: "Idealer Standort, um in der City Waren zu lagern. Top Service und Top Preise.",
  },
  {
    id: 11,
    name: "Hans Seppele",
    image: no,
    text: "Mir is wichtig, daß die Mädels alle gsunde Zähn haben!",
  },
  {
    id: 12,
    name: "David Bergmann",
    image: no,
    text: "Zuverlässig und unkompliziert! Top Lagerplatz!",
  },
  {
    id: 13,
    name: "Uras Aslan",
    image: no,
    text: "Sehr gut situierte Lagerfläche !",
  },
  {
    id: 14,
    name: "Rudolf Walouschek",
    image: no,
    text: "Top Service und Preis!!!",
  },
  {
    id: 15,
    name: "Stefan",
    image: no,
    text: "Top!! Kann ich nur empfehlen!!",
  },
  {
    id: 16,
    name: "Kristian Batista",
    image: no,
    text: "Top Preis-Leistungs-Verhältnis 👌🏼",
  },
  {
    id: 17,
    name: "Ramin Gholami",
    image: no,
    text: "Genau was ich gesucht habe!!",
  },
  {
    id: 4,
    name: "Armando",
    image: armando,
    text: "Top",
  },
  { id: 5, name: "Sandra", image: sandra, text: "Sehr empfehlenswert!" },
  { id: 6, name: "N Lu", image: nlu, text: "Beste." },
];

const Testimonial = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto dark:bg-white">
        <h3 className="font-bold text-[40px] text-[#231ADF] text-center pt-10 pb-5">
          Kunden bewerten uns mit 5,0 Sternen
        </h3>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
            <h3 className="font-semibold text-[32px] text-[#231ADF]">FoxBox</h3>
            <div className="flex flex-col items-center">
              <p className="font-bold text-[20px] text-[#0C094E] mt-2">
                Insgesamt 19 Google-Bewertungen
              </p>
              <img src={Google} alt="Google Logo" className="mt-2" />
            </div>
          </div>

          {/* Swiper Slider Section */}
          <div className="w-full lg:w-2/3 mt-5 lg:mt-0 h-full px-2 lg:px-0">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                1024: { slidesPerView: 2 },
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="pb-10 h-full"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-[#E9E8FC80] shadow-lg rounded-[10px] p-5 text-center">
                    <div className="flex flex-row gap-3 mt-4">
                      <div className="flex flex-row gap-1">
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ color: "#FBBF24", fontSize: "25px" }}
                        ></i>
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ color: "#FBBF24", fontSize: "25px" }}
                        ></i>
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ color: "#FBBF24", fontSize: "25px" }}
                        ></i>
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ color: "#FBBF24", fontSize: "25px" }}
                        ></i>
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ color: "#FBBF24", fontSize: "25px" }}
                        ></i>
                      </div>
                      <img src={Badge}></img>
                    </div>
                    <p className="text-gray-600 mt-2 text-left">{item.text}</p>
                    {/* <h4 className="text-xl font-semibold mt-3">{item.name}</h4> */}
                    <div className="flex flex-row justify-between pt-5">
                      <div className="flex items-center gap-4 text-sm text-emerald-500">
                        <img
                          src={item.image}
                          alt="user name"
                          title="user name"
                          width="45"
                          height="45"
                          className="max-w-full rounded-full shrink-0"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-[#091725] text-[20px]">
                            {item.name}
                          </span>
                          <cite className="text-base text-[#091725] text-[16px]">
                            {/* <a href="http://www.microsoft.com">
                                      CEO, Microsoft
                                    </a> */}
                          </cite>
                        </div>
                      </div>
                      <div>
                        <img src={Google1}></img>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="bg-[#231ADF] py-5 mt-7 pl-5 lg:pl-0">
        <div className="flex flex-col lg:flex-row mx-auto gap-5 lg:gap-10 justify-center">
          {[
            "24/7 Video-Überwachung",
            "Bester Preis",
            "Zugang jederzeit",
            "Optimale Lagerungsbedingungen",
            "Versicherte Boxen",
          ].map((text, index) => (
            <div key={index} className="flex flex-row gap-2">
              <img
                src={correct}
                className="w-[30px] h-[25px]"
                alt="Check Icon"
              />
              <p className="text-[#EEEEEE] font-bold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
