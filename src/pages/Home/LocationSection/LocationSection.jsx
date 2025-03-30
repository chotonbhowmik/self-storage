import Insurance from "../../../assets/Insurance.jpg"
import Access from "../../../assets/Access.jpg"

import Insurantransport from "../../../assets/Insurantransport.jpg";
import Insurance2 from "../../../assets/insurance2.jpg";
const LocationSection = () => {
    return (
      <div className="my-10 px-2 lg:px-0">
        <div>
          <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#231ADF] text-center">
            Lagerung im Safe Store
          </h2>
          <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-center ">
            Unser Standort in Wien-Brigittenau:
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-5 pt-5">
          <div className="overflow-hidden text-left bg-white rounded  text-slate-500 shadow-slate-200">
            <img src={Insurance} className="mx-auto"></img>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
                Versicherung
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Ihre eingelagerten Gegenstände sind bis zu 5.000 € versichert.
              </p>
            </div>
          </div>

          <div className="overflow-hidden text-left bg-white rounded  text-slate-500 shadow-slate-200">
            <img src={Access} className="mx-auto"></img>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
                Zugangskontrolle
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Ihr PIN-Code wird Ihnen am Tag Ihres Einzugs per E-Mail
                zugesandt. Einzug.
              </p>
            </div>
          </div>

          <div className="overflow-hidden text-left bg-white rounded  text-slate-500 shadow-slate-200">
            <img src={Insurantransport} className="mx-auto"></img>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF] text-left">
                Versicherungstransporthilfence
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Ihre eingelagerten Gegenstände sind bis zu 5.000 € versichert.
              </p>
            </div>
          </div>

          <div className="overflow-hidden  bg-white rounded  text-slate-500 shadow-slate-200 text-left">
            <img src={Insurance2} className="mx-auto"></img>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
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