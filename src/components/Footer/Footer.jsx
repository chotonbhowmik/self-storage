import FooterLogo from "../../assets/footerlogo.png"
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/instagram.png";
const Footer = () => {
    return (
      <>
        <div className="max-w-7xl mx-auto pt-10 px-5">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            <div className="w-full sm:w-1/2 lg:w-1/4 flex  lg:justify-start">
              <img src={FooterLogo} className="w-40" alt="Footer Logo" />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-[#0C094E] font-bold text-[28px]">Seiten</h2>
              <div className="pt-5 space-y-2">
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Raumfahrt-Rechner
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Mortara-Platz
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Lagerraum mieten
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Bedingungen und Konditionen
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Datenschutz
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Impressum
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-[#0C094E] font-bold text-[28px]">Kontakt</h2>
              <div className="pt-5 space-y-2">
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Tel: 🇦🇹 +43 699 177 22 661
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  office@safestore.at
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Mortara-Platz
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Dresdnerstrasse 122
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  1200 Wien, Österreich
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-[#0C094E] font-bold text-[28px]">
                Folgen Sie uns
              </h2>
              <div className="pt-5 space-y-2">
                <div className="flex flex-row gap-2">
                  <img src={Facebook}></img>
                  <p className="text-[18px] font-normal text-[#0C094E]">
                    Facebook
                  </p>
                </div>

                <div className="flex flex-row gap-2">
                  <img src={Instagram}></img>
                  <p className="text-[18px] font-normal text-[#0C094E]">
                    Space Calculator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-3"></hr>
        <p className="text-[#0C094E] font-normal text-[18px] text-center py-5">
          Copyright © 2025 FOXBOX Selfstorage
        </p>
      </>
    );
};

export default Footer;