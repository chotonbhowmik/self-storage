import Insurance from "../../../assets/isurance.png"
import Access from "../../../assets/access.png"

import Insurantransport from "../../../assets/Insurantransport.png";
import Insurance2 from "../../../assets/insurance2.png";
const LocationSection = () => {
    return (
      <div className="my-10 px-2 lg:px-0">
        <div>
          <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#231ADF] text-center">
            Storage at Safe Store
          </h2>
          <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-center ">
            Our location in Vienna-Brigittenau:
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-5 pt-5">
          <div className="overflow-hidden text-left bg-white rounded  text-slate-500 shadow-slate-200">
            <img src={Insurance} className="mx-auto"></img>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
                Insurance
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Your stored items are insured up to €5,000.
              </p>
            </div>
          </div>

          <div className="overflow-hidden text-left bg-white rounded  text-slate-500 shadow-slate-200">
            <img src={Access} className="mx-auto"></img>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
                access control
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Your PIN code will be sent to you by email on the day you move
                in.
              </p>
            </div>
          </div>

          <div className="overflow-hidden text-left bg-white rounded  text-slate-500 shadow-slate-200">
            <img src={Insurantransport} className="mx-auto"></img>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF] text-left">
                Insurantransport aidsce
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Your stored items are insured up to €5,000.
              </p>
            </div>
          </div>

          <div className="overflow-hidden  bg-white rounded  text-slate-500 shadow-slate-200 text-left">
            <img src={Insurance2} className="mx-auto"></img>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
                Insurance
              </h3>
              <p className="text-[#0C094E] text-[18px] font-normal">
                Barrier-free access directly from the street.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LocationSection;