import FooterLogo from "../../assets/footerlogo.png"
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/instagram.png";
const Footer = () => {
    return (
      <>
        <div className="max-w-7xl mx-auto pt-10 px-5">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            <div className="w-full sm:w-1/2 lg:w-1/4 flex justify-center lg:justify-start">
              <img src={FooterLogo} className="w-40" alt="Footer Logo" />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-[#0C094E] font-bold text-[28px]">Pages</h2>
              <div className="pt-5 space-y-2">
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Space Calculator
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Mortara Square
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Rent Storage Space
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Terms and Conditions
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Data Protection
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Imprint
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-[#0C094E] font-bold text-[28px]">contact</h2>
              <div className="pt-5 space-y-2">
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Tel: 🇦🇹 +43 699 177 22 661
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  office@safestore.at
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Mortara Platz
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  Dresdnerstrasse 122
                </p>
                <p className="text-[18px] font-normal text-[#0C094E]">
                  1200 Vienna, Austria
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <h2 className="text-[#0C094E] font-bold text-[28px]">
                Follow us
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
        <p className="text-[#0C094E] font-normal text-[18px] text-center py-5">Copyright © 2025 FOXBOX Selfstorage</p>
      </>
    );
};

export default Footer;