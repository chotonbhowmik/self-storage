import Insurance from "../../../assets/Insurance.jpg"
import Access from "../../../assets/Access.jpg"
import Insurantransport from "../../../assets/Insurantransport.jpg";
import Insurance2 from "../../../assets/insurance2.jpg";
const LocationSection = () => {
    return (
      <div className="my-10 px-2 lg:px-0 dark:bg-white">
        <div>
          <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#231ADF] text-center">
            Lagerung in der FoxBox
          </h2>
          <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-center ">
            Unser Standort in Wien-Landstrasse:
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-5 pt-5">
          <div className="overflow-hidden relative bg-white rounded text-slate-500 shadow-slate-200">
            <img src={Insurance} className="w-full h-auto" />
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-white/80 p-4 h-[130px]">
              <h3 className="mb-2 text-[24px] font-semibold text-[#231ADF]">
                Lastenaufzug
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Der Lastenaufzug transportiert schwere Güter zuverlässig
                zwischen den Etagen des Lagers.
              </p>
            </div>
          </div>

          <div className="overflow-hidden relative bg-white rounded text-slate-500 shadow-slate-200">
            <img src={Access} className="w-full h-auto" />
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-white/80 p-4 h-[130px]">
              <h3 className="mb-2 text-[24px] font-semibold text-[#231ADF]">
                Zugangskontrolle
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Ihr PIN-Code wird Ihnen am Tag Ihres Einzugs per E-Mail
                zugesandt.
              </p>
            </div>
          </div>

          <div className="overflow-hidden relative bg-white rounded text-slate-500 shadow-slate-200">
            <img src={Insurantransport} className="w-full h-auto" />
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-white/80 p-4 h-[130px]">
              <h3 className="mb-2 text-[24px] font-semibold text-[#231ADF]">
                Breite Gänge
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Der breite Gang bietet ausreichend Platz für den reibungslosen
                Transport von Waren.
              </p>
            </div>
          </div>

          <div className="overflow-hidden relative bg-white rounded text-slate-500 shadow-slate-200">
            <img src={Insurance2} className="w-full h-auto" />
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-white/80 p-4 h-[130px]">
              <h3 className="mb-2 text-[24px] font-semibold text-[#231ADF]">
                Versicherung
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Barrierefreier Zugang direkt von der Straße aus.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LocationSection;