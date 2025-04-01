
import People from "../../../assets/people.png"
import Quality from "../../../assets/quality.png";

import Map from "../../../assets/map.png"
const HighQualityStorageBoxes = () => {
    return (
      <>
        <div className="mx-auto max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div>
              <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#231ADF] text-left pl-2 lg:pl-0">
                Hochwertige Lagerboxen
              </h2>
              <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-left pl-2 lg:pl-0">
                Zufriedenheit garantiert!
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 pl-3 lg:pl-0">
                <div className="">
                  <div className="flex flex-row items-center mt-5">
                    <img src={Quality} alt="Quality" />
                    <h3 className="ml-2">
                      Jederzeit lagern - 24 Stunden am Tag geöffnet
                    </h3>
                  </div>
                  <div className="flex flex-row items-center mt-5">
                    <img src={Quality} alt="Quality" />
                    <h3 className="ml-2">Videoüberwachung</h3>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row items-center mt-5">
                    <img src={Quality} alt="Quality" />
                    <h3 className="ml-2"> Einfach online buchen</h3>
                  </div>
                  <div className="flex flex-row items-center mt-5">
                    <img src={Quality} alt="Quality" />
                    <h3 className="ml-2">versichert</h3>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row items-center mt-5 ">
                    <img src={Quality} alt="Quality" />
                    <h3 className="ml-2">
                      Ein-und Ausladen unter trockenen Bedingungen
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end flex-row">
              <img src={People}></img>
            </div>
          </div>
          <div className="bg-[#F5F5F5] text-center py-10 justify-center items-center mx-auto flex flex-col">
            <h5 className="text-[#0C094E] font-normal text-[24px]">
              Lösen Sie Ihr Platzproblem in nur 3 Minuten!
            </h5>
            <p className="text-[#231ADF] text-[18px] font-bold rounded-full border border-[#231ADF] w-[160px] mt-2">
              Buchen Sie
              <i className="fa fa-long-arrow-right pl-3" aria-hidden="true"></i>
            </p>
          </div>
        </div>

        <div>
          <img src={Map} className="w-full h-auto object-cover"></img>
        </div>
      </>
    );
};

export default HighQualityStorageBoxes;