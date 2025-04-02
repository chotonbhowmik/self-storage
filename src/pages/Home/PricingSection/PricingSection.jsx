import priceImage from "../../../assets/price.png"

const PricingSection = () => {
    return (
      <div className="mx-auto max-w-7xl dark:bg-white">
        <div className="pb-14">
          <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#231ADF] text-center">
            Preise für Lagerräume
          </h2>
          <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-center ">
            von 1,5 m² bis 10,0 m²
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 px-5 lg:px-0">
          {/* card 1 */}
          <div className=" w-full mx-auto">
            <div className="bg-[#274EFF] w-80 rounded-tl-[30px] rounded-tr-[30px] text-white mx-auto text-center">
              <p className="text-[18px] font-normal">Nur noch 4 Boxen übrig!</p>
            </div>
            <div className=" bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
              <div className="flex flex-col justify-center text-center">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-[24px] font-semibold text-[#231ADF] text-center">
                    Locker
                  </h3>
                  <img
                    src={priceImage}
                    className="h-[240px] w-[240px] object-fit mx-auto "
                  ></img>
                  <h4>
                    <span className="text-[18px] font-bold tracking-tighter  text-[#0C094E]">
                      box 1,00 m² | 1,00 m³
                    </span>
                    <br></br>
                    <span className="text-[18px] font-normal text-[#0C094E]">
                      brutto pro Monat
                    </span>
                  </h4>

                  <div>
                    <h4 className="text-[30px] text-[#231ADF] font-normal">
                      29,90 EUR
                      <span className="text-[#0C094E] text-[18px] font-normal">
                        /Monat
                      </span>
                    </h4>
                  </div>
                  <a href="https://rent.foxbox-storage.at/de/rent?step=1">
                    <button className="border border-[#231ADF] rounded-full px-[30px] py-[10px]">
                      <span className="text-[18px] font-bold text-[#231ADF]">
                        Boxen buchen
                      </span>
                    </button>
                  </a>
                </header>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className=" w-full mx-auto">
            <div className="bg-[#274EFF] w-80 rounded-tl-[30px] rounded-tr-[30px] text-white mx-auto text-center">
              <p className="text-[18px] font-normal">Nur noch 4 Boxen übrig!</p>
            </div>
            <div className=" bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
              <div className="flex flex-col justify-center text-center">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-[24px] font-semibold text-[#231ADF] text-center">
                    Locker XL
                  </h3>
                  <img
                    src={priceImage}
                    className="h-[240px] w-[240px] object-fit mx-auto "
                  ></img>
                  <h4>
                    <span className="text-[18px] font-bold tracking-tighter  text-[#0C094E]">
                      box 1,00 m² | 1,70 m³
                    </span>
                    <br></br>
                    <span className="text-[18px] font-normal text-[#0C094E]">
                      brutto pro Monat
                    </span>
                  </h4>

                  <div>
                    <h4 className="text-[30px] text-[#231ADF] font-normal">
                      34,90 EUR
                      <span className="text-[#0C094E] text-[18px] font-normal">
                        /Monat
                      </span>
                    </h4>
                  </div>
                  <a href="https://rent.foxbox-storage.at/de/rent?step=1">
                  
                  <button className="border border-[#231ADF] rounded-full px-[30px] py-[10px]">
                    <span className="text-[18px] font-bold text-[#231ADF]">
                      Boxen buchen
                    </span>
                  </button>
                  </a>
                </header>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className=" w-full mx-auto">
            <div className="bg-[#274EFF] w-80 rounded-tl-[30px] rounded-tr-[30px] text-white mx-auto text-center">
              <p className="text-[18px] font-normal">Nur noch 4 Boxen übrig!</p>
            </div>
            <div className=" bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
              <div className="flex flex-col justify-center text-center">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-[24px] font-semibold text-[#231ADF] text-center">
                    Small
                  </h3>
                  <img
                    src={priceImage}
                    className="h-[240px] w-[240px] object-fit mx-auto "
                  ></img>
                  <h4>
                    <span className="text-[18px] font-bold tracking-tighter  text-[#0C094E]">
                      box (1-2m²)
                    </span>
                    <br></br>
                    <span className="text-[18px] font-normal text-[#0C094E]">
                      brutto pro Monat.
                    </span>
                  </h4>

                  <div>
                    <h4 className="text-[30px] text-[#231ADF] font-normal">
                      VON 74,90 EUR
                      <span className="text-[#0C094E] text-[18px] font-normal">
                        /Monat
                      </span>
                    </h4>
                  </div>
                  <a href="https://rent.foxbox-storage.at/de/rent?step=1">
                    <button className="border border-[#231ADF] rounded-full px-[30px] py-[10px]">
                      <span className="text-[18px] font-bold text-[#231ADF]">
                        Boxen buchen
                      </span>
                    </button>
                  </a>
                </header>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-11 justify-center text-center px-5 lg:px-0">
          {/* card 1 */}
          <div className=" w-full lg:w-[450px] ">
            <div className="bg-[#274EFF] w-80 rounded-tl-[30px] rounded-tr-[30px] text-white mx-auto text-center">
              <p className="text-[18px] font-normal">Nur noch 4 Boxen übrig!</p>
            </div>
            <div className=" bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
              <div className="flex flex-col justify-center text-center">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-[24px] font-semibold text-[#231ADF] text-center">
                    Medium
                  </h3>
                  <img
                    src={priceImage}
                    className="h-[240px] w-[240px] object-fit mx-auto "
                  ></img>
                  <h4>
                    <span className="text-[18px] font-bold tracking-tighter  text-[#0C094E]">
                      box (3-4m²)
                    </span>
                    <br></br>
                    <span className="text-[18px] font-normal text-[#0C094E]">
                      brutto pro Monat
                    </span>
                  </h4>

                  <div>
                    <h4 className="text-[30px] text-[#231ADF] font-normal">
                      VON 202,23 EUR
                      <span className="text-[#0C094E] text-[18px] font-normal">
                        /Monat
                      </span>
                    </h4>
                  </div>
                  <a href="https://rent.foxbox-storage.at/de/rent?step=1">
                    <button className="border border-[#231ADF] rounded-full px-[30px] py-[10px]">
                      <span className="text-[18px] font-bold text-[#231ADF]">
                        Boxen buchen
                      </span>
                    </button>
                  </a>
                </header>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className=" w-full lg:w-[450px] ">
            <div className="bg-[#274EFF] w-80 rounded-tl-[30px] rounded-tr-[30px] text-white mx-auto text-center">
              <p className="text-[18px] font-normal">Nur noch 4 Boxen übrig!</p>
            </div>
            <div className=" bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
              <div className="flex flex-col justify-center text-center">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-[24px] font-semibold text-[#231ADF] text-center">
                    Large
                  </h3>
                  <img
                    src={priceImage}
                    className="h-[240px] w-[240px] object-fit mx-auto "
                  ></img>
                  <h4>
                    <span className="text-[18px] font-bold tracking-tighter  text-[#0C094E]">
                      box (6-10m²)
                    </span>
                    <br></br>
                    <span className="text-[18px] font-normal text-[#0C094E]">
                      brutto pro Monat
                    </span>
                  </h4>

                  <div>
                    <h4 className="text-[30px] text-[#231ADF] font-normal">
                      337,05 EUR
                      <span className="text-[#0C094E] text-[18px] font-normal">
                        /Monat
                      </span>
                    </h4>
                  </div>
                  <a href="https://rent.foxbox-storage.at/de/rent?step=1">
                  
                  <button className="border border-[#231ADF] rounded-full px-[30px] py-[10px]">
                    <span className="text-[18px] font-bold text-[#231ADF]">
                      Boxen buchen
                    </span>
                  </button>
                  </a>
                </header>
              </div>
            </div>
          </div>
          {/* card 3 */}
        </div>
        <div className="bg-[#F5F5F5] my-10 text-center py-10 justify-center items-center mx-auto flex flex-col">
          <h5 className="text-[#0C094E] font-normal text-[24px]">
            Largerboxen für kleine und große Platzprobleme:
          </h5>
          <p className="text-[#231ADF] text-[18px] font-bold rounded-full border border-[#231ADF] w-[220px] mt-2">
            Alle Größen anzeigen
          </p>
        </div>
      </div>
    );
};

export default PricingSection;