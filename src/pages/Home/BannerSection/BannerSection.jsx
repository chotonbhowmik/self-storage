import BannerBg from "../../../assets/banner.jpg";
import star from "../../../assets/start.png";
import number from "../../../assets/24.png";
const BannerSection = () => {
  return (
    <div
      className="hero grid  "
      style={{
        backgroundImage: `radial-gradient(circle, rgba(51, 116, 173, 0.32), rgba(0, 0, 0, 1)), url(${BannerBg})`,
        gridTemplateColumns: "1fr auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-neutral-content text-center flex justify-center items-center pb-20">
        <div className="max-w-7xl">
          <div className="justify-self-end">
            <img src={star} alt="Star" className="w-32 h-auto" />
          </div>
          <img src={number} className="object-cover"></img>
          <h1 className="mb-5 text-[30px] lg:text-[72px]  font-bold text-[#FFFFFF]  leading-[40px] lg:leading-[80px]">
            Rent worry-free storage space in Vienna-Brigittenau
          </h1>

          <div className="bg-white lg:rounded-full  rounded-tl-[30px] rounded-tr-[30px] max-w-4xl mx-auto p-6">
            <form className="w-full">
              <div className="flex flex-wrap justify-between space-y-2 md:space-y-0 md:flex-row">
                {/* LOCATION FIELD */}
                <div className="relative w-full md:w-72">
                  <div className="relative w-[280px]">
                    <select
                      id="id-01"
                      name="id-01"
                      required
                      className="peer h-[40px] w-full appearance-none border-b-2 lg:border-r-2 lg:border-b-0 border-slate-300 px-4 pr-10 text-sm text-[#1942BB] font-bold outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    >
                      <option value="" disabled selected>
                        CHOOSE LOCATION
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                    <i className="fa fa-long-arrow-down absolute right-3 top-1/2 -translate-y-1/2 text-[#1942BB] pointer-events-none"></i>
                  </div>
                </div>

                {/* UNIT FIELD */}
                <div className="relative w-full md:w-72">
                  <div className="relative w-[280px]">
                    <select
                      id="id-02"
                      name="id-02"
                      required
                      className="peer h-[40px] w-full appearance-none  lg:border-r-2 lg:border-b-0 border-slate-300 px-4 pr-10 text-sm text-[#1942BB] font-bold outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    >
                      <option value="" disabled selected>
                        CHOOSE UNIT
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                    <i className="fa fa-long-arrow-down absolute right-3 top-1/2 -translate-y-1/2 text-[#1942BB] pointer-events-none"></i>
                  </div>
                </div>

                {/* BUTTON */}
                <div className="w-full md:w-auto flex justify-center md:justify-start">
                  <button className="lg:max-w-[250px] w-full rounded-full bg-[#1C2253] text-white py-3 px-8 mt-4 md:mt-0">
                    Find Your Unit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-[#00C6AA] lg:w-[650px] rounded-bl-[30px] rounded-br-[30px] text-white mx-auto text-center">
            <p className="text-[16px] font-normal py-2">
              Only 10 units available. Starting from 59:00 EUR per month. Book
              your unit now
            </p>
          </div>
        </div>
      </div>
      {/* Star image on the right side */}
    </div>
  );
};

export default BannerSection;
