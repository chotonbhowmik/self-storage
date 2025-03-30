import priceImage from "../../../assets/price.png"

const PricingSection = () => {
    return (
      <div className="mx-auto max-w-7xl" >
        <div className="pb-14">
          <h2 className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#231ADF] text-center">
            prices for storage rooms
          </h2>
          <p className="font-bold text-[25px] lg:text-[40px] leading[36px] text-[#0C094E] text-center ">
            from 1.5 m² to 10.0 m²
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* card 1 */}
          <div className=" w-full mx-auto">
            <div className="bg-[#274EFF] w-80 rounded-tl-[30px] rounded-tr-[30px] text-white mx-auto text-center">
              <p className="text-[18px] font-normal">Only 4 units left!</p>
            </div>
            <div className=" bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
              <div className="flex flex-col justify-center text-center">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-[24px] font-semibold text-[#231ADF] text-center">
                    Mini
                  </h3>
                  <img
                    src={priceImage}
                    className="h-[240px] w-[240px] object-fit mx-auto "
                  ></img>
                  <h4>
                    <span className="text-[18px] font-bold tracking-tighter  text-[#0C094E]">
                      Box 1.5 - 1.9 m²
                    </span>
                    <br></br>
                    <span className="text-[18px] font-normal text-[#0C094E]">
                      space for 40+ boxes.
                    </span>
                  </h4>

                  <div>
                    <h4 className="text-[40px] text-[#231ADF] font-normal">
                      € 49
                      <span className="text-[#0C094E] text-[18px] font-normal">
                        /Monat
                      </span>
                    </h4>
                  </div>
                  <button className="border border-[#231ADF] rounded-full px-[30px] py-[10px]">
                    <span className="text-[18px] font-bold text-[#231ADF]">
                      Boxen buchen
                    </span>
                  </button>
                </header>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className=" w-full mx-auto">
            <div className="bg-[#274EFF] w-80 rounded-tl-[30px] rounded-tr-[30px] text-white mx-auto text-center">
              <p className="text-[18px] font-normal">Only 4 units left!</p>
            </div>
            <div className=" bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
              <div className="flex flex-col justify-center text-center">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-[24px] font-semibold text-[#231ADF] text-center">
                    Mini
                  </h3>
                  <img
                    src={priceImage}
                    className="h-[240px] w-[240px] object-fit mx-auto "
                  ></img>
                  <h4>
                    <span className="text-[18px] font-bold tracking-tighter  text-[#0C094E]">
                      Box 1.5 - 1.9 m²
                    </span>
                    <br></br>
                    <span className="text-[18px] font-normal text-[#0C094E]">
                      space for 40+ boxes.
                    </span>
                  </h4>

                  <div>
                    <h4 className="text-[40px] text-[#231ADF] font-normal">
                      € 49
                      <span className="text-[#0C094E] text-[18px] font-normal">
                        /Monat
                      </span>
                    </h4>
                  </div>
                  <button className="border border-[#231ADF] rounded-full px-[30px] py-[10px]">
                    <span className="text-[18px] font-bold text-[#231ADF]">
                      Boxen buchen
                    </span>
                  </button>
                </header>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className=" w-full mx-auto">
            <div className="bg-[#274EFF] w-80 rounded-tl-[30px] rounded-tr-[30px] text-white mx-auto text-center">
              <p className="text-[18px] font-normal">Only 4 units left!</p>
            </div>
            <div className=" bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
              <div className="flex flex-col justify-center text-center">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-[24px] font-semibold text-[#231ADF] text-center">
                    Mini
                  </h3>
                  <img
                    src={priceImage}
                    className="h-[240px] w-[240px] object-fit mx-auto "
                  ></img>
                  <h4>
                    <span className="text-[18px] font-bold tracking-tighter  text-[#0C094E]">
                      Box 1.5 - 1.9 m²
                    </span>
                    <br></br>
                    <span className="text-[18px] font-normal text-[#0C094E]">
                      space for 40+ boxes.
                    </span>
                  </h4>

                  <div>
                    <h4 className="text-[40px] text-[#231ADF] font-normal">
                      € 49
                      <span className="text-[#0C094E] text-[18px] font-normal">
                        /Monat
                      </span>
                    </h4>
                  </div>
                  <button className="border border-[#231ADF] rounded-full px-[30px] py-[10px]">
                    <span className="text-[18px] font-bold text-[#231ADF]">
                      Boxen buchen
                    </span>
                  </button>
                </header>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-11 justify-center text-center">
          {/* card 1 */}
          <div className=" w-full lg:w-[450px] ">
            <div className="bg-[#274EFF] w-80 rounded-tl-[30px] rounded-tr-[30px] text-white mx-auto text-center">
              <p className="text-[18px] font-normal">Only 4 units left!</p>
            </div>
            <div className=" bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
              <div className="flex flex-col justify-center text-center">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-[24px] font-semibold text-[#231ADF] text-center">
                    Mini
                  </h3>
                  <img
                    src={priceImage}
                    className="h-[240px] w-[240px] object-fit mx-auto "
                  ></img>
                  <h4>
                    <span className="text-[18px] font-bold tracking-tighter  text-[#0C094E]">
                      Box 1.5 - 1.9 m²
                    </span>
                    <br></br>
                    <span className="text-[18px] font-normal text-[#0C094E]">
                      space for 40+ boxes.
                    </span>
                  </h4>

                  <div>
                    <h4 className="text-[40px] text-[#231ADF] font-normal">
                      € 49
                      <span className="text-[#0C094E] text-[18px] font-normal">
                        /Monat
                      </span>
                    </h4>
                  </div>
                  <button className="border border-[#231ADF] rounded-full px-[30px] py-[10px]">
                    <span className="text-[18px] font-bold text-[#231ADF]">
                      Boxen buchen
                    </span>
                  </button>
                </header>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className=" w-full lg:w-[450px] ">
            <div className="bg-[#274EFF] w-80 rounded-tl-[30px] rounded-tr-[30px] text-white mx-auto text-center">
              <p className="text-[18px] font-normal">Only 4 units left!</p>
            </div>
            <div className=" bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
              <div className="flex flex-col justify-center text-center">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-[24px] font-semibold text-[#231ADF] text-center">
                    Mini
                  </h3>
                  <img
                    src={priceImage}
                    className="h-[240px] w-[240px] object-fit mx-auto "
                  ></img>
                  <h4>
                    <span className="text-[18px] font-bold tracking-tighter  text-[#0C094E]">
                      Box 1.5 - 1.9 m²
                    </span>
                    <br></br>
                    <span className="text-[18px] font-normal text-[#0C094E]">
                      space for 40+ boxes.
                    </span>
                  </h4>

                  <div>
                    <h4 className="text-[40px] text-[#231ADF] font-normal">
                      € 49
                      <span className="text-[#0C094E] text-[18px] font-normal">
                        /Monat
                      </span>
                    </h4>
                  </div>
                  <button className="border border-[#231ADF] rounded-full px-[30px] py-[10px]">
                    <span className="text-[18px] font-bold text-[#231ADF]">
                      Boxen buchen
                    </span>
                  </button>
                </header>
              </div>
            </div>
          </div>
          {/* card 3 */}
        </div>
        <div className="bg-[#F5F5F5] my-10 text-center py-10 justify-center items-center mx-auto flex flex-col">
          <h5 className="text-[#0C094E] font-normal text-[24px]">
            Storage boxes for small and large space problems:
          </h5>
          <p className="text-[#231ADF] text-[18px] font-bold rounded-full border border-[#231ADF] w-[160px] mt-2">
            Show all sizes
          </p>
        </div>
      </div>
    );
};

export default PricingSection;