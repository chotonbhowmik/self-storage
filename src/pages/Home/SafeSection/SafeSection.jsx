import phone from "../../../assets/phone.png";
import temp from "../../../assets/temp.png";
import video from "../../../assets/video.png";
import correct from "../../../assets/correct.png"

const SafeSection = () => {
  return (
    <div className="py-10 dark:bg-white">
      <div className="pb-14">
        <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#231ADF] text-center  ">
          Sicher, hochwertig, schnell
        </h2>
        <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-center ">
          Lagerraum für Ihren Platzbedarf
        </p>
      </div>
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-4">
        <div className="overflow-hidden text-center bg-white rounded  text-slate-500 shadow-slate-200">
          <img src={phone} className="mx-auto"></img>
          {/*  <!-- Body--> */}
          <div className="p-6">
            <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
              Buchen, Einziehen, fertig!
            </h3>
            <p className="text-[#0C094E] text-[18px] font-normal">
              Bei FoxBox bucht man Lagerraum online. Zutritt haben Sie sofort &
              jederzeit.
            </p>
          </div>
        </div>

        <div className="overflow-hidden text-center bg-white rounded  text-slate-500 shadow-slate-200">
          <img src={temp} className="mx-auto"></img>

          <div className="p-6">
            <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
              Optimale Lagerbedingungen
            </h3>
            <p className="text-[#0C094E] text-[18px] font-normal">
              Unsere Lagerräume sind trocken und geheizt – gut zum Lagern.
            </p>
          </div>
        </div>

        <div className="overflow-hidden text-center bg-white rounded  text-slate-500 shadow-slate-200">
          <img src={video} className="mx-auto"></img>

          <div className="p-6">
            <h3 className="mb-4 text-[24px] font-semibold text-[#231ADF]">
              24/7 Videoüberwacht
            </h3>
            <p className="text-[#0C094E] text-[18px] font-normal">
              Kameras und regelmässige Kontrollen im Lager sorgen für
              Sicherheit.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#231ADF] py-5 mt-7 pl-5 lg:pl-0">
        <div className="flex flex-col lg:flex-row mx-auto gap-5 lg:gap-10 justify-center">
          <div className="flex flex-row gap-2">
            <img src={correct} className="w-[30px] h-[25px] object-fit"></img>
            <p className="text-[#EEEEEE] font-bold text[20px]">
              24/7 Video-Überwachung
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <img src={correct} className="w-[30px] h-[25px] object-fit"></img>
            <p className="text-[#EEEEEE] font-bold text[20px]">Bester Preis</p>
          </div>

          <div className="flex flex-row gap-2">
            <img src={correct} className="w-[30px] h-[25px] object-fit"></img>
            <p className="text-[#EEEEEE] font-bold text[20px]">
              Jederzeitiger Zugang
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <img src={correct} className="w-[30px] h-[25px] object-fit"></img>
            <p className="text-[#EEEEEE] font-bold text[20px]">
              Optimale Lagerungsbedingungen
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <img src={correct} className="w-[30px] h-[25px] object-fit"></img>
            <p className="text-[#EEEEEE] font-bold text[20px]">
              Versicherte Boxen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeSection;
