import phone from "../../../assets/phone.png";
import temp from "../../../assets/temp.png";
import video from "../../../assets/video.png";
import correct from "../../../assets/correct.png"

const SafeSection = () => {
  return (
    <div className="py-10">
      <div className="pb-14">
        <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#231ADF] text-center">
          Safe, high quality, fast
        </h2>
        <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-center ">
          storage space for your space needs
        </p>
      </div>
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-4">
        <div className="overflow-hidden text-center bg-white rounded  text-slate-500 shadow-slate-200">
          <img src={phone} className="mx-auto"></img>
          {/*  <!-- Body--> */}
          <div className="p-6">
            <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
              Book, move in, done!
            </h3>
            <p className="text-[#0C094E] text-[18px] font-normal">
              At SafeStore you can book storage space online. You have immediate
              access at any time.
            </p>
          </div>
        </div>

        <div className="overflow-hidden text-center bg-white rounded  text-slate-500 shadow-slate-200">
          <img src={temp} className="mx-auto"></img>

          <div className="p-6">
            <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
              Optimal storage conditions
            </h3>
            <p className="text-[#0C094E] text-[18px] font-normal">
              Our storage rooms are dry and heated – good for storage.
            </p>
          </div>
        </div>

        <div className="overflow-hidden text-center bg-white rounded  text-slate-500 shadow-slate-200">
          <img src={video} className="mx-auto"></img>

          <div className="p-6">
            <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
              24/7 video surveillance
            </h3>
            <p className="text-[#0C094E] text-[18px] font-normal">
              Cameras and regular checks in the warehouse ensure safety.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#231ADF] py-5 mt-7 pl-5 lg:pl-0">
        <div className="flex flex-col lg:flex-row mx-auto gap-5 lg:gap-10 justify-center">
          <div className="flex flex-row gap-2">
            <img src={correct} className="w-[30px] h-[25px] object-fit"></img>
            <p className="text-[#EEEEEE] font-bold text[20px]">
              24/7 Video Survaillance
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <img src={correct} className="w-[30px] h-[25px] object-fit"></img>
            <p className="text-[#EEEEEE] font-bold text[20px]">Best Price</p>
          </div>

          <div className="flex flex-row gap-2">
            <img src={correct} className="w-[30px] h-[25px] object-fit"></img>
            <p className="text-[#EEEEEE] font-bold text[20px]">
              Anytime Access
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <img src={correct} className="w-[30px] h-[25px] object-fit"></img>
            <p className="text-[#EEEEEE] font-bold text[20px]">
              Optimal Storage Conditions
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <img src={correct} className="w-[30px] h-[25px] object-fit"></img>
            <p className="text-[#EEEEEE] font-bold text[20px]">Insured Units</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeSection;
