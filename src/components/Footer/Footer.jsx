import FooterLogo from "../../assets/footerlogo.webp";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/instagram.png";
const Footer = () => {
    return (
      <>
        <div className="max-w-7xl mx-auto pt-10 px-5 dark:bg-white">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            <div className="w-full sm:w-1/2 lg:w-1/4 flex  lg:justify-start">
              <img src={FooterLogo} className="w-40" alt="Footer Logo" />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-[#0C094E] font-bold text-[28px]">Seiten</h2>
              <div className="pt-5 space-y-2">
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Platzrechner
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Landstrasse
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
                  Tel: 🇦🇹 +436764931547
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  office@foxbox-storage.at
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  HKW GmbH
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Weyrgasse 9
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  1030 Wien Österreich
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
                    Platzrechner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-3 dark:bg-white"></hr>
        <a
          href="https://mo-media.at/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-[#0C094E] font-normal text-[18px] text-center py-5 dark:bg-white">
            © 2025 WEBSITE DESIGN MO MEDIA
          </p>
        </a>
      </>
    );
};

export default Footer;